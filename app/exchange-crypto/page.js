'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import {useEffect, useState} from "react"
import store from "@/store";
import {Provider} from "react-redux";
import CreateAccountBanner from "@/components/elements/CreateAccountBanner";
import {defaultCurrecy} from "@/components/models/cryptoModels";
import authMethods from "@/methods/auth";
import {storage} from "@/storage";
import cryptoMethods from "@/methods/crypto";
import BaseSelector from "@/components/elements/Selector";
import LoadButton from "@/components/elements/LoadingButton";
export default function BuyCryptoSelect() {
    const [flatTabs, setFlatTabs] = useState(1)
    const handleFlatTabs = (index) => {
        setFlatTabs(index)
    }
    const currencies = [
        {
            value: 'BTC',
            label: 'BTC',
            image: '/assets/images/icon/btc-icon.svg'
        },
        {
            value: 'SOLI',
            label: 'SOLI',
            image: '/assets/images/icon/soli-icon.webp'
        },
        {
            value: 'Ethereum',
            label: 'Ethereum',
            image: '/assets/images/icon/eth-icon.svg'
        },
        {
            value: 'USDT',
            label: 'USDT (TRC20)',
            image: '/assets/images/icon/usdt-icon.svg'
        },
    ];
    const [isUser, setIsUser] = useState({});
    const [isBtcBalance, setIsBtcBalance] = useState("0.00")
    const [isEthBalance, setIsEthBalance] = useState("0.00")
    const [isTrc20Balance, setIsTrc20Balance] = useState("0.00")
    const [selectorExchangePay, setSelectorExchangePay] = useState(currencies[2].value)
    const [selectorExchangeReceive, setSelectorExchangeReceive] = useState(currencies[0].value)
    const [payAmount, setPayAmount] = useState("")
    const [receiveAmount, setReceiveAmount] = useState("")
    const [isBtcInfo, setIsBtcInfo] = useState(defaultCurrecy)
    const [isEthInfo, setIsEthInfo] = useState(defaultCurrecy)
    const [isTrc20Info, setIsTrc20Info] = useState(defaultCurrecy)


    const handleSwap = () => {
        // Меняем местами значения селекторов
        selectorExchangePay(prev => selectorExchangeReceive);
        selectorExchangeReceive(prev => selectorExchangePay);

        // Меняем местами значения инпутов
        setPayAmount(prev => receiveAmount);
        setReceiveAmount(prev => payAmount);
    };

    useEffect(() => {
        authMethods.userInfo()
            .then(res => {
                if (res.status === 200 && res.data) {
                    localStorage.setItem(storage.user, JSON.stringify(res.data))
                    cryptoMethods.getBtcBalance(res.data.btc_address)
                        .then(resBtc => {
                            const balance = resBtc.data.balance == 0 ? "0.00" : resBtc.data.balance
                            setIsBtcBalance(balance);
                        }).catch(e => {
                        console.error(e)
                    })
                    cryptoMethods.getEthBalance(res.data.eth_address)
                        .then(resEth => {
                            const balance = resEth.data.balance == 0 ? "0.00" : resEth.data.balance
                            setIsEthBalance(balance);
                        }).catch(e => {
                        console.error(e)
                    })
                    cryptoMethods.getTrc20Balance(res.data.trx_address)
                        .then(resTrc20 => {
                            const balance = resTrc20.data.balance == 0 ? "0.00" : resTrc20.data.balance
                            setIsTrc20Balance(balance);
                        }).catch(e => {
                        console.error(e)
                    })
                }
            })
            .catch(errorResponse => {
                if (errorResponse.status == 401) {
                    localStorage.setItem(storage.user, "")
                    window.location.href = "/login"
                }
            })
        if (typeof window !== "undefined") {
            const userInfo = localStorage.getItem("user_info");
            if (userInfo) {
                setIsUser(JSON.parse(userInfo));
            }
        }
    }, []);


    useEffect(() => {
        cryptoMethods.getCurrenciesInfo()
            .then((res) => {
                res.data.forEach(currency => {
                    if (currency.id === "bitcoin") setIsBtcInfo(currency)
                    if (currency.id === "ethereum") setIsEthInfo(currency)
                    if (currency.id === "tether") setIsTrc20Info(currency)
                })
            })
    }, []);

    const btcUsdBalance = (isBtcInfo.market_data.current_price.usd * Number(isBtcBalance)).toFixed(3)
    const ethUsdBalance = (isEthInfo.market_data.current_price.usd * Number(isEthBalance)).toFixed(3)
    const trc20UsdBalance = (isTrc20Info.market_data.current_price.usd * Number(isTrc20Balance)).toFixed(3)

    const totalUsdBalance = (Number(btcUsdBalance) + Number(ethUsdBalance) + Number(trc20UsdBalance)).toFixed(3)

    const currencyBalance = {
        btc: {
            total: isBtcBalance,
            usd: btcUsdBalance
        },
        ethereum: {
            total: isEthBalance,
            usd: ethUsdBalance
        },
        usdt: {
            total: isTrc20Balance,
            usd: trc20UsdBalance
        },
        soli: {
            total: "0.00",
            usd: "0.00"
        }
    }


    return (
        <>
            <Provider store={store}>
            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Exchange Crypto">
                <div>
                    <section className="buy-crypto flat-tabs">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <ul className="menu-tab">
                                        <li className={flatTabs === 1 ? "active" : ""} onClick={() => handleFlatTabs(1)}><h6 className="fs-16">Exchange Crypto</h6></li>
                                    </ul>
                                </div>
                                <div className="col-md-9">
                                    <div className="content-tab">
                                        <div className="content-inner buy-crypto__main" style={{ display: `${flatTabs === 1 ? "block" : "none"}` }}>
                                            <div className="top">
                                                <ul className="top-list">
                                                    <li className="active">
                                                        <h6><span />Select currency</h6>
                                                    </li>
                                                    <li>
                                                        <h6><span />Important Notes</h6>
                                                    </li>
                                                    <li>
                                                        <h6><span />Payment Details</h6>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="main">
                                                <h6>Select Currency</h6>
                                                <form action="buy-crypto-confirm" className="form">
                                                    <div className="form-field">
                                                        <label>Pay</label>
                                                        <div className={"exchange-input-container"}>
                                                            <input type="number" className="dollar"
                                                                   placeholder="Amount"
                                                                   value={payAmount}
                                                                   onChange={(e) => setPayAmount(e.target.value)}
                                                            />
                                                            <BaseSelector
                                                                data={currencies}
                                                                label={"Currency"}
                                                                onChange={(e) => setSelectorExchangePay(e.target.value)}
                                                                defaultValue={currencies[3].value}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-field">
                                                        <label>Receive</label>
                                                        <div className={"exchange-input-container"}>
                                                            <input type="number" className="bitcoin"
                                                                   placeholder="Amount"
                                                                   value={receiveAmount}
                                                                   onChange={(e) => setReceiveAmount(e.target.value)}
                                                            />
                                                            <BaseSelector
                                                                data={currencies}
                                                                label={"Currency"}
                                                                onChange={(e) => setSelectorExchangeReceive(e.target.value)}
                                                                defaultValue={currencies[0].value}
                                                            />
                                                        </div>
                                                    </div>
                                                    <button type="submit" className="btn-action">Continue</button>
                                                </form>
                                                <div className="button"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <CreateAccountBanner/>
                </div>

            </Layout>
            </Provider>
        </>
    )
}