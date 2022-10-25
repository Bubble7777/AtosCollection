export const candyMachineAddress =
  "0x0c7a53e9bbe7a7297137e43ec358f7ed18840592593006e8d69b3cedd6accde0";
export const collectionName = "Solo Dog"; // Case sensitive!
export const collectionCoverUrl =
  "https://cloudflare-ipfs.com/ipfs//QmNZTcmDcX5y8caWZ6g84S874ebQRRBeFyCUA1megZjhBv";
export const mode = "dev"; // "dev" or "test" or "mainnet"

export let NODE_URL;
let FAUCET_URL;
if (mode == "dev") {
  NODE_URL = "https://fullnode.devnet.aptoslabs.com/v1";
  FAUCET_URL = "https://faucet.devnet.aptoslabs.com";
} else if (mode === "test") {
  NODE_URL = "https://fullnode.testnet.aptoslabs.com/v1";
  FAUCET_URL = "https://faucet.testnet.aptoslabs.com";
} else {
  NODE_URL = "https://fullnode.mainnet.aptoslabs.com/v1";
  FAUCET_URL = null;
}
