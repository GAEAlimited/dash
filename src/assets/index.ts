import walletCover from "./images/wallet-cover.jpg";
import nftsyCover from "./images/nftsy-cover.jpg";
import lotteryCover from "./images/lottery-cover.jpg";
import farmingCover from "./images/farming-cover.jpg";
import dexCover from "./images/dex-cover.jpg";
import daoCover from "./images/dao-cover.jpg";
import crossChainCover from "./images/cross-chain-cover.jpg";
import launchpadCover from "./images/launchpad-cover.png";
import nftstakCover from "./images/nftstak-cover.png";
import aigram from "./images/aigram-cover.jpg";

import ETHEREUM from "./images/ethereum.svg";
import BSC from "./images/bsc.svg";
import POLYGON from "./images/polygon.svg";

import newProduct from "./images/new.png";

let definance: any, definanceStatic: any, daofactory: any, daofactoryStatic: any, farmfactory: any, multicurrencywallet: any, nftmarketplace: any, crosschainStatic: any, launchpadStatic: any, aigramStatic: any;

try {
  definance = require("./plugins/definance.zip");
} catch (error) {
  console.warn("Definance plugin could not be loaded. Using fallback.");
  definance = "defaultPlugin"; // Provide a fallback or set to null
}

try {
  definanceStatic = require("./plugins/static_definance.zip");
} catch (error) {
  console.warn("Definance Static plugin could not be loaded. Using fallback.");
  definanceStatic = "defaultPlugin"; // Provide a fallback or set to null
}try {
  daofactory = require("./plugins/daofactory.zip");
} catch (error) {
  console.warn("DAO Factory plugin could not be loaded. Using fallback.");
  daofactory = "defaultPlugin"; // Provide a fallback or set to null
}

try {
  daofactoryStatic = require("./plugins/static_daofactory.zip");
} catch (error) {
  console.warn("DAO Factory Static plugin could not be loaded. Using fallback.");
  daofactoryStatic = "defaultPlugin"; // Provide a fallback or set to null
}

try {
  farmfactory = require("./plugins/farmfactory.zip");
} catch (error) {
  console.warn("Farm Factory plugin could not be loaded. Using fallback.");
  farmfactory = "defaultPlugin"; // Provide a fallback or set to null
}

try {
  multicurrencywallet = require("./plugins/multicurrencywallet.zip");
} catch (error) {
  console.warn("Multicurrency Wallet plugin could not be loaded. Using fallback.");
  multicurrencywallet = "defaultPlugin"; // Provide a fallback or set to null
}

try {
  nftmarketplace = require("./plugins/nftmarketplace.zip");
} catch (error) {
  console.warn("NFT Marketplace plugin could not be loaded. Using fallback.");
  nftmarketplace = "defaultPlugin"; // Provide a fallback or set to null
}

try {
  crosschainStatic = require("./plugins/static_crosschain.zip");
} catch (error) {
  console.warn("Crosschain Static plugin could not be loaded. Using fallback.");
  crosschainStatic = "defaultPlugin"; // Provide a fallback or set to null
}

try {
  launchpadStatic = require("./plugins/static_launchpad.zip");
} catch (error) {
  console.warn("Launchpad Static plugin could not be loaded. Using fallback.");
  launchpadStatic = "defaultPlugin"; // Provide a fallback or set to null
}

try {
  aigramStatic = require("./plugins/static_aigram.zip");
} catch (error) {
  console.warn("Aigram Static plugin could not be loaded. Using fallback.");
  aigramStatic = "defaultPlugin"; // Provide a fallback or set to null
}

export const COVERS: { [k: string]: string } = {
  walletCover,
  nftsyCover,
  lotteryCover,
  farmingCover,
  dexCover,
  daoCover,
  crossChainCover,
  launchpadCover,
  nftstakCover,
  aigram,
};

export const IMAGES: { [k: string]: string } = {
  newProduct,
};

export const NETWORKS: { [k: number]: string } = {
  1: ETHEREUM,
  56: BSC,
  137: POLYGON,
};

export const PLUGINS: { [id: string]: string } = {
  definance,
  definanceStatic,
  daofactory,
  daofactoryStatic,
  farmfactory,
  multicurrencywallet,
  nftmarketplace,
  crosschainStatic,
  launchpadStatic,
  aigramStatic,
};
