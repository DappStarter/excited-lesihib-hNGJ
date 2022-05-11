require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grace seek surge trip film birth ranch purpose harvest drive flat genre'; 
let testAccounts = [
"0x5f224a0fd3205545a3ec671670c7dc2edf41bdbdfcfb2279e986e38af642b78f",
"0x805f77c57fc8c16b8a35294f6aa6012be55d214e1bdb09a9425e01f6117bb1ca",
"0xf393356f9e1d9f7e6fbdc9ed5ebb70f3bfe7b9f2b3a4dc8ebc27cdda67ae80b5",
"0x06fcf0b02290170ba9af9551bcf5e7258d44aa8e6d15516699cf7983e4134eb3",
"0x3e6e49fc9e089c117452b16618e3a9ed1ff183597d5f099abcc6a65ecc5460e3",
"0x7fd5563fc91ab069e57e6b069b03df73a1f8491791a0022a4147efbd6f606262",
"0xc746952d1c397963942bd2f923c5c5d7911823975df33f9da51b1040cfa5da07",
"0x7701d9b133d078f5fecfcc13498b2941f1d83f2650e61adb2413779ccf46daa7",
"0xd35cc0179713f59f109a2a8ecc95be097ab75815626d36d528906561f7665274",
"0x94f954c67a1817cee9f86536decba3bac0904fd067695d537d7443f8c9b6b666"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


