'use client'
import Layout from "@/components/layout/Layout"
import CheckIcon from '@mui/icons-material/Check';
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
import {Alert} from "@mui/lab";

export default function BuyCryptoSelect() {
    const currencies = [
        {value: 'BTC', label: 'BTC', image: '/assets/images/icon/btc-icon.svg'},
        {value: 'SOLI', label: 'SOLI', image: '/assets/images/icon/soli-icon.webp'},
        {value: 'Ethereum', label: 'Ethereum', image: '/assets/images/icon/eth-icon.svg'},
        {value: 'USDT', label: 'USDT (TRC20)', image: '/assets/images/icon/usdt-icon.svg'},
    ];

    // State management
    const [flatTabs, setFlatTabs] = useState(1);
    const [isUser, setIsUser] = useState({});
    const [isBtcBalance, setIsBtcBalance] = useState("0.00");
    const [isEthBalance, setIsEthBalance] = useState("0.00");
    const [isTrc20Balance, setIsTrc20Balance] = useState("0.00");
    const [isSoliBalance, setIsSoliBalance] = useState("0.00");
    const [selectorExchangePay, setSelectorExchangePay] = useState(currencies[3].value);
    const [selectorExchangeReceive, setSelectorExchangeReceive] = useState(currencies[0].value);
    const [payAmount, setPayAmount] = useState("");
    const [receiveAmount, setReceiveAmount] = useState("");
    const [isBtcInfo, setIsBtcInfo] = useState(defaultCurrecy);
    const [isEthInfo, setIsEthInfo] = useState(defaultCurrecy);
    const [isTrc20Info, setIsTrc20Info] = useState(defaultCurrecy);
    const [isSoliPrice, setIsSoliPrice] = useState("0.00");
    const [isAvailable, setIsAvailable] = useState("0.00");
    const [isCurrentBalance, setIsCurrentBalance] = useState("0.00");
    const [isLoading, setIsLoading] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [isError, setIsError] = useState(false);
    const [isSuccess , setIsSuccess] = useState(false);

    useEffect(() => {
        authMethods.userInfo()
            .then(res => {
                if (res.status === 200 && res.data) {
                    localStorage.setItem(storage.user, JSON.stringify(res.data));
                    setIsUser(res.data);

                    cryptoMethods.getBtcBalance(res.data.btc_address)
                        .then(resBtc => setIsBtcBalance(resBtc.data.balance || "0.00"))
                        .catch(console.error);

                    cryptoMethods.getEthBalance(res.data.eth_address)
                        .then(resEth => setIsEthBalance(resEth.data.balance || "0.00"))
                        .catch(console.error);

                    cryptoMethods.getTrc20Balance(res.data.trx_address)
                        .then(resTrc20 => setIsTrc20Balance(resTrc20.data.balance || "0.00"))
                        .catch(console.error);

                    cryptoMethods.getSoliBalance("")
                        .then(resSoli => setIsSoliBalance(resSoli.data.balance || "0.00"))
                        .catch(console.error);
                }
            })
            .catch(err => {
                if (err.status === 401) {
                    localStorage.setItem(storage.user, "");
                    window.location.href = "/login";
                }
            });
    }, [payAmount]);

    useEffect(() => {
        cryptoMethods.getCurrenciesInfo()
            .then(res => {
                res.data.forEach(currency => {
                    if (currency.id === "bitcoin") setIsBtcInfo(currency);
                    if (currency.id === "ethereum") setIsEthInfo(currency);
                    if (currency.id === "tether") setIsTrc20Info(currency);
                });
            });

        cryptoMethods.getPrices(['soli'])
            .then(res => {
                res.data.forEach(currency => {
                    if (currency.currency === "soli") {
                        setIsSoliPrice(currency.usd_price);
                    }
                });
            });
    }, []);

    useEffect(() => {
        switch (selectorExchangePay) {
            case "BTC":
                setIsAvailable(isBtcBalance);
                break;
            case "Ethereum":
                setIsAvailable(isEthBalance);
                break;
            case "USDT":
                setIsAvailable(isTrc20Balance);
                break;
            case "SOLI":
                setIsAvailable(isSoliBalance);
                break;
            default:
                setIsAvailable("0.00");
        }

        switch (selectorExchangeReceive) {
            case "BTC":
                setIsCurrentBalance(isBtcBalance);
                break;
            case "Ethereum":
                setIsCurrentBalance(isEthBalance);
                break;
            case "USDT":
                setIsCurrentBalance(isTrc20Balance);
                break;
            case "SOLI":
                setIsCurrentBalance(isSoliBalance);
                break;
            default:
                setIsCurrentBalance("0.00");
        }
    }, [selectorExchangePay, selectorExchangeReceive, isBtcBalance, isEthBalance, isTrc20Balance, isSoliBalance]);

    const convert = () => {
        setIsDisabled(true)
        setIsError(false)
        if (!payAmount || payAmount === "") setReceiveAmount("")
        if (selectorExchangePay === "BTC" && selectorExchangeReceive === "SOLI") {
            if (Number(payAmount) <= Number(isBtcBalance)) {
                const soliUsdPrice = Number(isSoliPrice);
                const soliAmount = (Number(payAmount) * Number(isBtcInfo.market_data.current_price.usd)) / soliUsdPrice;
                if (payAmount && Number(payAmount) > 0) setReceiveAmount(soliAmount.toFixed(8));
                if (payAmount && payAmount !== "" && Number(payAmount) > 0) setIsDisabled(false)
            } else {
                setIsError(true);
                setIsDisabled(true)
            }
        }
        if (selectorExchangePay === "BTC" && selectorExchangeReceive === "Ethereum") {
            if (Number(payAmount) <= Number(isBtcBalance)) {
                const ethUsdPrice = Number(isEthInfo.market_data.current_price.usd);
                const ethAmount = (Number(payAmount) * Number(isBtcInfo.market_data.current_price.usd)) / ethUsdPrice;
                if (payAmount && Number(payAmount) > 0) setReceiveAmount(ethAmount.toFixed(8));
                if (payAmount && payAmount !== "" && Number(payAmount) > 0) setIsDisabled(false)
            } else {
                setIsError(true);
                setIsDisabled(true)
            }
        }
        if (selectorExchangePay === "BTC" && selectorExchangeReceive === "USDT") {
            if (Number(payAmount) <= Number(isBtcBalance)) {
                const usdtUsdPrice = Number(isTrc20Info.market_data.current_price.usd);
                const usdtAmount = (Number(payAmount) * Number(isBtcInfo.market_data.current_price.usd)) / usdtUsdPrice;
                if (payAmount && Number(payAmount) > 0) setReceiveAmount(usdtAmount.toFixed(8));
                if (payAmount && payAmount !== "" && Number(payAmount) > 0) setIsDisabled(false)
            } else {
                setIsError(true);
                setIsDisabled(true)
            }
        }
        if (selectorExchangePay === "BTC" && selectorExchangeReceive === "BTC") {
            if (payAmount) setReceiveAmount(payAmount);
        }

        if (selectorExchangePay === "Ethereum" && selectorExchangeReceive === "SOLI") {
            if (Number(payAmount) <= Number(isEthBalance)) {
                const soliUsdPrice = Number(isSoliPrice);
                const soliAmount = (Number(payAmount) * Number(isEthInfo.market_data.current_price.usd)) / soliUsdPrice;
                if (payAmount && Number(payAmount) > 0) setReceiveAmount(soliAmount.toFixed(8));
                if (payAmount && payAmount !== "" && Number(payAmount) > 0) setIsDisabled(false)
            } else {
                setIsError(true);
                setIsDisabled(true)
            }
        }
        if (selectorExchangePay === "Ethereum" && selectorExchangeReceive === "BTC") {
            if (Number(payAmount) <= Number(isEthBalance)) {
                const btcUsdPrice = Number(isBtcInfo.market_data.current_price.usd);
                const ethAmount = (Number(payAmount) * Number(isEthInfo.market_data.current_price.usd)) / btcUsdPrice;
                if (payAmount && Number(payAmount) > 0) setReceiveAmount(ethAmount.toFixed(8));
                if (payAmount && payAmount !== "" && Number(payAmount) > 0) setIsDisabled(false)
            } else {
                setIsError(true);
                setIsDisabled(true)
            }
        }
        if (selectorExchangePay === "Ethereum" && selectorExchangeReceive === "USDT") {
            if (Number(payAmount) <= Number(isEthBalance)) {
                const usdtUsdPrice = Number(isTrc20Info.market_data.current_price.usd);
                const usdtAmount = (Number(payAmount) * Number(isEthInfo.market_data.current_price.usd)) / usdtUsdPrice;
                if (payAmount && Number(payAmount) > 0) setReceiveAmount(usdtAmount.toFixed(8));
                if (payAmount && payAmount !== "" && Number(payAmount) > 0) setIsDisabled(false)
            } else {
                setIsError(true);
                setIsDisabled(true)
            }
        }
        if (selectorExchangePay === "Ethereum" && selectorExchangeReceive === "Ethereum") {
            if (payAmount && Number(payAmount) > 0) setReceiveAmount(payAmount);
        }

        if (selectorExchangePay === "USDT" && selectorExchangeReceive === "SOLI") {
            if (Number(payAmount) <= Number(isTrc20Balance)) {
                const soliUsdPrice = Number(isSoliPrice);
                const soliAmount = (Number(payAmount) * Number(isTrc20Info.market_data.current_price.usd)) / soliUsdPrice;
                if (payAmount && Number(payAmount) > 0) setReceiveAmount(soliAmount.toFixed(8));
                if (payAmount && payAmount !== "" && Number(payAmount) > 0) setIsDisabled(false)
            } else {
                setIsError(true);
                setIsDisabled(true)
            }
        }
        if (selectorExchangePay === "USDT" && selectorExchangeReceive === "BTC") {
            if (Number(payAmount) <= Number(isTrc20Balance)) {
                const btcUsdPrice = Number(isBtcInfo.market_data.current_price.usd);
                const ethAmount = (Number(payAmount) * Number(isTrc20Info.market_data.current_price.usd)) / btcUsdPrice;
                if (payAmount && Number(payAmount) > 0) setReceiveAmount(ethAmount.toFixed(8));
                if (payAmount && payAmount !== "" && Number(payAmount) > 0) setIsDisabled(false)
            } else {
                setIsError(true);
                setIsDisabled(true)
            }
        }
        if (selectorExchangePay === "USDT" && selectorExchangeReceive === "Ethereum") {
            if (Number(payAmount) <= Number(isTrc20Balance)) {
                const ethUsdPrice = Number(isEthInfo.market_data.current_price.usd);
                const usdtAmount = (Number(payAmount) * Number(isTrc20Info.market_data.current_price.usd)) / ethUsdPrice;
                if (payAmount && Number(payAmount) > 0) setReceiveAmount(usdtAmount.toFixed(8));
                if (payAmount && payAmount !== "" && Number(payAmount) > 0) setIsDisabled(false)
            } else {
                setIsError(true);
                setIsDisabled(true)
            }
        }
        if (selectorExchangePay === "USDT" && selectorExchangeReceive === "USDT") {
            if (payAmount) setReceiveAmount(payAmount);
        }

        if (selectorExchangePay === "SOLI" && selectorExchangeReceive === "USDT") {
            if (Number(payAmount) <= Number(isSoliBalance)) {
                const trc20UsdPrice = Number(isTrc20Info.market_data.current_price.usd);
                const trc20Amount = (Number(payAmount) * Number(isSoliPrice)) / trc20UsdPrice;
                if (payAmount && Number(payAmount) > 0) setReceiveAmount(trc20Amount.toFixed(8));
                if (payAmount && payAmount !== "" && Number(payAmount) > 0) setIsDisabled(false)
            } else {
                setIsError(true);
                setIsDisabled(true)
            }
        }
        if (selectorExchangePay === "SOLI" && selectorExchangeReceive === "BTC") {
            if (Number(payAmount) <= Number(isSoliBalance)) {
                const btcUsdPrice = Number(isBtcInfo.market_data.current_price.usd);
                const ethAmount = (Number(payAmount) * Number(isSoliPrice)) / btcUsdPrice;
                if (payAmount && Number(payAmount) > 0) setReceiveAmount(ethAmount.toFixed(8));
                if (payAmount && payAmount !== "" && Number(payAmount) > 0) setIsDisabled(false)
            } else {
                setIsError(true);
                setIsDisabled(true)
            }
        }
        if (selectorExchangePay === "SOLI" && selectorExchangeReceive === "Ethereum") {
            if (Number(payAmount) <= Number(isSoliBalance)) {
                const ethUsdPrice = Number(isEthInfo.market_data.current_price.usd);
                const usdtAmount = (Number(payAmount) * Number(isSoliPrice)) / ethUsdPrice;
                if (payAmount && Number(payAmount) > 0) setReceiveAmount(usdtAmount.toFixed(8));
                if (payAmount && payAmount !== "" && Number(payAmount) > 0) setIsDisabled(false)
            } else {
                setIsError(true);
                setIsDisabled(true)
            }
        }
        if (selectorExchangePay === "SOLI" && selectorExchangeReceive === "SOLI") {
            if (payAmount && Number(payAmount) > 0) setReceiveAmount(payAmount);
        }
    };

    const exchange = () => {
        setIsLoading(true);

        if (selectorExchangePay === "BTC" && selectorExchangeReceive === "SOLI") {
            if (payAmount && receiveAmount) {
                cryptoMethods.createExchange(-Number(payAmount), 0, 0, Number(receiveAmount))
                    .then((result) => {
                        setIsLoading(false);
                        setPayAmount("")
                        triggerAlert()
                    }).catch((err) => {
                    console.error(err);
                    setIsLoading(false);
                })
            }
        }
        if (selectorExchangePay === "BTC" && selectorExchangeReceive === "Ethereum") {
            if (payAmount && receiveAmount) {
                cryptoMethods.createExchange(-Number(payAmount), Number(receiveAmount), 0, 0)
                    .then((result) => {
                        setIsLoading(false);
                        setPayAmount("")
                        triggerAlert()
                    }).catch((err) => {
                    console.error(err);
                    setIsLoading(false);
                })
            }
        }
        if (selectorExchangePay === "BTC" && selectorExchangeReceive === "USDT") {
            if (payAmount && receiveAmount) {
                cryptoMethods.createExchange(-Number(payAmount), 0, Number(receiveAmount), 0)
                    .then((result) => {
                        setIsLoading(false);
                        setPayAmount("")
                        triggerAlert()
                    }).catch((err) => {
                    console.error(err);
                    setIsLoading(false);
                })
            }
        }


        if (selectorExchangePay === "Ethereum" && selectorExchangeReceive === "SOLI") {
            if (payAmount && receiveAmount) {
                cryptoMethods.createExchange(0, -Number(payAmount), 0, Number(receiveAmount))
                    .then((result) => {
                        setIsLoading(false);
                        setPayAmount("")
                        triggerAlert()
                    }).catch((err) => {
                    console.error(err);
                    setIsLoading(false);
                })
            }
        }
        if (selectorExchangePay === "Ethereum" && selectorExchangeReceive === "BTC") {
            if (payAmount && receiveAmount) {
                cryptoMethods.createExchange(Number(receiveAmount), -Number(payAmount), 0, 0)
                    .then((result) => {
                        setIsLoading(false);
                        setPayAmount("")
                        triggerAlert()
                    }).catch((err) => {
                    console.error(err);
                    setIsLoading(false);
                })
            }
        }
        if (selectorExchangePay === "Ethereum" && selectorExchangeReceive === "USDT") {
            if (payAmount && receiveAmount) {
                cryptoMethods.createExchange(0, -Number(payAmount), Number(receiveAmount), 0)
                    .then((result) => {
                        setIsLoading(false);
                        setPayAmount("")
                        triggerAlert()
                    }).catch((err) => {
                    console.error(err);
                    setIsLoading(false);
                })
            }
        }

        if (selectorExchangePay === "USDT" && selectorExchangeReceive === "SOLI") {
            if (payAmount && receiveAmount) {
                cryptoMethods.createExchange(0, 0, -Number(payAmount), Number(receiveAmount))
                    .then((result) => {
                        setIsLoading(false);
                        setPayAmount("")
                        triggerAlert()
                    }).catch((err) => {
                    console.error(err);
                    setIsLoading(false);
                })
            }
        }
        if (selectorExchangePay === "USDT" && selectorExchangeReceive === "BTC") {
            if (payAmount && receiveAmount) {
                cryptoMethods.createExchange(Number(receiveAmount), -Number(payAmount), 0, 0)
                    .then((result) => {
                        setIsLoading(false);
                        setPayAmount("")
                        triggerAlert()
                    }).catch((err) => {
                    console.error(err);
                    setIsLoading(false);
                })
            }
        }
        if (selectorExchangePay === "USDT" && selectorExchangeReceive === "Ethereum") {
            if (payAmount && receiveAmount) {
                cryptoMethods.createExchange(0, Number(receiveAmount), -Number(payAmount), 0)
                    .then((result) => {
                        setIsLoading(false);
                        setPayAmount("")
                        triggerAlert()
                    }).catch((err) => {
                    console.error(err);
                    setIsLoading(false);
                })
            }
        }

        if (selectorExchangePay === "SOLI" && selectorExchangeReceive === "USDT") {
            if (payAmount && receiveAmount) {
                cryptoMethods.createExchange(0, 0, Number(receiveAmount), -Number(payAmount))
                    .then((result) => {
                        setIsLoading(false);
                        setPayAmount("")
                        triggerAlert()
                    }).catch((err) => {
                    console.error(err);
                    setIsLoading(false);
                })
            }
        }
        if (selectorExchangePay === "SOLI" && selectorExchangeReceive === "BTC") {
            if (payAmount && receiveAmount) {
                cryptoMethods.createExchange(Number(receiveAmount), 0, 0, -Number(payAmount))
                    .then((result) => {
                        setIsLoading(false);
                        setPayAmount("")
                        triggerAlert()
                    }).catch((err) => {
                    console.error(err);
                    setIsLoading(false);
                })
            }
        }
        if (selectorExchangePay === "SOLI" && selectorExchangeReceive === "Ethereum") {
            if (payAmount && receiveAmount) {
                cryptoMethods.createExchange(0, Number(receiveAmount), 0, -Number(payAmount))
                    .then((result) => {
                        setIsLoading(false);
                        setPayAmount("")
                        triggerAlert()
                    }).catch((err) => {
                    console.error(err);
                    setIsLoading(false);
                })
            }
        }
    }

    useEffect(() => {
        convert();
    }, [payAmount, selectorExchangePay, selectorExchangeReceive]);


    const triggerAlert = () => {
        setIsSuccess(true);
        setTimeout(() => {
            setIsSuccess(false);
        }, 6000); // 10000 миллисекунд = 10 секунд
    };

    return (
        <>
            <Provider store={store}>
                <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Exchange Crypto">
                    <div
                        className={`alert-container ${isSuccess ? "show" : ""}`}
                        style={{
                            position: "fixed",
                            bottom: "0",
                            left: "50%",
                            transform: "translateX(-50%)",
                            zIndex: 9999,
                            width: "300px",
                            textAlign: "center",
                            marginBottom: 50,
                            transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
                        }}
                    >
                        <Alert icon={<CheckIcon fontSize="inherit"/>} severity="success">
                            Exchange was made successfully! {selectorExchangePay} ➤ {selectorExchangeReceive}
                        </Alert>
                    </div>
                    <style jsx>{`
                        .alert-container {
                            transform: translateY(100%); /* Начальная позиция: скрыт */
                            opacity: 0;
                        }

                        .alert-container.show {
                            transform: translateY(0); /* Показ: выдвигается */
                            opacity: 1;
                        }
                    `}</style>
                    <div>
                        <section className="buy-crypto flat-tabs">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-3">
                                        <ul className="menu-tab">
                                            <li className={flatTabs === 1 ? "active" : ""}
                                                onClick={() => handleFlatTabs(1)}><h6 className="fs-16">Exchange
                                                Crypto</h6></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="content-tab">
                                            <div className="content-inner buy-crypto__main"
                                                 style={{display: `${flatTabs === 1 ? "block" : "none"}`}}>
                                                <div className="main">
                                                    <h6>Select Currency</h6>
                                                    <form action="buy-crypto-confirm" className="form">
                                                        <div className="form-field">
                                                            <label>Pay</label>

                                                            <div className={"exchange-input-container"}>
                                                                <div style={{display: "flex", flexDirection: "column"}}>
                                                                    <input type="number" className="dollar"
                                                                           placeholder="Amount"
                                                                           value={payAmount}
                                                                           onChange={(e) => setPayAmount(e.target.value)}
                                                                    />
                                                                    <div style={{
                                                                        display: "flex",
                                                                        width: "100%",
                                                                        justifyContent: "end",
                                                                        marginTop: 5
                                                                    }}>
                                                                        <div
                                                                            style={{fontSize: "12px"}}>Available: {Number(isAvailable).toFixed(8)}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <BaseSelector
                                                                    data={currencies}
                                                                    label={"Currency"}
                                                                    onChange={(e) => {
                                                                        setSelectorExchangePay(e.target.value)
                                                                    }}
                                                                    defaultValue={currencies[3].value}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-field">
                                                            <label>Receive</label>
                                                            <div className={"exchange-input-container"}>
                                                                <div style={{display: "flex", flexDirection: "column"}}>
                                                                    <input type="number" className="bitcoin"
                                                                           placeholder="Amount"
                                                                           disabled={true}
                                                                           value={receiveAmount}
                                                                    />
                                                                    <div style={{
                                                                        display: "flex",
                                                                        width: "100%",
                                                                        justifyContent: "end",
                                                                        marginTop: 5
                                                                    }}>
                                                                        <div
                                                                            style={{fontSize: "12px"}}>Balance: {Number(isCurrentBalance).toFixed(8)}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <BaseSelector
                                                                    data={currencies}
                                                                    label={"Currency"}
                                                                    onChange={(e) => setSelectorExchangeReceive(e.target.value)}
                                                                    defaultValue={currencies[0].value}
                                                                />
                                                            </div>
                                                        </div>
                                                        {
                                                            isError &&
                                                            <div style={{
                                                                display: "flex",
                                                                width: "100%",
                                                                textAlign: "center",
                                                                color: "red"
                                                            }}>
                                                                Not enough funds to exchange! Available: {isAvailable}
                                                            </div>
                                                        }
                                                        <div style={{
                                                            display: "flex",
                                                            width: "100%",
                                                            justifyContent: "end",
                                                            marginTop: 30
                                                        }}>
                                                            <LoadButton
                                                                label={"Exchange"}
                                                                disabled={isDisabled}
                                                                loading={isLoading}
                                                                onClick={() => exchange()}
                                                            />
                                                        </div>
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