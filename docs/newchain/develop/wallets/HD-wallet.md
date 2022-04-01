<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Newton HD wallet](#newton-hd-wallet)
  - [HD钱包介绍](#hd%E9%92%B1%E5%8C%85%E4%BB%8B%E7%BB%8D)
  - [硬化衍生](#%E7%A1%AC%E5%8C%96%E8%A1%8D%E7%94%9F)
  - [钱包层级](#%E9%92%B1%E5%8C%85%E5%B1%82%E7%BA%A7)
  - [助记词](#%E5%8A%A9%E8%AE%B0%E8%AF%8D)
  - [参考文献](#%E5%8F%82%E8%80%83%E6%96%87%E7%8C%AE)
  - [NewChain HD Wallet SDK](#NewChain-HD-Wallet-SDK)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Newton HD wallet

## HD钱包介绍

HD是Hierarchical Deterministic的缩写，意思是分层确定性。先确定根私钥root，然后根据索引计算每一层的子私钥：

```
root
│
├─────────────┬─────────────┐
│             │             │
▼             ▼             ▼
k0            k1            k2 ...
│             │             │
├──┬──┐       ├──┬──┐       ├──┬──┐
│  │  │       │  │  │       │  │  │
▼  ▼  ▼       ▼  ▼  ▼       ▼  ▼  ▼
k0 k1 k2 ...  k0 k1 k2 ...  k0 k1 k2 ...
```

对于任意一个私钥k，总是可以根据索引计算它的下一层私钥k<sub>n</sub>：

k<sub>n</sub> = hdkey(k,n)

即HD层级实际上是无限的，每一层索引从0～2<sup>32</sup>，约43亿个子key。这种计算被称为衍生（Derivation）。

## 硬化衍生

HD钱包给私钥管理带来了非常大的方便，因为只需要管理一个根扩展私钥，就可以管理所有层级的所有衍生私钥。

但是HD钱包的扩展私钥算法有个潜在的安全性问题，就是如果某个层级的xprv泄露了，可反向推导出上层的xprv，继而推导出整个HD扩展私钥体系。为了避免某个子扩展私钥的泄漏导致上层扩展私钥被反向推导，HD钱包还有一种硬化的衍生计算方式（Hardened Derivation），它通过算法“切断”了母扩展私钥和子扩展私钥的反向推导。HD规范把索引0～2<sup>31</sup>作为普通衍生索引，而索引2<sup>31</sup>～2<sup>31</sup>作为硬化衍生索引，硬化衍生索引通常记作0'、1'、2'……，即索引0'=2<sup>31</sup>，1'=2<sup>31</sup>+1，2'=2<sup>31</sup>+2，以此类推。

因此，`m/44'/0` 表示的子扩展私钥，它的第一层衍生索引`44'`是硬化衍生，实际索引是2<sup>31</sup>+44=2147483692。从`m/44'/0`无法反向推导出`m/44'`。

在只有扩展公钥的情况下，只能计算出普通衍生的子公钥，无法计算出硬化衍生的子扩展公钥，即可计算出的子扩展公钥索引被限制在0～2<sup>31</sup>。因此，观察钱包能使用的索引是0～2<sup>31</sup>。

## 钱包层级


HD钱包理论上有无限的层级，对使用secp256k1或secp256r1算法的任何币都适用。但是，如果一种钱包使用`m/1/2/x`，另一种钱包使用`m/3/4/x`，没有一种统一的规范，就会乱套。

比特币的[BIP-44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki)规范定义了一种如何派生私钥的标准，它本身非常简单：

```
m / purpose' / coin_type' / account' / change / address_index
```

- purpose总是44，
- coin_type在[SLIP-44](https://github.com/satoshilabs/slips/blob/master/slip-0044.md)中定义，例如，0=BTC，2=LTC，60=ETH，其中等。其中，Newton注册的coin_type为 `1642`。
- account表示用户的某个“账户”，由用户自定义索引。
- change=0表示外部交易，change=1表示内部交易。
- address_index则是真正派生的索引为0～2<sup>31</sup>的地址。

## 助记词

从HD钱包的创建方式可知，要创建一个HD钱包，我们必须首先有一个确定的512bit（64字节）的随机数种子。

为了解决初始化种子的易用性问题，[BIP-39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki)规范提出了一种通过助记词来推算种子的算法：

以英文单词为例，首先，挑选2048个常用的英文单词，构造一个数组：

```
const words = ['abandon', 'ability', 'able', ..., 'zoo'];
```

然后，生成128~256位随机数，注意随机数的总位数必须是32的倍数。例如，生成的256位随机数以16进制表示为：

```
179e5af5ef66e5da5049cd3de0258c5339a722094e0fdbbbe0e96f148ae80924
```

在随机数末尾加上校验码，校验码取SHA-256的前若干位，并使得总位数凑成11的倍数，即，上述随机数校验码的二进制表示为`00010000`。

将随机数+校验码按每11 bit一组，得到范围是0~2047的24个整数，把这24个整数作为索引，就得到了最多24个助记词，例如：

```
bleak version runway tell hour unfold donkey defy digital abuse glide please omit much cement sea sweet tenant demise taste emerge inject cause link
```

由于在生成助记词的过程中引入了校验码，所以，助记词如果弄错了，软件可以提示用户输入的助记词可能不对。

生成助记词的过程是计算机随机产生的，用户只要记住这些助记词，就可以根据助记词推算出HD钱包的种子。

## NewChain HD Wallet SDK

- [newchain-hdkey](https://www.npmjs.com/package/newchain-hdkey)
- [NewChain分层钱包参考实现——newchain-sdk-example——nodejs](https://github.com/newtonproject/newchain-sdk-example/blob/9dfe9b2ec9f5142f9edf64575d4c0d1039d27b04/examples/node/address.js#L32)


## 参考文献

1. [BIP-0032: Hierarchical Deterministic Wallets](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki)
2. [BIP-0039: Mnemonic code for generating deterministic keys](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki)
3. [BIP-0044: Multi-Account Hierarchy for Deterministic Wallets](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki)
4. [NewChain分层钱包参考实现——newchain-sdk-example——nodejs](https://github.com/newtonproject/newchain-sdk-example/blob/9dfe9b2ec9f5142f9edf64575d4c0d1039d27b04/examples/node/address.js#L32)
5. [HD钱包](https://www.liaoxuefeng.com/wiki/1207298049439968/1207298278803712)
