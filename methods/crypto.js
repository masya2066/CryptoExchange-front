import axios from "axios";
import {config} from "@/appConfig";
import {axiosInstance} from "@/methods/axiosInstance";

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
    getCurrenciesInfo: () => {
        return axios.get(config.API + "/crypto/currencies")
    },
    withdraw: (coin, address, amount) => {
        return axiosInstance.post(config.API + "/crypto/withdraw", {
            coin: coin,
            address: address,
            amount: amount
        })
    }
}

export default cryptoMethods;