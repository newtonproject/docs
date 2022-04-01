# Newton DApp API 




## 1.准备工作



测试环境请求地址为：http://sapi.newapi.testnet.newmall.com.cn/v1/



#### 说明

- 创建NFT时，图片上传限制为 10 M
- NFT 名称、描述，没有字符限制 



## 2. API 请求说明



##### 签名算法

- 系统中所有的接口请求都使用post方法, 且所有的接口中都需要传参 app_id

- 系统中的鉴权方式都是用md5 ( sort(key+value) + app_secret) 的方式来鉴权，md5值用 token 传递

  例如:

  - 您的 app_id = d4756980cc, app_secret = 4c54941c06681563735c2f73d51f9145
  - 您请求的参数为  timestamp=1631859812

  => 那么 token 的计算方式为: md5(app_idd4756980cctimestamp1631859812) = 8e2fd7ee6165531357cd29041ada90fd

  您要传递的参数为:

  - app_id = d4756980cc
  - timestamp=1631859812
  - token = 8e2fd7ee6165531357cd29041ada90fd





##### 公共参数：均为必填

| 参数      | 说明                         |
| --------- | ---------------------------- |
| app_id    | 系统分配的 app_id            |
| token     | 参数排序后的签名（算法如上） |
| timestamp | 时间戳 如: 1631859812        |



##### 返回参数

返回参数均为 json , 格式为 {"status":"0","message":"message","result":[]}, status >= 0 那么都表示请求成功，status < 0 都表示失败，message 会写明失败原因。





## 3. API 接口定义



#### 1. 获取DApp信息

**请求URL**:  `/dapp/info/`

**请求方式:**  `POST`

**参数:**

| Field | Required | Type | Desc |
| ----- | -------- | ---- | ---- |

**返回示例**

```JSON
{
    "status": 1,
    "result": {
        "dapp_name": "快乐星球",
        "wallet_address": "NEW182...", // 钱包地址
        "wallet_balance": "1250", //钱包余额 
    }
}
```



#### 2. 重置 app secret

**请求URL**:  `/dapp/reset-secret/`

**请求方式:**  `POST`

**参数:**

| Field | Required | Type | Desc |
| ----- | -------- | ---- | ---- |

**返回示例**

```JSON
{
    "status": 1,
    "result": {
        "app_secret": "JIOH38FH293...", // 新的 app_secret
    }
}
```



### 

#### 3. 创建新用户 

**请求URL**:  `/user/create/`

**请求方式:**  `POST`

**参数: **

| Field     | Required | Type   | Desc                                            |
| --------- | -------- | ------ | ----------------------------------------------- |
| username  | True     | string | 名称                                          |
| origin_id | False    | Int    | 自定义id , 可用于保存源系统user id （不可重复） |

**返回示例**

```JSON
{
    "error_code": 1,
    "result": {
        "wallet_address": "NEW182...",
        "username": "username",
        "orgin_id": "1001"
    }
}
```



#### 4. 用户列表 

**请求URL**:  `/user/list/`

**请求方式:**  `POST`

**参数:**

| Field    | Required | Type | Desc    |
| -------- | -------- | ---- | ------- |
| page     | False    | Int  | 默认 1  |
| Pagesize | False    | Int  | 默认 50 |

**返回示例**

```JSON
{
    "error_code": 1,
    "result": {
        "users": [
          [
            "wallet_address": "NEW182...",
            "username": "username1",
            "orgin_id": "1001"
          ],
          [
            "wallet_address": "NEW182...",
            "username": "username2",
            "orgin_id": "1002"
          ],
          //...
        ]
    }
}
```





#### 5. 用户详情 

**请求URL**:  `/user/info/`

**请求方式:**  `POST`

**参数:**

| Field          | Required | Type   | Desc                                          |
| -------------- | -------- | ------ | --------------------------------------------- |
| wallet_address | False    | string | 钱包地址                                      |
| user_id        | False    | Int    | 用户ID                                        |
| origin_id      | False    | string | wallet_address/origin_id 至少需要其中一个条件 |

**返回示例**

```JSON
{
    "status": 1,
    "result": {
        "orgin_id": "1001",
        "wallet_address": "NEW182...",
        "wallet_balance": "1827126",
        "username": "username",
        "nft_number": "11", // 持有NFT数量（系统内）
    }
}
```







#### 6. 创建NFT 

**请求URL**:  `/nft/create/`

**请求方式:**  `POST`

**参数:**

| Field       | Required | Type   | Desc     |
| ----------- | -------- | ------ | -------- |
| name        | True     | string | NFT 名称 |
| nft_type    | False    | string | 暂时固定为1; 标识图片资源  |
| Filedata    | True     | File   | NFT 图片 |
| description | True     | string | NFT 描述 |

**返回示例**

```JSON
{
    "status": 1,
    "result": {
        "contract_address": "0x6591ccac47f0387fe7afcd0f5d5eea876ff1d618",
        "token_id": "1001",
        "token_uri": "ipfs://QmU1wCkETYdUj6341RWJPcjqhxyszYJc6WYe4QmNoyHRK8",
        "image_url": "https://img...", // 是否需要提供一份可直接展示的图片地址 
        "video_url": "https://video...", // 是否需要提供一份可直接展示的视频地址 
        "mint_time": "1631428170", // 创建时间 
        "mint_block": "5299856", // 创建区块高度
        "mint_txid": "0xb9894fee2202667a26b1c12146c4890225434bceedec1a606922909621cc873a",
        "minter": "0x6E95a3385E7Ff49baa1cC23A181C12E1F3A1886f",
    }
}
```





#### 7. 批量创建NFT 

**请求URL**:  `/nft/batch-create/`

**请求方式:**  `POST`

**参数:**

| Field       | Required | Type   | Desc     |
| ----------- | -------- | ------ | -------- |
| name        | True     | string | NFT 名称 |
| Filedata    | True     | File   | NFT 图片 |
| description | True     | string | NFT 描述 |
| number      | True     | Int    | 创建个数 |

**返回示例**

```JSON
{
    "status":"0",
    "message":"",
    "result":{
        "contract_address":"0xae697b514f78beb13a2e0e5cfb0bf91bbc94bce4",
        "token_id":[
            138,
            139,
            140
        ],
        "name":"BBB",
        "description":"BBB",
        "token_uri":"ipfs://QmX82VbkVXPQbP5sC9ymYEyEjXT6fdLPpRJ24YKUoxBmae",
        "mime_type":"image/jpeg",
        "image_url":"https://rpc-testnet-newchain.learndevops.cn:443/ipfs/QmS5pyRLoqXk3hmjWDFmyiBD2cTTM1Qf8aS3ovvgCU3DQh",
        "cover_url":"https://rpc-testnet-newchain.learndevops.cn:443/ipfs/QmNSQb6r3EYMo12r48GwFKMx99Cu9TsXYCMqiKewqfW6eM",
        "mint_time":1631799313,
        "mint_block":5507816,
        "mint_txid":"0xafcaf9c87b4175af8f323079d5982a7b41ec7ccc8f8f04748dff5ca80e67c172",
        "minter":"0xb7a51a8b51024e94e199c248b67d0ae83475711d"
    }
}
```





#### 8. 批量克隆NFT 

**请求URL**:  `/nft/batch-clone/`

**请求方式:**  `POST`

**参数:**

| Field            | Required | Type   | Desc     |
| ---------------- | -------- | ------ | -------- |
| contract_address | True     | string | 合约地址 |
| token_id         | True     | File   | Token id |
| number           | True     | Int    | 创建个数 |

**返回示例**

```JSON
{
    "status":"0",
    "message":"",
    "result":{
        "contract_address":"0xae697b514f78beb13a2e0e5cfb0bf91bbc94bce4",
        "token_id":[
            138,
            139,
            140
        ],
        "name":"BBB",
        "description":"BBB",
        "token_uri":"ipfs://QmX82VbkVXPQbP5sC9ymYEyEjXT6fdLPpRJ24YKUoxBmae",
        "mime_type":"image/jpeg",
        "image_url":"https://rpc-testnet-newchain.learndevops.cn:443/ipfs/QmS5pyRLoqXk3hmjWDFmyiBD2cTTM1Qf8aS3ovvgCU3DQh",
        "cover_url":"https://rpc-testnet-newchain.learndevops.cn:443/ipfs/QmNSQb6r3EYMo12r48GwFKMx99Cu9TsXYCMqiKewqfW6eM",
        "mint_time":1631799313,
        "mint_block":5507816,
        "mint_txid":"0xafcaf9c87b4175af8f323079d5982a7b41ec7ccc8f8f04748dff5ca80e67c172",
        "minter":"0xb7a51a8b51024e94e199c248b67d0ae83475711d"
    }
}
```







#### 9. NFT 列表

**请求URL**:  `/nft/list/`

**请求方式:**  `POST`

**参数:**

| Field          | Required | Type   | Desc                                                  |
| -------------- | -------- | ------ | ----------------------------------------------------- |
| page           | false    | Int    | 默认1                                                 |
| pagesize       | false    | Int    | 默认50                                                |
| wallet_address | False    | string | 钱包地址                                              |
| user_id        | False    | Int    | 用户ID  (用于筛选某个用户的NFT)                       |
| origin_id      | False    | string | wallet_address/user_id/origin_id 至少需要其中一个条件 |

**返回示例**

```JSON
{
    "status": 1,
    "result": {
        "list": [
          {
            "id": "28",
            "owner_address": "0xdda8b40f50c93f5f510223261ad26a164f288f12",
            "contract_address": "0xae697b514f78beb13a2e0e5cfb0bf91bbc94bce4",
            "token_id": "206",
            "token_uri": "ipfs://QmXinqyvrbzsGnZe7cRRBM191EGQQqezjnBCBEdmjZSwno",
            "nft_type": "1",
            "name": "ddd",
            "description": "ddd",
            "image_url": "https://rpc-testnet-newchain.learndevops.cn:443/ipfs/QmVaURbrpoRwCppkhpmS6Wvmj21hWv98CPJHKySTWC4Xw3",
            "cover_url": "https://rpc-testnet-newchain.learndevops.cn:443/ipfs/QmaQy2ybV9jMosdMgbY9E6BWCk1YX8gXXmYkKZ2NaxzL7p",
            "mint_block": "5712086",
            "minter": "0xdda8b40f50c93f5f510223261ad26a164f288f12",
            "mint_time": "2021-09-24 07:46:34",
            "status": "1",
            "holder_address": "0xdda8b40f50c93f5f510223261ad26a164f288f12"
          }
        ]
    }
}
```







#### 10. NFT 详情

**请求URL**:  `/nft/info/`

**请求方式:**  `POST`

**参数:**

| Field            | Required | Type   | Desc     |
| ---------------- | -------- | ------ | -------- |
| contract_address | True     | String | 合约地址 |
| token_id         | True     | String | tokenId  |
|                  |          |        |          |

**返回示例**

```JSON
{
    "status": 1,
    "result": {
        "list": [
          {
            "id": "36",
            "owner_address": "0xdda8b40f50c93f5f510223261ad26a164f288f12",
            "contract_address": "0xae697b514f78beb13a2e0e5cfb0bf91bbc94bce4",
            "token_id": "214",
            "token_uri": "ipfs://QmSi6mFpVgY3HWtDG7C7DPh5iUbJ6G2jMe6tidH3cbxvpN",
            "nft_type": "1",
            "name": "DDD",
            "description": "DDD",
            "image_url": "https://rpc-testnet-newchain.learndevops.cn:443/ipfs/QmQ9svJ1FHkSJZoJof7XxDaSFpWRdjDMHdBNYfnEQsNdw1",
            "cover_url": "https://rpc-testnet-newchain.learndevops.cn:443/ipfs/QmbKwv2NFMKQ1RHgY2wKs1AzhcdQeLnGuYckeErnZpeC1o",
            "mint_block": "5712170",
            "minter": "0xdda8b40f50c93f5f510223261ad26a164f288f12",
            "mint_time": "2021-09-24 07:50:46",
            "mint_txid": "",
            "status": "1",
            "holder_address": "0x59238ae1ebfb446398a3b5d7a07e1f99a5188db1"
          }
        ]
    }
}
```

**返回结果:**

| 字段    | 描述     |
| ---------| -------- |
| status   | 1.正常  5.已被转出 |
| owner_address   | 哪个地址下持有 |
| holder_address   | 业务逻辑中，属于哪个地址 |


#### 11. NFT 分发

**请求URL**:  `/nft/transfer/`

**请求方式:**  `POST`

**参数:**

| Field            | Required | Type   | Desc     |
| ---------------- | -------- | ------ | -------- |
| contract_address | True     | String | 合约地址 |
| token_id         | True     | String | tokenId  |
| from             | True     | String | 转出地址 |
| to               | True     | String | 转入地址 |
|                  |          |        |          |

**返回示例**

```JSON
{
    "status": 1,
    "result": {
        "txid": "0xb9894fee2202667a26b1c12146c4890225434bceedec1a606922909621cc873a",
    }
}
```



