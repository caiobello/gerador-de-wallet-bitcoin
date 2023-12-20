/** */

// Importando as dependências
const bip32 = require('bip32');
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');

// Definir a rede

// Testnet - rede de teste
const network = bitcoin.networks.testnet;

// Mainnet - rede principal
// const network = bitcoin.networks.bitcoin; // Não é necessário neste exemplo

// Derivação de Carteiras do tipo HD

//1 para testnet
//0 para mainnet
//const path = `m/49'/0'/0'/0`;
const path = `m/49'/1'/0'/0`;

// Criando o mnemonic para a seed (palavras de nhar)
let mnemonic = bip39.generateMnemonic();
const seed = bip39.mnemonicToSeedSync(mnemonic);

// Criando a raiz da carteira HD
let root = bip32.fromSeed(seed, network);

// Criando uma conta - par pvt pub keys
let account = root.derivePath(path);
let node = account.derive(0).derive(0);

let btcAddress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey, 
    network: network,
}).address;

console.log("Carteira gerada...");
console.log("Endereço: ", btcAddress);
console.log("Chave privada:", node.toWIF());
console.log("Seed: ", mnemonic);
