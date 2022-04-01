---
id: newchain-guard-error
title: NewChain Guard Error
sidebar_label: NewChain Guard Error
keywords:
  - docs
  - newton
---

### Error Code

Code | Status | Description
---|---|---
412 | StatusInvalidJSONRequest | invalid JSON request
413 | StatusNoMethodParams | no method and/or jsonrpc attribute
414 | StatusJSONRPCVersion | jsonrpc version not supported
415 | StatusMethodNotWhitelist | jsonrpc method is not Whitelist
416 | StatusMethodParamsNotMatch | method params not match
417 | StatusMethodParamsTypeError | method params type not string
418 | StatusGasLimitError | gasLimit error
421 | StatusEmptyFromAddress | empty from address
422 | StatusIllegalChainID | illegal chainID
423 | StatusSignatureVerifyFailed | signature verification failed
424 | StatusGasPriceError | gas price is less than the minimum value
425 | StatusSecp256r1HalfN | signature s is big than secp256r1HalfN
426 | StatusTransactionHashNil | empty transaction hash
429 | StatusReadBodyError | get body error
430 | StatusFilterNoConfig | filter no config
431 | StatusMethodNotAllowed | the method is not available
432 | StatusDecodeTransactionError | decode transaction from hex string error
500 | StatusInternalError | Internal Error
