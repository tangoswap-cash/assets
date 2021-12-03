import { CoinType } from "@trustwallet/wallet-core";

export const getChainName = (id: CoinType): string =>  CoinType.id(id); // 60 => ethereum
// TODO - once trustwallet supports smartbch
// export const SmartBCH = getChainName(CoinType.smartbch);

export const ethForkChains = [
//    SmartBCH,
];
export const stakingChains = [
];
export const chainsWithDenylist = ethForkChains.concat(
);
