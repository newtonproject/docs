---
id: newchain-newton-faq
title: NewChain Newton FAQ
sidebar_label: NewChain Newton FAQ
keywords:
  - docs
  - newton
---

## Basic Information
1. Project official website
    - https://www.newtonproject.org/
2. Official browser
    - Mainnet: https://explorer.newtonproject.org/
    - TestNet: https://blockscout.testnet.newtonproject.org/
3. Github：
    - https://github.com/newtonproject

## Blockchain information
1. Model: (Bitcoin is the utxo model, Ethereum is the account model)
    - account
2. Currency Decimals
    - The smallest detachable unit of NEW is ISSAC, 1NEW == 1000000000000000000 ISSAC.
3. Total supply
    - 100 Billion NEW
4. Block interval time
    - 3 seconds
5. The number of confirmed blocks required for the secure arrival of ordinary transactions
    - 10 blocks can be considered safe after confirmation.
6. After the transaction is chained, is there any execution failure, and if so how to determine the success of the execution?
    - Just like ethereum, there is a possibility that it will fail and the blockchain needs to be queried by the transaction hash to get the exact execution.
9. Whether there is a transaction fee, how the fee is assessed, how the actual fee is calculated?
    - There is a transaction fee, the inquiry method is the same as Ethereum, please refer to [Example Code](https://github.com/newtonproject/newchain-sdk-example).
10. Does the address require special activation?
    - No.
11. Does it support multiple signatures?
    - Specific references [MultiSignatureWallet](https://github.com/newtonproject/MultiSignatureWallet)。
12. Where are NewChain's nodes deployed?
    - It is currently deployed in the US West, Singapore, Tokyo and Hong Kong.
13. How do I deploy my own nodes?
    - https://github.com/newtonproject/newchain-nodes

## API Documentation

1. RPC endpoints
    - MainNet: https://global.rpc.mainnet.newtonproject.org
    - TestNet: https://rpc1.newchain.newtonproject.org

2. ChainID
    - ChainIDs can be obtained via RPC and API, and can be saved locally once obtained and generally do not change.
    - MainNet: 1012
    - TestNet: 1007

3. Example code:
    - https://github.com/newtonproject/newchain-sdk-example

4. For docking, the main differences between NewChain and Ethereum are:
    1. Signature algorithm: Changed secp256k1 used by Ethereum to secp256r1 used by NewChain
    2. When build a transaction, it is mandatory to pass in the ChainID.
    3. The address needs to be converted by a method and then presented to the user (What the user see is the address that starts with NEW: NEW182F3f3q8CFM3od4RkjWPPEx6vAcBJpVdurC)
    4. The code for bidirectional conversion of addresses is already provided in the SDK.
    5. Please refer to the example code.

5. Tip:
    1. **Please make sure to check the address submitted by the user to ensure that the ChainID parsed from the address is the same as the ChainID of the current network, otherwise it may cause transaction failure or asset loss.Please refer to the example code for the specific address resolution method. If you have any further questions, please contact our technical support staff.**

6. API Interface
- Please refer to [NewChain RPC API reference](https://github.com/newtonproject/newchain-sdk-example/blob/master/RPC_API_reference.md) or [Ethereum API](https://eth.wiki/json-rpc/API)
- Currently Newton provides RPC services open to use APIs include [the following](https://github.com/newtonproject/newchain-deploy/blob/d0d8511a3c4ac28467325995db129a63c7263140/mainnet/conf/guard.toml#L7): (for more interfaces please build your own node)
    - "eth_getBalance"
    - "eth_protocolVersion"
    - "eth_gasPrice"
    - "eth_blockNumber"
    - "eth_sendRawTransaction"
    - "eth_getTransactionCount"
    - "eth_getBlockByHash"
    - "eth_getBlockByNumber"
    - "eth_getTransactionByHash"
    - "eth_getTransactionReceipt"
    - "eth_getBlockTransactionCountByNumber"
    - "eth_getTransactionByBlockNumberAndIndex"
    - "eth_getBlockTransactionCountByHash"
    - "eth_getCode"
    - "eth_estimateGas"
    - "eth_call"
    - "eth_chainId"
    - "eth_getProof"
    - "eth_getRawTransactionByHash"
    - "txpool_status"
    - "rpc_modules"
    - "net_version"
    - "net_peerCount"
    - "net_listening"

7. NewPay QR code interface
    - [Newton QR Code Standard](https://github.com/newtonproject/newchain-sdk-example/blob/master/qr_code_standard.md)
