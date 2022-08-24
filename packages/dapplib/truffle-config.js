require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'inner arena bone table edge rare remember essay grace hill fortune solid'; 
let testAccounts = [
"0xf39a04eb9d67c2d4b135f8bb2cdb9316bbe2608fb410bd2a5406d7e31416f7b9",
"0x076692a711fcd24c78c5ee08425310b884ce0acbf77eb8843c87a36c5554a6ba",
"0x71a82c51bd0db7b66bf1bfcfa0f8cd0bbbc49992d748afc43815a83ffb925a09",
"0xea82bbddefd8b0b7d8c49d76506edf9733b04f13f8aa5d50a7b52649bdca4189",
"0xbcf1f573c2a39e3a99765580d186bc8e6e786042aba99faca4f695ecb32ffdff",
"0x514169f48f18519cd21ae47f2d8b8a787975d2f0b8e340f62539bb797c576f7d",
"0x478debaab265f494c7093310d2ee31a66898ffab44d1915930bf7a9ca9637f46",
"0x2486ff692deffc0083dc056f73127cf51530fa6d8decd163c08ea1c77b6cd0a5",
"0xd7c42fe0208a1003d9192b85cce9a1080dba5474915b70f3f04ac4f52aff48a0",
"0xe2230bdb9529f109d60850396d30925f2886be89093859f4e122366742a00ec2"
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


