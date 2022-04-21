---
id: accounts
title: 什么是账户?
sidebar_label: 账户
sidebar_position: 8
description: Build your next blockchain app on Newton.
keywords:
  - docs
  - newton
---
NewChain的全球状态是由账户组成的，这些账户通过一个消息传递框架彼此互动。最基本的互动是发送一些价值--如NEW代币--牛顿区块链的原生加密货币。
每个账户都由NEW开头的标识符来识别，这被称为地址--它由账户的公钥生成。

存在两种类型的账户。

1. 外部拥有的账户 - 一个由私钥控制的账户，如果你拥有与该账户相关的私钥，你就有能力从该账户发送令牌和信息。
2. 合约拥有的账户 - 一个拥有相关智能合约代码的账户，其私钥不被任何人拥有。

**外部拥有的账户**

1. 可以发送交易（NEW转移或触发合约代码）
2. 是由私人钥匙控制的
3. 没有相关的代码

**合约拥有的账户**

1. 有相关的代码
2. 代码的执行是由交易或从其他合同收到的信息（调用）触发的
3. 当执行时会操纵自己的持久性存储，即可以有自己的永久状态。也可以调用其他合约。

### **:scroll:资源**

[Read more about accounts](https://github.com/ethereum/homestead-guide/blob/master/source/contracts-and-transactions/account-types-gas-and-transactions.rst#externally-owned-accounts-eoas)
