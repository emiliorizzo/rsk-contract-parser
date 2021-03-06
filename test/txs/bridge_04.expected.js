
import { result as tx } from './bridge_04.json'

export default {
  tx,
  netId: 30,
  expect: {
    events: [
      {
        logIndex: '0x0',
        blockNumber: '0xc7085',
        blockHash: '0x109e08a4f8e24e74d31cb3fb7d170708591cd54f3788674941600d45a8af20da',
        transactionHash: '0x4daf92a4abc336f75e58671e495ca6d11e84e658111136625c81e589f8c620f6',
        transactionIndex: '0x1',
        address: '0x0000000000000000000000000000000001000006',
        data: '0xf90439f9021694f54a0468e86d6023c4864a49775acac8348a5c4cf901fea10245ef34f5ee218005c9c21227133e8568a4f3f11aeab919c66ff7b816ae1ffeeaa102481f02b7140acbf3fcdd9f72cf9a7d9484d8125e6df7c9451cfa55ba3b077265a102550cc87fa9061162b1dd395a16662529c9d8094c0feca17905a3244713d65fe8a1027319afb15481dbeb3c426bcc37f9a30e7f51ceff586936d85548d9395bcc2344a102ac1901b6fba2c1dbd47d894d2bd76c8ba1d296d65f6ab47f1c6b22afb53e73eba102c6018fcbd3e89f3cf9c7f48b3232ea3638eb8bf217e59ee290f5f0cfb2fb9259a1031aabbeb9b27258f98c2bf21f36677ae7bae09eb2d8c958ef41a20a6e88626d26a103250c11be0561b1d7ae168b1f59e39cbc1fd1ba3cf4d2140c1a365b2723a2bf93a10340df69f28d69eef60845da7d81ff60a9060d4da35c767f017b0dd4e20448fb44a10372cd46831f3b6afd4c044d160b7667e8ebf659d6cb51a825a3104df6ee0638c6a103ae72827d25030818c4947a800187b1fbcc33ae751e248ae60094cc989fb880f6a103b53899c390573471ba30e5054f78376c5f797fda26dde7a760789f02908cbad2a103b65cd7c22e70c0823882c6e71ac2c279ed31cbe29cb4a1c00572ce539c0c4573a103ecd8af1e93c57a1b8c7f917bd9980af798adeb0205e9687865673353eb041e8da103f909ae15558c70cc751aff9b1f495199c325b13a9e5b934fd6299cd30ec50be8f9021694b8e177b09d37441023682cc939767648b0ff4823f901fea10245ef34f5ee218005c9c21227133e8568a4f3f11aeab919c66ff7b816ae1ffeeaa1024cd9f00935993695af7e6c35165550a79eeac9fdfe95df83c5fdd8692ba2ef9ea1027319afb15481dbeb3c426bcc37f9a30e7f51ceff586936d85548d9395bcc2344a10294c817150f78607566e961b3c71df53a22022a80acbb982f83c0c8baac040adca102ac1901b6fba2c1dbd47d894d2bd76c8ba1d296d65f6ab47f1c6b22afb53e73eba102c6018fcbd3e89f3cf9c7f48b3232ea3638eb8bf217e59ee290f5f0cfb2fb9259a1031aabbeb9b27258f98c2bf21f36677ae7bae09eb2d8c958ef41a20a6e88626d26a103250c11be0561b1d7ae168b1f59e39cbc1fd1ba3cf4d2140c1a365b2723a2bf93a10340df69f28d69eef60845da7d81ff60a9060d4da35c767f017b0dd4e20448fb44a10372cd46831f3b6afd4c044d160b7667e8ebf659d6cb51a825a3104df6ee0638c6a103ae72827d25030818c4947a800187b1fbcc33ae751e248ae60094cc989fb880f6a103b53899c390573471ba30e5054f78376c5f797fda26dde7a760789f02908cbad2a103b65cd7c22e70c0823882c6e71ac2c279ed31cbe29cb4a1c00572ce539c0c4573a103d789669ec532f756461d3d6d83b316ed0c4272d48dc3b60cce0f494e9a09d3e7a103ecd8af1e93c57a1b8c7f917bd9980af798adeb0205e9687865673353eb041e8d86383333373337',
        topics: [
          '0x000000000000000000636f6d6d69745f66656465726174696f6e5f746f706963'
        ],
        event: 'commit_federation_topic',
        abi: {
          inputs: [
            {
              indexed: false,
              name: 'oldFederationAddress',
              type: 'string'
            },
            {
              indexed: false,
              name: 'oldFederationMembers',
              type: 'address[]'
            },
            {
              indexed: false,
              name: 'newFederationAddress',
              type: 'string'
            },
            {
              indexed: false,
              name: 'newFederationMembers',
              type: 'address[]'
            },
            {
              indexed: false,
              name: 'activationBlockNumber',
              type: 'string'
            }
          ],
          name: 'commit_federation_topic',
          type: 'event'
        },
        args: [
          '3Q3z9MD1CAcSkup6ehczYkStZtyUhgQbCg',
          [
            '0x1888fa870b97a4845a6a1f7eee4ebb507dbe0967',
            '0x530aad5be57e9be2084881b1d84f2a30e896ae36',
            '0x0474f314fef5373fd2afaafdcd7a8bdec1ab4309',
            '0x1e01385c6d522583575f60fee384f30405ffae01',
            '0xe4945372d758650275e23fa90f754d0f67fa66e2',
            '0xabb1d944a0dc0ead5a36b31087bd1fc31726e674',
            '0x32c865f2dbf36ce6f4cfcb624b559ef98b33a2d1',
            '0x7b197517908e9a434c0c69e8d42e8b74f8b86992',
            '0xf006f6202e0c29ef2e3b1532d2307427864ed77a',
            '0x67af698c927ae574fb43d45a50522c207f81100f',
            '0x49f10f59d693f0c7f3d2449da03e8f75f1535c68',
            '0x0a1d7f3c50dae072b019eff0f306ae1613b56b3c',
            '0x088cc4c0294db72221e448b1c194c1544e1b4581',
            '0x99c804ce247f3ed392313976de97fc733e699bc1',
            '0xf74b7e0d5bdd14eaedf725bb1549ce14abeb71dd'
          ],

          '3JYaMbjuKXkURNpLpDDDWMzUcNMt2GreNc',
          [
            '0x1888fa870b97a4845a6a1f7eee4ebb507dbe0967',
            '0xd6d5610e6b4b61ecfdcf983b76f57977bb50c857',
            '0x1e01385c6d522583575f60fee384f30405ffae01',
            '0x304660d1beeb0918b7b3f7657d8418686cb578b1',
            '0xe4945372d758650275e23fa90f754d0f67fa66e2',
            '0xabb1d944a0dc0ead5a36b31087bd1fc31726e674',
            '0x32c865f2dbf36ce6f4cfcb624b559ef98b33a2d1',
            '0x7b197517908e9a434c0c69e8d42e8b74f8b86992',
            '0xf006f6202e0c29ef2e3b1532d2307427864ed77a',
            '0x67af698c927ae574fb43d45a50522c207f81100f',
            '0x49f10f59d693f0c7f3d2449da03e8f75f1535c68',
            '0x0a1d7f3c50dae072b019eff0f306ae1613b56b3c',
            '0x088cc4c0294db72221e448b1c194c1544e1b4581',
            '0xcf0111a3fa940cac8b0c152b706802b46ffbfcf5',
            '0x99c804ce247f3ed392313976de97fc733e699bc1'
          ],
          '833737'
        ]
      }
    ]
  }
}
