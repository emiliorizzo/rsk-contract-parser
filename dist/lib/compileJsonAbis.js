"use strict";var _fs = _interopRequireDefault(require("fs"));
var _util = _interopRequireDefault(require("util"));
var _path = _interopRequireDefault(require("path"));
var _types = require("./types");
var _utils = require("./utils");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const readDir = _util.default.promisify(_fs.default.readdir);
const readFile = _util.default.promisify(_fs.default.readFile);
const writeFile = _util.default.promisify(_fs.default.writeFile);

const jsonPath = `${__dirname}/jsonAbis`;
const destinationFile = `${__dirname}/compiled_abi.json`;

compileAbi().then(abi => {
  writeFile(destinationFile, JSON.stringify(abi, null, 2)).
  then(() => {
    console.log(`new abi saved on ${destinationFile}`);
    process.exit(0);
  });
});

async function compileAbi() {
  try {
    let files = await readDir(jsonPath);
    files = files.filter(file => _path.default.extname(file) === '.json');
    if (!files || !files.length) throw new Error('No json files');
    let abi = await Promise.all(files.map(file => readJson(`${jsonPath}/${file}`)));
    abi = abi.reduce((a, v, i, array) => v.concat(a));
    abi = processAbi(abi);
    return abi;
  } catch (err) {
    console.log('Compile Error', err);
    process.exit(9);
  }
}

async function readJson(file) {
  console.log(`Reading file ${file}`);
  try {
    let json = await readFile(file, 'utf-8');
    return JSON.parse(json);
  } catch (err) {
    console.log(file, err);
    return Promise.reject(err);
  }
}

function processAbi(abi) {
  // remove fallbacks
  abi = abi.filter(a => a.type !== 'fallback');
  // remove duplicates
  abi = [...new Set(abi.map(a => JSON.stringify(a)))].map(a => JSON.parse(a));
  // add signatures
  abi = (0, _utils.addSignatureDataToAbi)(abi);
  // detect 4 bytes collisions
  let signatures = abi.map(a => a[_types.ABI_SIGNATURE].signature).filter(v => v);
  signatures = [...new Set(signatures)];
  let fourBytes = signatures.map(s => s.slice(0, 8));
  if (fourBytes.length !== [...new Set(fourBytes)].length) {
    console.log(fourBytes.filter((v, i) => fourBytes.indexOf(v) !== i));
    throw new Error('4bytes collision');
  }
  // check events
  let duppEvents = searchDupplicatedEvents(abi);
  if (duppEvents) throw new Error('Dupplicated events');
  return abi;
}

function searchDupplicatedEvents(abi) {
  let events = (0, _utils.abiEvents)(abi).map(e => {
    let s = e[_types.ABI_SIGNATURE];
    return `${s.signature}_${s.indexed}`;
  });
  let unique = [...new Set(events)];
  return events.length !== unique.length;
}

process.on('unhandledRejection', err => {
  console.error(err);
  process.exit(9);
});