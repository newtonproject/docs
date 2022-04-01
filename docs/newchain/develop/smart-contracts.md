---
title: Introduction to smart contracts
description: An overview of smart contracts, focussing on their unique characteristics and limitations.
lang: en
sidebar: true
---

## What is a smart contract? {#what-is-a-smart-contract}

A "smart contract" is simply a program that runs on the Newton or Ethereum blockchain. It's a collection of code (its functions) and data (its state) that resides at a specific address on the Newton or Ethereum blockchain.

Smart contracts are a type of [NewChain account](/newchain/newton101/blockchain-basics/accounts). This means they have a balance and they can send transactions over the network. However they're not controlled by a user, instead they are deployed to the network and run as programmed. User accounts can then interact with a smart contract by submitting transactions that execute a function defined on the smart contract. Smart contracts can define rules, like a regular contract, and automatically enforce them via the code. Smart contracts can not be deleted by default, and interactions with them are irreversible.

## Prerequisites {#prerequisites}

Make sure you've read up on [accounts](/newchain/newton101/blockchain-basics/accounts), [transactions](/newchain/newton101/blockchain-basics/transactions) and the [Ethereum virtual machine](/newchain/newton101/blockchain-basics/ethereum) before jumping into the world of smart contracts.

<!-- TODO simpler example... scheduling payments in Ethereum is actually difficult -->
<!-- TODO show an example smart contract, e.g. an implementation of a vending machine -->

## A digital vending machine {#a-digital-vending-machine}

Perhaps the best metaphor for a smart contract is a vending machine, as described by [Nick Szabo](https://unenumerated.blogspot.com/). With the right inputs, a certain output is guaranteed.

To get a snack from a vending machine:

```
money + snack selection = snack dispensed
```

This logic is programmed into the vending machine.

A smart contract, like a vending machine, has logic programmed into it. Here's a simple example of how this vending machine might look like as a smart contract:

```solidity
pragma solidity 0.8.7;

contract VendingMachine {

    // Declare state variables of the contract
    address public owner;
    mapping (address => uint) public cupcakeBalances;

    // When 'VendingMachine' contract is deployed:
    // 1. set the deploying address as the owner of the contract
    // 2. set the deployed smart contract's cupcake balance to 100
    constructor() {
        owner = msg.sender;
        cupcakeBalances[address(this)] = 100;
    }

    // Allow the owner to increase the smart contract's cupcake balance
    function refill(uint amount) public {
        require(msg.sender == owner, "Only the owner can refill.");
        cupcakeBalances[address(this)] += amount;
    }

    // Allow anyone to purchase cupcakes
    function purchase(uint amount) public payable {
        require(msg.value >= amount * 1 ether, "You must pay at least 1 ETH per cupcake");
        require(cupcakeBalances[address(this)] >= amount, "Not enough cupcakes in stock to complete this purchase");
        cupcakeBalances[address(this)] -= amount;
        cupcakeBalances[msg.sender] += amount;
    }
}
```

Like how a vending machine removes the need for a vendor employee, smart contracts can replace intermediaries in many industries.

## Permissionless {#permissionless}

Anyone can write a smart contract and deploy it to the network. You just need to learn how to code in a [smart contract language](https://solidity.readthedocs.io/), and have enough ETH to deploy your contract. Deploying a smart contract is technically a transaction, so you need to pay your [Gas](/newchain/newton101/blockchain-basics/gas) in the same way that you need to pay gas for a simple ETH transfer. Gas costs for contract deployment are far higher, however.

Newton has developer-friendly languages for writing smart contracts:

- Solidity

[More on languages](https://solidity.readthedocs.io/)

However, they must be compiled before they can be deployed so that NewChain's virtual machine can interpret and store the contract. [More on compilation](https://solidity.readthedocs.io/)

## Composability {#composability}

Smart contracts are public on NewChain and can be thought of as open APIs. That means you can call other smart contracts in your own smart contract to greatly extend what's possible. Contracts can even deploy other contracts.

Learn more about [smart contract composability](https://solidity.readthedocs.io/).

## Limitations {#limitations}

Smart contracts alone cannot get information about "real-world" events because they can't send HTTP requests. This is by design. Relying on external information could jeopardise consensus, which is important for security and decentralization.

There are ways to get around this using [oracles](https://ethereum.org/en/developers/docs/oracles/).

Another limitation of smart contracts is the maximum contract size. A smart contract can be a maximum of 24KB or it will run out of gas. This can be circumnavigated by using [The Diamond Pattern](https://eips.ethereum.org/EIPS/eip-2535).

## Smart contract resources {#smart-contract-resources}

**OpenZeppelin Contracts -** **_Library for secure smart contract development._**

- [openzeppelin.com/contracts/](https://openzeppelin.com/contracts/)
- [GitHub](https://github.com/OpenZeppelin/openzeppelin-contracts)
- [Community Forum](https://forum.openzeppelin.com/c/general/16)

**DappSys -** **_Safe, simple, flexible building-blocks for smart-contracts._**

- [dapp.tools/dappsys](https://dapp.tools/dappsys/)
- [GitHub](https://github.com/dapphub/dappsys)

## Further reading {#further-reading}

- [Smart Contracts: The Blockchain Technology That Will Replace Lawyers](https://blockgeeks.com/guides/smart-contracts/) _– Blockgeeks_
- [Best Practices for Smart Contract Development](https://yos.io/2019/11/10/smart-contract-development-best-practices/) _– Nov 10, 2019 - Yos Riady_
- [Clean contracts - a guide on smart contract patterns & practices](https://www.wslyvh.com/clean-contracts/) _– Jul 30, 2020 - wslyvh_
