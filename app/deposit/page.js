'use client'
import Layout from "@/components/layout/Layout"
import {Provider} from "react-redux";
import store from "@/store";
import CreateAccountBanner from "@/components/elements/CreateAccountBanner";
import {useEffect, useState} from "react";
import QRCodeGen from "@/components/elements/QrCodeGenerator";
import authMethods from "@/methods/auth";
import {storage} from "@/storage";
import cryptoMethods from "@/methods/crypto";
export default function Deposit() {

    const [flatTabs, setFlatTabs] = useState(1)
    const handleFlatTabs = (index) => {
        setFlatTabs(index)
    }

    const [isUser, setIsUser] = useState({});
    const [isBtcBalance, setIsBtcBalance] = useState("0.00")
    const [isEthBalance, setIsEthBalance] = useState("0.00")
    const [isTrc20Balance, setIsTrc20Balance] = useState("0.00")


    useEffect(() => {
        authMethods.userInfo()
            .then(res => {
                if (res.status == 200 && res.data) {
                    localStorage.setItem(storage.user, JSON.stringify(res.data))
                    cryptoMethods.getBtcBalance(res.data.btc_address)
                        .then(resBtc => {
                            const balance = resBtc.data.balance === 0 ? "0.00" : resBtc.data.balance
                            setIsBtcBalance(balance);
                        }).catch(e => {
                        console.error(e)
                    })
                    cryptoMethods.getEthBalance(res.data.eth_address)
                        .then(resEth => {
                            const balance = resEth.data.balance === 0 ? "0.00" : resEth.data.balance
                            setIsEthBalance(balance);
                        }).catch(e => {
                        console.error(e)
                    })
                    cryptoMethods.getTrc20Balance(res.data.trx_address)
                        .then(resTrc20 => {
                            const balance = resTrc20.data.balance === 0 ? "0.00" : resTrc20.data.balance
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

    return (
        <>
            <Provider store={store}>
                <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Deposit">
                    <div>
                        <section className="wallet buy-crypto flat-tabs">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-3 col-md-12">
                                        <ul className="menu-tab">
                                            <li className={flatTabs === 1 ? "active" : ""}
                                                onClick={() => handleFlatTabs(1)}><h6 className="fs-16">Ethereum</h6>
                                            </li>
                                            <li className={flatTabs === 2 ? "active" : ""}
                                                onClick={() => handleFlatTabs(2)}><h6 className="fs-16">USDT(TRC20)</h6>
                                            </li>
                                            <li className={flatTabs === 3 ? "active" : ""}
                                                onClick={() => handleFlatTabs(3)}><h6 className="fs-16">BTC</h6>
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
                                                                <h6>{isEthBalance}</h6>
                                                                <div className="sale success">Ethereum</div>
                                                            </div>
                                                            <p>${isEthBalance}</p>
                                                        </div>
                                                        <div className="right">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="wallet-deposit-main">
                                                    <div className={"qr-code-container"}>
                                                        <QRCodeGen usdtAddress={isUser.eth_address}/>
                                                    </div>
                                                    <div className={"fields-container"}>
                                                        <div className={"copy-field"}>
                                                            Address: {isUser.eth_address}
                                                            <img src={"/assets/images/icon/copy-icon.png"}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="content-inner"
                                                 style={{display: `${flatTabs === 2 ? "block" : "none"}`}}>
                                                <div className="wallet-main">
                                                    <h4 className="heading">Overview</h4>
                                                    <div className="wallet-body">
                                                        <div className="left">
                                                            <p>Total Balance</p>
                                                            <div className="price">
                                                                <h6>{isTrc20Balance}</h6>
                                                                <div className="sale success">USDT(TRC20)</div>
                                                            </div>
                                                            <p>${isTrc20Balance}</p>
                                                        </div>
                                                        <div className="right">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="wallet-deposit-main">
                                                    <div className={"qr-code-container"}>
                                                        <QRCodeGen
                                                            usdtAddress={isUser.trx_address}/>
                                                    </div>
                                                    <div className={"fields-container"}>
                                                        <div className={"copy-field"}>
                                                            Address: {isUser.trx_address}
                                                            <img src={"/assets/images/icon/copy-icon.png"}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="content-inner"
                                                 style={{display: `${flatTabs === 3 ? "block" : "none"}`}}>
                                                <div className="wallet-main">
                                                    <h4 className="heading">Overview</h4>
                                                    <div className="wallet-body">
                                                        <div className="left">
                                                            <p>Total Balance</p>
                                                            <div className="price">
                                                                <h6>{isBtcBalance}</h6>
                                                                <div className="sale success">BTC</div>
                                                            </div>
                                                            <p>${isBtcBalance}</p>
                                                        </div>
                                                        <div className="right">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="wallet-deposit-main">
                                                    <div className={"qr-code-container"}>
                                                        <QRCodeGen
                                                            usdtAddress={isUser.btc_address}/>
                                                    </div>
                                                    <div className={"fields-container"}>
                                                        <div className={"copy-field"}>
                                                            Address: {isUser.btc_address}
                                                            <img src={"/assets/images/icon/copy-icon.png"}/>
                                                        </div>
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