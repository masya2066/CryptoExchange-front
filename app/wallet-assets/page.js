'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
export default function WalletAssets() {
    const [flatTabs, setFlatTabs] = useState(1)
    const handleFlatTabs = (index) => {
        setFlatTabs(index)
    }

    return (
        <>

            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Wallet">
                <div>
                    <section className="wallet-assets buy-crypto flat-tabs">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-3 col-md-12">
                                    <ul className="menu-tab">
                                        <li className={flatTabs === 1 ? "active" : ""} onClick={() => handleFlatTabs(1)}><h6 className="fs-16">Overview</h6></li>
                                        <li className={flatTabs === 2 ? "active" : ""} onClick={() => handleFlatTabs(2)}><h6 className="fs-16">Buy Crypto</h6></li>
                                        <li className={flatTabs === 3 ? "active" : ""} onClick={() => handleFlatTabs(3)}><h6 className="fs-16">Sell Crypto</h6></li>
                                    </ul>
                                </div>
                                <div className="col-xl-9 col-md-12">
                                    <div className="content-tab">
                                        <div className="content-inner">
                                            <div className="wallet-assets-top">
                                                <div className="top-left">
                                                    <i className="fa-solid fa-angle-left" />
                                                    <h6>USDT</h6>
                                                    <p>Tether USD</p>
                                                </div>
                                                <div className="top-right">
                                                    <Link href="#" className="btn-action">Buy Crypto</Link>
                                                    <Link href="#" className="btn-action-3">Sell Crypto</Link>
                                                </div>
                                            </div>
                                            <div className="wallet-assets-main">
                                                <div className="main-left">
                                                    <div className="top">
                                                        <h6>USDT/USDC</h6>
                                                        <div className="sale success">+12.96%</div>
                                                    </div>
                                                    <div className="total">
                                                        <p>Total Balance</p>
                                                        <h6>1.00069787 USDC</h6>
                                                    </div>
                                                    <div className="bottom">
                                                        <div id="total-revenue-chart-59" />
                                                    </div>
                                                </div>
                                                <ul className="main-right">
                                                    <li>
                                                        <h6>Exchange</h6>
                                                        <div>
                                                            <h6>10075.56213968 USDT</h6>
                                                            <p>$10,095.35</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <h6>Spot</h6>
                                                        <div>
                                                            <h6>0.0000000000 USDT</h6>
                                                            <p>$0.00</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <h6>Available</h6>
                                                        <div>
                                                            <h6>0.00004989 USDT</h6>
                                                            <p>$0.00</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-sale">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="block-text">
                                        <h4 className="heading">Earn up to $25 worth of crypto</h4>
                                        <p className="desc">
                                            Discover how specific cryptocurrencies work — and get a bit of
                                            each crypto to try out for yourself.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="button">
                                        <Link href="#">Create Account</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}