---
id: consensus-mechanism
title: 共识机制
sidebar_position: 3
description: Build your next blockchain app on Newton.
keywords:
  - docs
  - newton
---

共识机制是一种容错机制，用于计算机和区块链系统，以实现分布式进程或多代理系统之间对单一数据值或单一网络状态的必要协议，例如加密货币。

## 共识机制的类型

1. PoW：Proof of Work 工作量证明

工作证明描述的是一个需要付出不小但可行的努力的系统，以阻止DoS（拒绝服务）攻击和其他恶意攻击。它需要解决一个具有计算挑战性的难题，以便在区块链中创建新的区块。

2. PoS：Proof of Stake 权益证明

权益证明机制通过要求用户质押一定数量的代币来达成共识，以便有机会被选中来验证交易区块，并因此获得奖励。优先考虑在区块链系统中购买最多股份的矿工。

3. PoA： Proof of Authority 权威证明

权威证明（PoA）是一种基于信誉的共识算法，它为区块链网络（尤其是私有网络）引入了一种实用且高效的解决方案。

4. DPoS：Delegated Proof of Stake 委托权益证明

这种形式的共识反映了理事机构成员的选举。见证人，即验证交易的人，是由选举产生的。

5. PoSpace：Proof of Space 空间证明

这种共识机制在去中心化文件存储应用程序（如 storj.io、filecoin）中很有用，其中节点证明它们在其硬件中具有合法容量。有时也称为 PoStorage 或 PoCapacity。

6. PoET：Proof of Elapsed Time 经过时间的证明

PoW的更好替代方案，消耗更少的计算资源。每个参与节点需要等待随机的时间，第一个从睡眠中醒来的节点有机会创建新块，然后通过网络传播。需要像 Intel SGX 这样的可信执行环境 (TEE)，它们是内存的隔离部分，只能使用特定的指令集进行访问。

### **:scroll:资源**

:page_facing_up: [Byzantine Fault Tolerance](https://medium.com/loom-network/understanding-blockchain-fundamentals-part-1-byzantine-fault-tolerance-245f46fe8419) <br></br>
:page_facing_up: [Type of Consensus Mechanisms](https://www.codementor.io/blog/consensus-algorithms-5lr8exfi0s#types-of-consensus-algorithms) <br></br>
:page_facing_up: [Review of Blockchain Consensus Mechanisms](https://blog.wavesplatform.com/review-of-blockchain-consensus-mechanisms-f575afae38f2) <br></br>
:headphones: [Overview and History of Consensus System Development](https://softwareengineeringdaily.com/2018/03/26/consensus-systems-with-ethan-buchman/) <br></br>
:green_book: [Understanding Distributed Consensus](https://medium.com/s/story/lets-take-a-crack-at-understanding-distributed-consensus-dad23d0dc95) <br></br>
:books: [Byzantine Generals Problem](https://en.wikipedia.org/wiki/Byzantine_fault#Byzantine_Generals'_Problem)
