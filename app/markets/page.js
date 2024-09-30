'use client'
import ChatList from "@/components/chart/ChatList"
import IconStar from "@/components/elements/IconStar"
import VideoPopup from "@/components/elements/VideoPopup"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
import store from "@/store";
import {Provider} from "react-redux";
export default function Markets() {
    const [flatTabs, setFlatTabs] = useState(1)
    const [flatTabs1, setFlatTabs1] = useState(1)
    const [flatTabs2, setFlatTabs2] = useState(1)
    const [flatTabs3, setFlatTabs3] = useState(1)
    const handleFlatTabs = (index) => {
        setFlatTabs(index)
    }
    const handleFlatTabs1 = (index) => {
        setFlatTabs1(index)
    }
    const handleFlatTabs2 = (index) => {
        setFlatTabs2(index)
    }
    const handleFlatTabs3 = (index) => {
        setFlatTabs3(index)
    }
    return (
        <>
            <Provider store={store}>
            <Layout headerStyle={1} footerStyle={2}>
                <div>
                    <section className="banner">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-md-12">
                                    <div className="banner__content">
                                        <h2 className="title">Today’s Cryptocurrency prices</h2>
                                        <p className="fs-24 desc">
                                            The global crypto market cap is <span>$1.86T</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-md-12">
                                    <div className="banner__image">
                                        <img src="/assets/images/layout/banner-04.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* End Banner Top */}
                    <section className="crypto">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="crypto__main">
                                        <div className="flat-tabs">
                                            <ul className="menu-tab">
                                                <li className={flatTabs === 1 ? "active" : ""} onClick={() => handleFlatTabs(1)}><h6 className="fs-16">Crypto</h6></li>
                                                <li className={flatTabs === 2 ? "active" : ""} onClick={() => handleFlatTabs(2)}><h6 className="fs-16">DeFi</h6></li>
                                                <li className={flatTabs === 3 ? "active" : ""} onClick={() => handleFlatTabs(3)}><h6 className="fs-16">BSC</h6></li>
                                                <li className={flatTabs === 4 ? "active" : ""} onClick={() => handleFlatTabs(4)}><h6 className="fs-16">NFT</h6></li>
                                                <li className={flatTabs === 5 ? "active" : ""} onClick={() => handleFlatTabs(5)}><h6 className="fs-16">Metaverse</h6></li>
                                                <li className={flatTabs === 6 ? "active" : ""} onClick={() => handleFlatTabs(6)}><h6 className="fs-16">Polkadot</h6></li>
                                                <li className={flatTabs === 7 ? "active" : ""} onClick={() => handleFlatTabs(7)}><h6 className="fs-16">Solana</h6></li>
                                                <li className={flatTabs === 8 ? "active" : ""} onClick={() => handleFlatTabs(8)}><h6 className="fs-16">Opensea</h6></li>
                                                <li className={flatTabs === 9 ? "active" : ""} onClick={() => handleFlatTabs(9)}><h6 className="fs-16">Makersplace</h6></li>
                                            </ul>
                                            <div className="content-tab">
                                                <div className="content-inner" style={{ display: `${flatTabs === 1 ? "flex" : "flex"}` }}>
                                                    <div className="crypto-box">
                                                        <div className="left">
                                                            <span className="icon-btc"><span className="path1" /><span className="path2" /></span>
                                                            <h6>Bitcoin</h6>
                                                            <h6 className="price">USD 53,260.20</h6>
                                                        </div>
                                                        <div className="right">
                                                            <ChatList color={1} />
                                                            <p className="sale success">
                                                                <svg width={8} height={12} viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M0.393244 5.90568C0.477403 6.06168 0.637433 6.15893 0.811488 6.15893H3.52179V11.5105C3.52179 11.7807 3.73601 12 3.99996 12C4.26392 12 4.47814 11.7807 4.47814 11.5105V6.15893H7.18844C7.36313 6.15893 7.52316 6.06168 7.60668 5.90568C7.69148 5.74969 7.68574 5.5591 7.59329 5.40832L4.40482 0.228447C4.31683 0.0861572 4.16445 0 3.99996 0C3.83547 0 3.68309 0.0861572 3.59511 0.228447L0.406633 5.40832C0.358178 5.48795 0.333313 5.57868 0.333313 5.6694C0.333313 5.75034 0.353715 5.83193 0.393244 5.90568Z" fill="white" />
                                                                </svg>
                                                                7.2%
                                                            </p>
                                                            <p className="unit">BTC</p>
                                                        </div>
                                                    </div>
                                                    <div className="crypto-box">
                                                        <div className="left">
                                                            <span className="icon-eth"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /></span>
                                                            <h6>Bitcoin</h6>
                                                            <h6 className="price">USD 53,260.20</h6>
                                                        </div>
                                                        <div className="right">
                                                            <ChatList color={1} />
                                                            <p className="sale critical">
                                                                <svg width={8} height={12} viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M7.60673 6.09432C7.52257 5.93832 7.36254 5.84107 7.18848 5.84107H4.47818L4.47818 0.48953C4.47818 0.219309 4.26396 0 4.00001 0C3.73605 0 3.52183 0.219309 3.52183 0.48953L3.52183 5.84107H0.811533C0.636839 5.84107 0.47681 5.93832 0.393288 6.09432C0.308492 6.25031 0.31423 6.4409 0.406677 6.59168L3.59515 11.7716C3.68314 11.9138 3.83551 12 4.00001 12C4.1645 12 4.31688 11.9138 4.40486 11.7716L7.59334 6.59168C7.64179 6.51205 7.66666 6.42132 7.66666 6.3306C7.66666 6.24966 7.64625 6.16807 7.60673 6.09432Z" fill="white" />
                                                                </svg>
                                                                1.8%
                                                            </p>
                                                            <p className="unit">ETH</p>
                                                        </div>
                                                    </div>
                                                    <div className="crypto-box">
                                                        <div className="left">
                                                            <span className="icon-tether"><span className="path1" /><span className="path2" /></span>
                                                            <h6>Bitcoin</h6>
                                                            <h6 className="price">USD 53,260.20</h6>
                                                        </div>
                                                        <div className="right">
                                                            <ChatList color={1} />
                                                            <p className="sale success">
                                                                <svg width={8} height={12} viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M0.393244 5.90568C0.477403 6.06168 0.637433 6.15893 0.811488 6.15893H3.52179V11.5105C3.52179 11.7807 3.73601 12 3.99996 12C4.26392 12 4.47814 11.7807 4.47814 11.5105V6.15893H7.18844C7.36313 6.15893 7.52316 6.06168 7.60668 5.90568C7.69148 5.74969 7.68574 5.5591 7.59329 5.40832L4.40482 0.228447C4.31683 0.0861572 4.16445 0 3.99996 0C3.83547 0 3.68309 0.0861572 3.59511 0.228447L0.406633 5.40832C0.358178 5.48795 0.333313 5.57868 0.333313 5.6694C0.333313 5.75034 0.353715 5.83193 0.393244 5.90568Z" fill="white" />
                                                                </svg>
                                                                3.54%
                                                            </p>
                                                            <p className="unit">USDT</p>
                                                        </div>
                                                    </div>
                                                    <div className="crypto-box">
                                                        <div className="left">
                                                            <span className="icon-bnb"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /><span className="path6" /></span>
                                                            <h6>Bitcoin</h6>
                                                            <h6 className="price">USD 53,260.20</h6>
                                                        </div>
                                                        <div className="right">
                                                            <ChatList color={1} />
                                                            <p className="sale success">
                                                                <svg width={8} height={12} viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M0.393244 5.90568C0.477403 6.06168 0.637433 6.15893 0.811488 6.15893H3.52179V11.5105C3.52179 11.7807 3.73601 12 3.99996 12C4.26392 12 4.47814 11.7807 4.47814 11.5105V6.15893H7.18844C7.36313 6.15893 7.52316 6.06168 7.60668 5.90568C7.69148 5.74969 7.68574 5.5591 7.59329 5.40832L4.40482 0.228447C4.31683 0.0861572 4.16445 0 3.99996 0C3.83547 0 3.68309 0.0861572 3.59511 0.228447L0.406633 5.40832C0.358178 5.48795 0.333313 5.57868 0.333313 5.6694C0.333313 5.75034 0.353715 5.83193 0.393244 5.90568Z" fill="white" />
                                                                </svg>
                                                                3.24%
                                                            </p>
                                                            <p className="unit">BNB</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="coin-list">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="flat-tabs1">
                                        <ul className="menu-tab1">
                                            <li className={flatTabs1 === 1 ? "active" : ""} onClick={() => handleFlatTabs1(1)}><h6 className="fs-16">Favorites</h6></li>
                                            <li className={flatTabs1 === 2 ? "active" : ""} onClick={() => handleFlatTabs1(2)}><h6 className="fs-16">Derivatives</h6></li>
                                            <li className={flatTabs1 === 3 ? "active" : ""} onClick={() => handleFlatTabs1(3)}><h6 className="fs-16">Spot</h6></li>
                                        </ul>
                                        <div className="content-tab1">
                                            <div className="content-inner" style={{ display: `${flatTabs1 === 1 ? "block" : "block"}` }}>
                                                <div className="flat-tabs2">
                                                    <ul className="menu-tab2">
                                                        <li className={flatTabs2 === 1 ? "active" : ""} onClick={() => handleFlatTabs2(1)}><h6 className="fs-16">All</h6></li>
                                                        <li className={flatTabs2 === 2 ? "active" : ""} onClick={() => handleFlatTabs2(2)}><h6 className="fs-16">Inverse Perpetual</h6></li>
                                                        <li className={flatTabs2 === 3 ? "active" : ""} onClick={() => handleFlatTabs2(3)}><h6 className="fs-16">USDT Perpetual</h6></li>
                                                        <li className={flatTabs2 === 4 ? "active" : ""} onClick={() => handleFlatTabs2(4)}><h6 className="fs-16">Inserve Futures</h6></li>
                                                    </ul>
                                                    <div className="content-tab2">
                                                        <div className="content-inner" style={{ display: `${flatTabs2 === 1 ? "block" : "block"}` }}>
                                                            <div className="coin-list__main">
                                                                <div className="flat-tabs">
                                                                    <ul className="menu-tab">
                                                                        <li className={flatTabs3 === 1 ? "active" : ""} onClick={() => handleFlatTabs3(1)}><h6 className="fs-16">Hot</h6></li>
                                                                        <li className={flatTabs3 === 2 ? "active" : ""} onClick={() => handleFlatTabs3(2)}><h6 className="fs-16">New</h6></li>
                                                                        <li className={flatTabs3 === 3 ? "active" : ""} onClick={() => handleFlatTabs3(3)}><h6 className="fs-16">DeFi</h6></li>
                                                                        <li className={flatTabs3 === 4 ? "active" : ""} onClick={() => handleFlatTabs3(4)}><h6 className="fs-16">NFT</h6></li>
                                                                    </ul>
                                                                    <div className="content-tab">
                                                                        <div className="content-inner" style={{ display: `${flatTabs3 === 1 ? "block" : "block"}` }}>
                                                                            <table className="table">
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th scope="col" />
                                                                                        <th scope="col">#</th>
                                                                                        <th scope="col">Trading Paris</th>
                                                                                        <th scope="col">Last Traded</th>
                                                                                        <th scope="col">24H Change%</th>
                                                                                        <th scope="col">24H Hight</th>
                                                                                        <th scope="col">24H Low</th>
                                                                                        <th scope="col">24H Turnover</th>
                                                                                        <th scope="col">Chart</th>
                                                                                        <th scope="col" />
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <th scope="row">
                                                                                            <IconStar />
                                                                                        </th>
                                                                                        <td>1</td>
                                                                                        <td>
                                                                                            <Link href="#"><span className="icon-btc"><span className="path1" /><span className="path2" /></span>
                                                                                                <span>Bitcoin</span>
                                                                                                <span className="unit">BTC</span></Link>
                                                                                        </td>
                                                                                        <td className="boild">2.236</td>
                                                                                        <td className="up">-3.33%</td>
                                                                                        <td className="boild">62,749.00</td>
                                                                                        <td className="boild">57,600.00</td>
                                                                                        <td className="boild">5.04B(USD)</td>
                                                                                        <td>
                                                                                            <ChatList color={2} />
                                                                                        </td>
                                                                                        <td><Link href="#" className="btn">Trade</Link></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row">
                                                                                            <IconStar />
                                                                                        </th>
                                                                                        <td>2</td>
                                                                                        <td>
                                                                                            <Link href="#"><span className="icon-eth"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /></span><span>Ethereum</span>
                                                                                                <span className="unit">ETH</span></Link>
                                                                                        </td>
                                                                                        <td className="boild">2.236</td>
                                                                                        <td className="up">-3.33%</td>
                                                                                        <td className="boild">62,749.00</td>
                                                                                        <td className="boild">57,600.00</td>
                                                                                        <td className="boild">5.04B(USD)</td>
                                                                                        <td>
                                                                                            <ChatList color={1} />
                                                                                        </td>
                                                                                        <td><Link href="#" className="btn">Trade</Link></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row">
                                                                                            <IconStar />
                                                                                        </th>
                                                                                        <td>3</td>
                                                                                        <td>
                                                                                            <Link href="#"><span className="icon-bnb"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /><span className="path6" /></span><span>BNB</span>
                                                                                                <span className="unit">BNB/USD</span></Link>
                                                                                        </td>
                                                                                        <td className="boild">2.236</td>
                                                                                        <td className="up">-3.33%</td>
                                                                                        <td className="boild">62,749.00</td>
                                                                                        <td className="boild">57,600.00</td>
                                                                                        <td className="boild">5.04B(USD)</td>
                                                                                        <td>
                                                                                            <ChatList color={1} />
                                                                                        </td>
                                                                                        <td><Link href="#" className="btn">Trade</Link></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row">
                                                                                            <IconStar />
                                                                                        </th>
                                                                                        <td>4</td>
                                                                                        <td>
                                                                                            <Link href="#"><span className="icon-tether"><span className="path1" /><span className="path2" /></span><span>Tether</span>
                                                                                                <span className="unit">USDT/USD</span></Link>
                                                                                        </td>
                                                                                        <td className="boild">2.236</td>
                                                                                        <td className="up">-3.33%</td>
                                                                                        <td className="boild">62,749.00</td>
                                                                                        <td className="boild">57,600.00</td>
                                                                                        <td className="boild">5.04B(USD)</td>
                                                                                        <td>
                                                                                            <ChatList color={2} />
                                                                                        </td>
                                                                                        <td><Link href="#" className="btn">Trade</Link></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row">
                                                                                            <IconStar />
                                                                                        </th>
                                                                                        <td>5</td>
                                                                                        <td>
                                                                                            <Link href="#"><span className="icon-sol"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /></span><span>Solana</span>
                                                                                                <span className="unit">BTC</span></Link>
                                                                                        </td>
                                                                                        <td className="boild">2.236</td>
                                                                                        <td className="up">-3.33%</td>
                                                                                        <td className="boild">62,749.00</td>
                                                                                        <td className="boild">57,600.00</td>
                                                                                        <td className="boild">5.04B(USD)</td>
                                                                                        <td>
                                                                                            <ChatList color={2} />
                                                                                        </td>
                                                                                        <td><Link href="#" className="btn">Trade</Link></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row">
                                                                                            <IconStar />
                                                                                        </th>
                                                                                        <td>6</td>
                                                                                        <td>
                                                                                            <Link href="#"><span className="icon-btc"><span className="path1" /><span className="path2" /></span>
                                                                                                <span>Solana</span>
                                                                                                <span className="unit">SOL</span></Link>
                                                                                        </td>
                                                                                        <td className="boild">2.236</td>
                                                                                        <td className="up">-3.33%</td>
                                                                                        <td className="boild">62,749.00</td>
                                                                                        <td className="boild">57,600.00</td>
                                                                                        <td className="boild">5.04B(USD)</td>
                                                                                        <td>
                                                                                            <ChatList color={1} />
                                                                                        </td>
                                                                                        <td><Link href="#" className="btn">Trade</Link></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row">
                                                                                            <IconStar />
                                                                                        </th>
                                                                                        <td>7</td>
                                                                                        <td>
                                                                                            <Link href="#"><span className="icon-btc"><span className="path1" /><span className="path2" /></span><span>XRP</span>
                                                                                                <span className="unit">XRP</span></Link>
                                                                                        </td>
                                                                                        <td className="boild">2.236</td>
                                                                                        <td className="up">-3.33%</td>
                                                                                        <td className="boild">62,749.00</td>
                                                                                        <td className="boild">57,600.00</td>
                                                                                        <td className="boild">5.04B(USD)</td>
                                                                                        <td>
                                                                                            <ChatList color={1} />
                                                                                        </td>
                                                                                        <td><Link href="#" className="btn">Trade</Link></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row">
                                                                                            <IconStar />
                                                                                        </th>
                                                                                        <td>8</td>
                                                                                        <td>
                                                                                            <Link href="#"><span className="icon-ada"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /><span className="path6" /><span className="path7" /><span className="path8" /><span className="path9" /></span><span>Cardano</span>
                                                                                                <span className="unit">ADA</span></Link>
                                                                                        </td>
                                                                                        <td className="boild">2.236</td>
                                                                                        <td className="up">-3.33%</td>
                                                                                        <td className="boild">62,749.00</td>
                                                                                        <td className="boild">57,600.00</td>
                                                                                        <td className="boild">5.04B(USD)</td>
                                                                                        <td>
                                                                                            <ChatList color={1} />
                                                                                        </td>
                                                                                        <td><Link href="#" className="btn">Trade</Link></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row">
                                                                                            <IconStar />
                                                                                        </th>
                                                                                        <td>9</td>
                                                                                        <td>
                                                                                            <Link href="#"><span className="icon-avax"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /></span><span>Avalanche</span>
                                                                                                <span className="unit">AVAX</span></Link>
                                                                                        </td>
                                                                                        <td className="boild">2.236</td>
                                                                                        <td className="up">-3.33%</td>
                                                                                        <td className="boild">62,749.00</td>
                                                                                        <td className="boild">57,600.00</td>
                                                                                        <td className="boild">5.04B(USD)</td>
                                                                                        <td>
                                                                                            <ChatList color={2} />
                                                                                        </td>
                                                                                        <td><Link href="#" className="btn">Trade</Link></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row">
                                                                                            <IconStar />
                                                                                        </th>
                                                                                        <td>10</td>
                                                                                        <td>
                                                                                            <Link href="#"><span className="icon-btc"><span className="path1" /><span className="path2" /></span>
                                                                                                <span>Bitcoin</span>
                                                                                                <span className="unit">BTC</span></Link>
                                                                                        </td>
                                                                                        <td className="boild">2.236</td>
                                                                                        <td className="up">-3.33%</td>
                                                                                        <td className="boild">62,749.00</td>
                                                                                        <td className="boild">57,600.00</td>
                                                                                        <td className="boild">5.04B(USD)</td>
                                                                                        <td>
                                                                                            <ChatList color={2} />
                                                                                        </td>
                                                                                        <td><Link href="#" className="btn">Trade</Link></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row">
                                                                                            <IconStar />
                                                                                        </th>
                                                                                        <td>11</td>
                                                                                        <td>
                                                                                            <Link href="#"><span className="icon-eth"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /></span><span>Ethereum</span>
                                                                                                <span className="unit">ETH</span></Link>
                                                                                        </td>
                                                                                        <td className="boild">2.236</td>
                                                                                        <td className="up">-3.33%</td>
                                                                                        <td className="boild">62,749.00</td>
                                                                                        <td className="boild">57,600.00</td>
                                                                                        <td className="boild">5.04B(USD)</td>
                                                                                        <td>
                                                                                            <ChatList color={1} />
                                                                                        </td>
                                                                                        <td><Link href="#" className="btn">Trade</Link></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row">
                                                                                            <IconStar />
                                                                                        </th>
                                                                                        <td>12</td>
                                                                                        <td>
                                                                                            <Link href="#"><span className="icon-bnb"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /><span className="path6" /></span><span>BNB</span>
                                                                                                <span className="unit">BNB/USD</span></Link>
                                                                                        </td>
                                                                                        <td className="boild">2.236</td>
                                                                                        <td className="up">-3.33%</td>
                                                                                        <td className="boild">62,749.00</td>
                                                                                        <td className="boild">57,600.00</td>
                                                                                        <td className="boild">5.04B(USD)</td>
                                                                                        <td>
                                                                                            <ChatList color={1} />
                                                                                        </td>
                                                                                        <td><Link href="#" className="btn">Trade</Link></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row">
                                                                                            <IconStar />
                                                                                        </th>
                                                                                        <td>13</td>
                                                                                        <td>
                                                                                            <Link href="#"><span className="icon-tether"><span className="path1" /><span className="path2" /></span><span>Tether</span>
                                                                                                <span className="unit">USDT/USD</span></Link>
                                                                                        </td>
                                                                                        <td className="boild">2.236</td>
                                                                                        <td className="up">-3.33%</td>
                                                                                        <td className="boild">62,749.00</td>
                                                                                        <td className="boild">57,600.00</td>
                                                                                        <td className="boild">5.04B(USD)</td>
                                                                                        <td>
                                                                                            <ChatList color={2} />
                                                                                        </td>
                                                                                        <td><Link href="#" className="btn">Trade</Link></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row">
                                                                                            <IconStar />
                                                                                        </th>
                                                                                        <td>14</td>
                                                                                        <td>
                                                                                            <Link href="#"><span className="icon-sol"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /></span><span>Solana</span>
                                                                                                <span className="unit">BTC</span></Link>
                                                                                        </td>
                                                                                        <td className="boild">2.236</td>
                                                                                        <td className="up">-3.33%</td>
                                                                                        <td className="boild">62,749.00</td>
                                                                                        <td className="boild">57,600.00</td>
                                                                                        <td className="boild">5.04B(USD)</td>
                                                                                        <td>
                                                                                            <ChatList color={2} />
                                                                                        </td>
                                                                                        <td><Link href="#" className="btn">Trade</Link></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row">
                                                                                            <IconStar />
                                                                                        </th>
                                                                                        <td>15</td>
                                                                                        <td>
                                                                                            <Link href="#"><span className="icon-btc"><span className="path1" /><span className="path2" /></span>
                                                                                                <span>Solana</span>
                                                                                                <span className="unit">SOL</span></Link>
                                                                                        </td>
                                                                                        <td className="boild">2.236</td>
                                                                                        <td className="up">-3.33%</td>
                                                                                        <td className="boild">62,749.00</td>
                                                                                        <td className="boild">57,600.00</td>
                                                                                        <td className="boild">5.04B(USD)</td>
                                                                                        <td>
                                                                                            <ChatList color={1} />
                                                                                        </td>
                                                                                        <td><Link href="#" className="btn">Trade</Link></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row">
                                                                                            <IconStar />
                                                                                        </th>
                                                                                        <td>16</td>
                                                                                        <td>
                                                                                            <Link href="#"><span className="icon-btc"><span className="path1" /><span className="path2" /></span><span>XRP</span>
                                                                                                <span className="unit">XRP</span></Link>
                                                                                        </td>
                                                                                        <td className="boild">2.236</td>
                                                                                        <td className="up">-3.33%</td>
                                                                                        <td className="boild">62,749.00</td>
                                                                                        <td className="boild">57,600.00</td>
                                                                                        <td className="boild">5.04B(USD)</td>
                                                                                        <td>
                                                                                            <ChatList color={1} />
                                                                                        </td>
                                                                                        <td><Link href="#" className="btn">Trade</Link></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row">
                                                                                            <IconStar />
                                                                                        </th>
                                                                                        <td>17</td>
                                                                                        <td>
                                                                                            <Link href="#"><span className="icon-ada"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /><span className="path6" /><span className="path7" /><span className="path8" /><span className="path9" /></span><span>Cardano</span>
                                                                                                <span className="unit">ADA</span></Link>
                                                                                        </td>
                                                                                        <td className="boild">2.236</td>
                                                                                        <td className="up">-3.33%</td>
                                                                                        <td className="boild">62,749.00</td>
                                                                                        <td className="boild">57,600.00</td>
                                                                                        <td className="boild">5.04B(USD)</td>
                                                                                        <td>
                                                                                            <ChatList color={1} />
                                                                                        </td>
                                                                                        <td><Link href="#" className="btn">Trade</Link></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row">
                                                                                            <IconStar />
                                                                                        </th>
                                                                                        <td>18</td>
                                                                                        <td>
                                                                                            <Link href="#"><span className="icon-avax"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /></span><span>Avalanche</span>
                                                                                                <span className="unit">AVAX</span></Link>
                                                                                        </td>
                                                                                        <td className="boild">2.236</td>
                                                                                        <td className="up">-3.33%</td>
                                                                                        <td className="boild">62,749.00</td>
                                                                                        <td className="boild">57,600.00</td>
                                                                                        <td className="boild">5.04B(USD)</td>
                                                                                        <td>
                                                                                            <ChatList color={2} />
                                                                                        </td>
                                                                                        <td><Link href="#" className="btn">Trade</Link></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row">
                                                                                            <IconStar />
                                                                                        </th>
                                                                                        <td>19</td>
                                                                                        <td>
                                                                                            <Link href="#"><span className="icon-btc"><span className="path1" /><span className="path2" /></span>
                                                                                                <span>Bitcoin</span>
                                                                                                <span className="unit">BTC</span></Link>
                                                                                        </td>
                                                                                        <td className="boild">2.236</td>
                                                                                        <td className="up">-3.33%</td>
                                                                                        <td className="boild">62,749.00</td>
                                                                                        <td className="boild">57,600.00</td>
                                                                                        <td className="boild">5.04B(USD)</td>
                                                                                        <td>
                                                                                            <ChatList color={2} />
                                                                                        </td>
                                                                                        <td><Link href="#" className="btn">Trade</Link></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row">
                                                                                            <IconStar />
                                                                                        </th>
                                                                                        <td>20</td>
                                                                                        <td>
                                                                                            <Link href="#"><span className="icon-ada"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /><span className="path6" /><span className="path7" /><span className="path8" /><span className="path9" /></span><span>Cardano</span>
                                                                                                <span className="unit">ADA</span></Link>
                                                                                        </td>
                                                                                        <td className="boild">2.236</td>
                                                                                        <td className="up">-3.33%</td>
                                                                                        <td className="boild">62,749.00</td>
                                                                                        <td className="boild">57,600.00</td>
                                                                                        <td className="boild">5.04B(USD)</td>
                                                                                        <td>
                                                                                            <ChatList color={1} />
                                                                                        </td>
                                                                                        <td><Link href="#" className="btn">Trade</Link></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row">
                                                                                            <IconStar />
                                                                                        </th>
                                                                                        <td>21</td>
                                                                                        <td>
                                                                                            <Link href="#"><span className="icon-avax"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /></span><span>Avalanche</span>
                                                                                                <span className="unit">AVAX</span></Link>
                                                                                        </td>
                                                                                        <td className="boild">2.236</td>
                                                                                        <td className="up">-3.33%</td>
                                                                                        <td className="boild">62,749.00</td>
                                                                                        <td className="boild">57,600.00</td>
                                                                                        <td className="boild">5.04B(USD)</td>
                                                                                        <td>
                                                                                            <ChatList color={2} />
                                                                                        </td>
                                                                                        <td><Link href="#" className="btn">Trade</Link></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="blog">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="block-text center">
                                        <h3 className="heading">Learn And Earn</h3>
                                        <p className="desc">
                                            Stacks is a production-ready library of stackable content blocks
                                            built in React Native.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="blog-box">
                                        <div className="box-image">
                                            <img src="/assets/images/blog/blog-01.jpg" alt="" />
                                            <div className="wrap-video">
                                                <VideoPopup />
                                            </div>
                                        </div>
                                        <div className="box-content">
                                            <Link href="#" className="category btn-action">learn &amp; earn</Link>
                                            <Link href="#" className="title">Learn about UI8 coin and earn an All-Access Pass</Link>
                                            <div className="meta">
                                                <Link href="#" className="name"><span />Floyd Buckridge</Link>
                                                <Link href="#" className="time">Feb 03, 2021</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="blog-box">
                                        <div className="box-image">
                                            <img src="/assets/images/blog/blog-02.jpg" alt="" />
                                            <div className="wrap-video">
                                                <VideoPopup />
                                            </div>
                                        </div>
                                        <div className="box-content">
                                            <Link href="#" className="category btn-action">learn &amp; earn</Link>
                                            <Link href="#" className="title">Learn about UI8 coin and earn an All-Access Pass</Link>
                                            <div className="meta">
                                                <Link href="#" className="name"><span />Floyd Buckridge</Link>
                                                <Link href="#" className="time">Feb 03, 2021</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="blog-box">
                                        <div className="box-image">
                                            <img src="/assets/images/blog/blog-02.jpg" alt="" />
                                            <div className="wrap-video">
                                                <VideoPopup />
                                            </div>
                                        </div>
                                        <div className="box-content">
                                            <Link href="#" className="category btn-action">learn &amp; earn</Link>
                                            <Link href="#" className="title">Learn about UI8 coin and earn an All-Access Pass</Link>
                                            <div className="meta">
                                                <Link href="#" className="name"><span />Floyd Buckridge</Link>
                                                <Link href="#" className="time">Feb 03, 2021</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="button-loadmore">
                                        <Link href="#">
                                            <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.00001 0.333008C6.63182 0.333008 6.33334 0.631485 6.33334 0.999674V2.99967C6.33334 3.36786 6.63182 3.66634 7.00001 3.66634C7.3682 3.66634 7.66668 3.36786 7.66668 2.99967V0.999674C7.66668 0.631485 7.3682 0.333008 7.00001 0.333008Z" fill="#23262F" />
                                                <path d="M7.00001 10.333C6.63182 10.333 6.33334 10.6315 6.33334 10.9997V12.9997C6.33334 13.3679 6.63182 13.6663 7.00001 13.6663C7.3682 13.6663 7.66668 13.3679 7.66668 12.9997V10.9997C7.66668 10.6315 7.3682 10.333 7.00001 10.333Z" fill="#23262F" />
                                                <path d="M13 6.33301C13.3682 6.33301 13.6667 6.63148 13.6667 6.99967C13.6667 7.36786 13.3682 7.66634 13 7.66634H11C10.6318 7.66634 10.3333 7.36786 10.3333 6.99967C10.3333 6.63148 10.6318 6.33301 11 6.33301H13Z" fill="#23262F" />
                                                <path d="M3.66668 6.99967C3.66668 6.63148 3.3682 6.33301 3.00001 6.33301H1.00001C0.63182 6.33301 0.333344 6.63148 0.333344 6.99967C0.333343 7.36786 0.63182 7.66634 1.00001 7.66634H3.00001C3.3682 7.66634 3.66668 7.36786 3.66668 6.99967Z" fill="#23262F" />
                                                <path d="M10.7713 2.28569C11.0316 2.02535 11.4537 2.02535 11.7141 2.28569C11.9744 2.54604 11.9744 2.96815 11.7141 3.2285L10.2999 4.64272C10.0395 4.90307 9.61742 4.90307 9.35707 4.64272C9.09672 4.38237 9.09672 3.96026 9.35707 3.69991L10.7713 2.28569Z" fill="#23262F" />
                                                <path d="M4.64296 9.35666C4.38262 9.09631 3.9605 9.09631 3.70016 9.35666L2.28594 10.7709C2.02559 11.0312 2.02559 11.4533 2.28594 11.7137C2.54629 11.974 2.9684 11.974 3.22875 11.7137L4.64296 10.2995C4.90331 10.0391 4.90331 9.61701 4.64296 9.35666Z" fill="#23262F" />
                                                <path d="M11.7141 10.7709C11.9744 11.0313 11.9744 11.4534 11.7141 11.7138C11.4537 11.9741 11.0316 11.9741 10.7713 11.7138L9.35705 10.2995C9.0967 10.0392 9.0967 9.61708 9.35705 9.35673C9.6174 9.09638 10.0395 9.09638 10.2999 9.35673L11.7141 10.7709Z" fill="#23262F" />
                                                <path d="M4.64303 4.64263C4.90338 4.38228 4.90338 3.96017 4.64303 3.69982L3.22881 2.28561C2.96846 2.02526 2.54635 2.02526 2.286 2.28561C2.02565 2.54596 2.02565 2.96807 2.286 3.22841L3.70022 4.64263C3.96057 4.90298 4.38268 4.90298 4.64303 4.64263Z" fill="#23262F" />
                                            </svg>
                                            Load more</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
            </Provider>
        </>
    )
}