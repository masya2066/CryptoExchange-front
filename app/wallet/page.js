'use client'
import Layout from "@/components/layout/Layout"
import {useEffect, useState} from "react"
import store from "@/store";
import {Provider} from "react-redux";
import CreateAccountBanner from "@/components/elements/CreateAccountBanner";
import BaseInput from "@/components/elements/BaseInput";
import LoadButton from "@/components/elements/LoadingButton";
import BaseSelector from "@/components/elements/Selector";
import authMethods from "@/methods/auth";
import {storage} from "@/storage";
import cryptoMethods from "@/methods/crypto";
import {defaultCurrecy} from "@/components/models/cryptoModels";

export default function Wallet() {
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

    const [flatTabs, setFlatTabs] = useState(1)
    const [isUser, setIsUser] = useState({});
    const [isBtcBalance, setIsBtcBalance] = useState("0.00")
    const [isEthBalance, setIsEthBalance] = useState("0.00")
    const [isTrc20Balance, setIsTrc20Balance] = useState("0.00")
    const [selectorValue, setSelectorValue] = useState(currencies[0].value)

    const [isBtcInfo, setIsBtcInfo] = useState(defaultCurrecy)
    const [isEthInfo, setIsEthInfo] = useState(defaultCurrecy)
    const [isTrc20Info, setIsTrc20Info] = useState(defaultCurrecy)
    const [isBtnDisabled, setIsBtnDisabled] = useState(true)
    const [isAddress, setIsAddress] = useState("")
    const [isAmount, setIsAmount] = useState(0)
    const [isWithdrawSent, setIsWithdrawSent] = useState(false)
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isAmountError, setIsAmountError] = useState(false)

    const handleFlatTabs = (index) => {
        setFlatTabs(index)
    }

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

    useEffect(() => {
        console.log(isAddress.length)
        if (isAddress.length >= 32 && Number(isAmount) > 0) {
            if (Number(isAmount) <= Number(currencyBalance[selectorValue.toLowerCase()].total)) {
                setIsAmountError(false)
                setIsBtnDisabled(false)
            } else {
                setIsBtnDisabled(true)
                setIsAmountError(true)
            }
        } else {
            setIsBtnDisabled(true)
        }
    }, [isAddress, isAmount])

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
        }
    }


    const withdraw = () => {
        setIsLoading(true)
        cryptoMethods.withdraw(selectorValue.toLowerCase(), isAddress, Number(isAmount))
            .then((res) => {
                if (res.status == 200 && res.data.success) {
                    setIsError(false)
                    setIsWithdrawSent(true)
                    setIsBtnDisabled(true)
                    setIsLoading(false)
                } else {
                    console.error(res);
                    setIsError(true)
                    setIsLoading(false)
                }
            }).catch(e => {
            console.error(e);
            setIsError(true)
            setIsLoading(false)
        })
    }

    return (
        <>
            <Provider store={store}>
                <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Wallet">
                    <div>
                        <section className="wallet buy-crypto flat-tabs">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-3 col-md-12">
                                        <ul className="menu-tab">
                                            <li className={flatTabs === 1 ? "active" : ""}
                                                onClick={() => handleFlatTabs(1)}><h6 className="fs-16">Overview</h6>
                                            </li>
                                            <li className={flatTabs === 2 ? "active" : ""}
                                                onClick={() => handleFlatTabs(2)}><h6 className="fs-16">Withdraw</h6>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-xl-9 col-md-12">
                                        <div className="content-tab">
                                            <div className="content-inner"
                                                 style={{display: `${flatTabs === 1 ? "block" : "none"}`}}>
                                                <div className="wallet-main">
                                                    <h4 className="heading">Overview</h4>
                                                    <div className="wallet-body">
                                                        <div className="left">
                                                            <p>Total Balance</p>
                                                            <div className="price">
                                                                <h6>$ {totalUsdBalance}</h6>
                                                            </div>
                                                        </div>
                                                        <div className="right">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="coin-list-wallet">
                                                    <table className="table">
                                                        <thead>
                                                        <tr>
                                                            <th scope="col">#</th>
                                                            <th className="center" scope="col">Asset</th>
                                                            <th scope="col">Earn</th>
                                                            <th scope="col">On Orders</th>
                                                            <th scope="col">Available balance</th>
                                                            <th scope="col">Total balance</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td className="number">
                                                                <span>1</span>
                                                            </td>
                                                            <td className="asset">
                                                                <img className={"overview-img"}
                                                                     src={currencies[0].image}/>
                                                                <p>
                                                                    <span className="boild">BTC</span>
                                                                    <span className="unit">Bitcoin</span>
                                                                </p>
                                                            </td>
                                                            <td className="color-success">
                                                                <span className="boild">0.00%</span>
                                                            </td>
                                                            <td>
                                                                <span className="boild">0.00 USDT</span>
                                                                <span className="unit">$0.00</span>
                                                            </td>
                                                            <td>
                                                                <span className="boild">{isBtcBalance} USDT</span>
                                                                <span className="unit">${btcUsdBalance}</span>
                                                            </td>
                                                            <td>
                                                                <span className="boild">{isBtcBalance} USDT</span>
                                                                <span className="unit">${btcUsdBalance}</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="number">
                                                                <span>2</span>
                                                            </td>
                                                            <td className="asset">
                                                                <img className={"overview-img"}
                                                                     src={currencies[1].image}/>
                                                                <p>
                                                                    <span className="boild">ETH</span>
                                                                    <span className="unit">Ethereum</span>
                                                                </p>
                                                            </td>
                                                            <td className="color-success">
                                                                <span className="boild">0.00%</span>
                                                            </td>
                                                            <td>
                                                                <span className="boild">0.00 USDT</span>
                                                                <span className="unit">$0.00</span>
                                                            </td>
                                                            <td>
                                                                <span className="boild">{isEthBalance} USDT</span>
                                                                <span className="unit">${ethUsdBalance}</span>
                                                            </td>
                                                            <td>
                                                                <span className="boild">{isEthBalance} USDT</span>
                                                                <span className="unit">${ethUsdBalance}</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="number">
                                                                <span>3</span>
                                                            </td>
                                                            <td className="asset">
                                                                <img className={"overview-img"}
                                                                     src={currencies[2].image}/>
                                                                <p>
                                                                    <span className="boild">USDT</span>
                                                                    <span className="unit">Tron USDT</span>
                                                                </p>
                                                            </td>
                                                            <td className="color-success">
                                                                <span className="boild">0.00%</span>
                                                            </td>
                                                            <td>
                                                                <span className="boild">0.00 USDT</span>
                                                                <span className="unit">$0.00</span>
                                                            </td>
                                                            <td>
                                                                <span className="boild">{isTrc20Balance} USDT</span>
                                                                <span className="unit">${trc20UsdBalance}</span>
                                                            </td>
                                                            <td>
                                                                <span className="boild">{isTrc20Balance} USDT</span>
                                                                <span className="unit">${trc20UsdBalance}</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="number">
                                                                <span>1</span>
                                                            </td>
                                                            <td className="asset">
                                                                <img className={"overview-img"}
                                                                     src={"assets/images/icon/soli-icon.webp"}/>
                                                                <p>
                                                                    <span className="boild">SOLI</span>
                                                                    <span className="unit">SOLI</span>
                                                                </p>
                                                            </td>
                                                            <td className="color-success">
                                                                <span className="boild">0.00%</span>
                                                            </td>
                                                            <td>
                                                                <span className="boild">0.00 USDT</span>
                                                                <span className="unit">$0.00</span>
                                                            </td>
                                                            <td>
                                                                <span className="boild">0.00 USDT</span>
                                                                <span className="unit">$0.00</span>
                                                            </td>
                                                            <td>
                                                                <span className="boild">0.00 USDT</span>
                                                                <span className="unit">$0.00</span>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="content-inner"
                                                 style={{display: `${flatTabs === 2 ? "block" : "none"}`}}>
                                                <div className="wallet-main">
                                                    <h4 className="heading">Withdraw</h4>
                                                    <div className="wallet-body">
                                                        <div className="left">
                                                            <p>Total Balance</p>
                                                            <div className="price">
                                                                <h6>{currencyBalance[selectorValue.toLowerCase()].total}</h6>
                                                                <div className="sale success">{selectorValue}</div>
                                                            </div>
                                                            <p>${currencyBalance[selectorValue.toLowerCase()].usd}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="wallet-withdraw">
                                                    <div className={"inputs-container"}>
                                                        <BaseSelector
                                                            data={currencies}
                                                            label={"Currency"}
                                                            onChange={(e) => setSelectorValue(e.target.value)}
                                                            defaultValue={currencies[0].value}
                                                        />
                                                        <BaseInput
                                                            onChange={(e) => setIsAddress(e.target.value)}
                                                            placeholder={"Address"}/>
                                                        <BaseInput
                                                            type={"number"}
                                                            error={isAmountError}
                                                            onChange={(e) => setIsAmount(e.target.value)}
                                                            placeholder={"Amount"}/>
                                                    </div>
                                                    <div className={"button-container"}>
                                                        {isWithdrawSent && <p style={{
                                                            display: "flex",
                                                            width: "100%",
                                                            justifyContent: "center",
                                                            color: "lightgreen",
                                                            margin: "0 0 20px 0"
                                                        }}>Your request was registered. Check your E-Mail</p>}
                                                        {isError && <p style={{
                                                            display: "flex",
                                                            width: "100%",
                                                            justifyContent: "center",
                                                            color: "red",
                                                            margin: "0 0 20px 0"
                                                        }}>Internal error</p>}
                                                        <LoadButton
                                                            onClick={withdraw}
                                                            loading={isLoading}
                                                            disabled={isBtnDisabled}
                                                            label={"Submit"}/>
                                                    </div>
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