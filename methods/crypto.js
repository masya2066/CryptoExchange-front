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
    }
}

export default cryptoMethods;