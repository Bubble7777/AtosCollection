"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NODE_URL = exports.mode = exports.collectionCoverUrl = exports.collectionName = exports.candyMachineAddress = void 0;
var candyMachineAddress = "0x0c7a53e9bbe7a7297137e43ec358f7ed18840592593006e8d69b3cedd6accde0";
exports.candyMachineAddress = candyMachineAddress;
var collectionName = "Solo Dog"; // Case sensitive!

exports.collectionName = collectionName;
var collectionCoverUrl = "https://cloudflare-ipfs.com/ipfs//QmNZTcmDcX5y8caWZ6g84S874ebQRRBeFyCUA1megZjhBv";
exports.collectionCoverUrl = collectionCoverUrl;
var mode = "dev"; // "dev" or "test" or "mainnet"

exports.mode = mode;
var NODE_URL;
exports.NODE_URL = NODE_URL;
var FAUCET_URL;

if (mode == "dev") {
  exports.NODE_URL = NODE_URL = "https://fullnode.devnet.aptoslabs.com/v1";
  FAUCET_URL = "https://faucet.devnet.aptoslabs.com";
} else if (mode === "test") {
  exports.NODE_URL = NODE_URL = "https://fullnode.testnet.aptoslabs.com/v1";
  FAUCET_URL = "https://faucet.testnet.aptoslabs.com";
} else {
  exports.NODE_URL = NODE_URL = "https://fullnode.mainnet.aptoslabs.com/v1";
  FAUCET_URL = null;
}