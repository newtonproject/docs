---
id: newchain-newton-faq
title: NewChain牛顿对接FAQ
sidebar_label: NewChain牛顿对接FAQ
keywords:
  - docs
  - newton
---

## 基本资料
1. 项目方官网
    - https://www.newtonproject.org/
2. 官方浏览器地址
    - 主网： https://explorer.newtonproject.org/
    - 测试网： https://explorer.testnet.newtonproject.org/
3. 相关源码逐步开放中，请关注：
    - https://github.com/newtonproject

## 区块链相关信息
1. 模型：（Bitcoin是utxo模型，Ethereum是account模型）
    - account模型
2. 币种精度
    - NEW的最小可拆分单位是ISSAC，1NEW == 1000000000000000000 ISSAC。
3. 总供应量
    - 1000亿 NEW。
4. 区块间隔时间
    - 3秒
5. 普通交易安全到账所需的确认区块数量
    - 10个区块确认后可以认为安全。
6. 是否有合约
    - 有。
7. 是否有多币种
    - 支持。
8. 交易上链后，是否有执行失败的情况，如果有怎么判断执行成功
    - 有可能会失败，需要按照交易hash查询区块链得到具体执行情况。
9. 是否有交易费，费用评估方式，实际费用计算方式
    - 有交易费，查询方式同Ethereum，请参考[测试代码](https://github.com/newtonproject/newchain-sdk-example)。
10. 地址是否需要特殊激活
    - 无需激活。
11. 是否支持多重签名
    - 需要合约支持，具体参考[MultiSignatureWallet](https://github.com/newtonproject/MultiSignatureWallet)。
12. NewChain的节点部署在哪里
    - 目前在美西、新加坡、东京、香港都有部署。
13. 如何自建节点？
    - 参考https://github.com/newtonproject/newchain-nodes。

## API 文档

1. RPC服务地址
    - 主网(MainNet): https://global.rpc.mainnet.newtonproject.org
    - 测试网(TestNet): https://rpc1.newchain.newtonproject.org

2. ChainID
    - ChainID 可以通过 RPC 和 API获取，获取后可以保存到本地，一般不会发生变化。
    - 主网(MainNet): 1012
    - 测试网(TestNet): 1007

3. 示例代码：
    - https://github.com/newtonproject/newchain-sdk-example

4. 对于对接来说，NewChain与Ethereum的主要区别：
    1. 签名算法：把Ethereum用的secp256k1改成了NewChain用的secp256r1
    2. 构造交易时，强制必须传入ChainID
    3. 地址需要通过一个方法进行转换，然后再展现给用户（用户看到的是NEW开头的地址，示例：NEW182F3f3q8CFM3od4RkjWPPEx6vAcBJpVdurC）。
    4. SDK里面已经提供的地址双向转换的代码。
    5. 请参考example代码。

5. 特别提示：
    1. **请交易所务必对用户提交的地址进行校验，确保地址解析出来的ChainID与当前网络的ChainID一致，否则可能会造成交易失败或者资产丢失。具体地址解析方法请参考example代码。如果还有疑问请联系技术支持人员。**

6. API接口
- 接口可以参考 [NewChain RPC API reference](https://github.com/newtonproject/newchain-sdk-example/blob/master/RPC_API_reference.md) 或 [Ethereum API](https://eth.wiki/json-rpc/API)
- 目前Newton提供的RPC服务开放使用的API包括如下：（如需更多接口请自建节点）
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
    - "txpool_status"
    - "rpc_modules"
    - "net_version"

7. NewPay二维码接口
    - 标准链接：[Newton QR Code Standard](https://github.com/newtonproject/newchain-sdk-example/blob/master/qr_code_standard.md)
