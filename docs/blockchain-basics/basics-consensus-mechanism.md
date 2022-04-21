---
id: consensus-mechanism
title: Consensus Mechanism
sidebar_position: 3
description: Build your next blockchain app on Newton.
keywords:
  - docs
  - newton
---

A Consensus mechanism is a fault-tolerant mechanism that is used in computer and blockchain systems to achieve the necessary agreement on a single data value or a single state of the network among distributed processes or multi-agent systems, such as with cryptocurrencies.

## Types of Consensus Mechanism

1. PoW: Proof of Work <br></br>
Proof of work describes a system that requires a not-insignificant but feasible amount of effort in order to deter dos(denial-of-service) attacks and other malicious attacks. It requires to solve a computational challenging puzzle in order to create new blocks in Blockchain.

2. PoS: Proof of Stake <br></br>
Proof-of-Stake mechanism achieve consensus by requiring users to stake an amount of their tokens so as to have a chance of being selected to validate blocks of transactions, and get rewarded for doing so. Priority is given to miners who have purchased the most stake in the blockchain system.

3. PoA： Proof of Authority <br></br>

Proof of Authority (PoA) is a reputation-based consensus algorithm that introduces a practical and efficient solution for blockchain networks (especially the private ones).

4. DPoS: Delegated Proof of Stake <br></br>
This form of consensus mirrors the election of members in governing bodies. Witnesses, those who validate transactions, are elected.

5. PoSpace: Proof of Space <br></br>
This kind of consensus mechanism is useful in decentralized file storage applications like storj.io, filecoin, where nodes prove they have legitimate capacity in their hardware. Sometimes also referred as PoStorage or PoCapacity.

6. PoET: Proof of Elapsed Time <br></br>
A better alternative to PoW, consuming lesser computational resources. Each participating node needs to wait for a random amount of time and very first node to wake up from sleep gets a chance to create new block, which is then propagated through network. Requires Trusted Execution Environments ( TEE ) like Intel SGX, which are isolated part of memory, can only be accessed using certain set of instructions.

### **:scroll:Resources**

:page_facing_up: [Byzantine Fault Tolerance](https://medium.com/loom-network/understanding-blockchain-fundamentals-part-1-byzantine-fault-tolerance-245f46fe8419) <br></br>
:page_facing_up: [Type of Consensus Mechanisms](https://www.codementor.io/blog/consensus-algorithms-5lr8exfi0s#types-of-consensus-algorithms) <br></br>
:page_facing_up: [Review of Blockchain Consensus Mechanisms](https://blog.wavesplatform.com/review-of-blockchain-consensus-mechanisms-f575afae38f2) <br></br>
:headphones: [Overview and History of Consensus System Development](https://softwareengineeringdaily.com/2018/03/26/consensus-systems-with-ethan-buchman/) <br></br>
:green_book: [Understanding Distributed Consensus](https://medium.com/s/story/lets-take-a-crack-at-understanding-distributed-consensus-dad23d0dc95) <br></br>
:books: [Byzantine Generals Problem](https://en.wikipedia.org/wiki/Byzantine_fault#Byzantine_Generals'_Problem)
