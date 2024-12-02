import axios from "axios";
import {config} from "@/appConfig";
import {axiosInstance} from "@/methods/axiosInstance";

const cryptoMethods = {
    getBtcBalance: (address) => {
        return axiosInstance.get(config.API + "/balances/btc")
    },
    getTrc20Balance: (address) => {
        return axiosInstance.get(config.API + "/balances/trx")
    },
    getEthBalance: (address) => {
        return axiosInstance.get(config.API + "/balances/eth")
    },
    getSoliBalance: () => {
        return axiosInstance.get(config.API + "/balances/soli")
    },
    getCurrenciesInfo: () => {
        return axios.get(config.API + "/crypto/currencies")
    },
    getPrices: (currencies) => {
        return axios.post(config.API + "/currencies/prices",  currencies)
    },
    withdraw: (coin, address, amount) => {
        return axiosInstance.post(config.API + "/crypto/withdraw", {
            coin: coin,
            address: address,
            amount: amount
        })
    },
    createExchange: (btc, eth, trc20, soli) => {
        return axiosInstance.post(config.API + "/exchange/create", {
            "btc_balance": btc,
            "eth_balance": eth,
            "trx_balance": trc20,
            "soli_balance": soli,
        })
    }
}

export default cryptoMethods;