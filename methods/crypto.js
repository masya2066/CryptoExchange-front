import axios from "axios";
import {config} from "@/appConfig";

const cryptoMethods = {
    getBtcBalance: (address) => {
        return axios.post(config.CRYPTO_API + "/api/btc_balance", {
            address: address
        })
    },
    getTrc20Balance: (address) => {
        return axios.post(config.CRYPTO_API + "/api/trc20_balance", {
            address: address
        })
    },
    getEthBalance: (address) => {
        return axios.post(config.CRYPTO_API + "/api/eth_balance", {
            address: address
        })
    },
    getBtcInfo: () => {
        return axios.get(config.CRYPTO_API + "/api/bitcoin_info")
    },
    getEthInfo: () => {
        return axios.get(config.CRYPTO_API + "/api/ethereum_info")
    },
    getUsdtInfo: () => {
        return axios.get(config.CRYPTO_API + "/api/usdt_info")
    },
    getSolanaInfo: () => {
        return axios.get(config.CRYPTO_API + "/api/solana_info")
    },
    getRippleInfo: () => {
        return axios.get(config.CRYPTO_API + "/api/ripple_info")
    },
    getCardanoInfo: () => {
        return axios.get(config.CRYPTO_API + "/api/cardano_info")
    },
    getAvalancheInfo: () => {
        return axios.get(config.CRYPTO_API + "/api/avalanche_info")
    },
    getBnbInfo: () => {
        return axios.get(config.CRYPTO_API + "/api/bnb_info")
    }
}

export default cryptoMethods;