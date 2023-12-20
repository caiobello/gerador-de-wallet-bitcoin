# Gerador de Endereços Bitcoin HD Hierarchical Deterministic

# Execute o Script dentro do diretório SRC para gerar um novo endereço (Testnet)

`node .\createWallet.js`



# Para gerar endereços na rede principal, altere 'network' para 'bitcoin.networks.bitcoin'


# O código utiliza as bibliotecas 'bip32', 'bip39', e 'bitcoinjs-lib' para realizar as seguintes etapas:

1. Gera um mnemônico aleatório.
2. Converte o mnemônico em uma semente (seed).
3. Cria uma árvore de derivação HD a partir da semente.
4. Deriva um endereço Bitcoin na testnet usando o caminho 'm/49'/1'/0'/0'.
5. Exibe o endereço Bitcoin, a chave privada e o mnemônico no console.

## Certifique-se de compreender o código antes de utilizá-lo em ambientes de produção. Este projeto é destinado a fins educacionais e de teste.

### Nota: Mantenha a chave privada e o mnemônico seguros. Nunca compartilhe essas informações publicamente.
