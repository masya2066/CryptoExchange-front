
'use client'
import Link from "next/link"
import {useEffect, useState} from "react"
import ChatList from "../chart/ChatList"
import IconStar from "../elements/IconStar"
import cryptoMethods from "@/methods/crypto";
export default function Coinlist1() {
    const [flatTabs, setFlatTabs] = useState(1)
    const [isBtc, setIsBtc] = useState({
        "usd_price": 0,
        "market_cap": 0,
        "change_24h": 0
    })
    const [isEth, setIsEth] = useState({
        "usd_price": 0,
        "market_cap": 0,
        "change_24h": 0
    })
    const [isUsdt, setIsUsdt] = useState({
        "usd_price": 0,
        "market_cap": 0,
        "change_24h": 0
    })
    const [isRipple, setIsRipple] = useState({
        "usd_price": 0,
        "market_cap": 0,
        "change_24h": 0
    })
    const [isSolana, setIsSolana] = useState({
        "usd_price": 0,
        "market_cap": 0,
        "change_24h": 0
    })
    const [isBnb, setIsBnb] = useState({
        "usd_price": 0,
        "market_cap": 0,
        "change_24h": 0
    })
    const [isAvalanche, setIsAvalanche] = useState({
        "usd_price": 0,
        "market_cap": 0,
        "change_24h": 0
    })
    const [isCardano, setIsCardano] = useState({
        "usd_price": 0,
        "market_cap": 0,
        "change_24h": 0
    })
    const handleFlatTabs = (index) => {
        setFlatTabs(index)
    }

    useEffect(() => {
        cryptoMethods.getBtcInfo()
            .then(resBtc => {
                if (resBtc.data && resBtc.status === 200) {
                    const formattedData = {
                        usd_price: resBtc.data.usd_price.toLocaleString(),
                        market_cap: resBtc.data.market_cap ? resBtc.data.market_cap.toLocaleString() : "N/A", // Check if market_cap exists
                        change_24h: resBtc.data.change_24h !== undefined ? resBtc.data.change_24h.toFixed(2) : "N/A" // Check if change_24h exists
                    };
                    setIsBtc(formattedData)
                }
            })
        cryptoMethods.getEthInfo()
            .then(resEth => {
                if (resEth.data && resEth.status === 200) {
                    const formattedData = {
                        usd_price: resEth.data.usd_price.toLocaleString(),
                        market_cap: resEth.data.market_cap ? resEth.data.market_cap.toLocaleString() : "N/A", // Check if market_cap exists
                        change_24h: resEth.data.change_24h !== undefined ? resEth.data.change_24h.toFixed(2) : "N/A" // Check if change_24h exists
                    };
                    setIsEth(formattedData)
                }
            })
        cryptoMethods.getUsdtInfo()
            .then(resUsdt => {
                if (resUsdt.data && resUsdt.status === 200) {
                    const formattedData = {
                        usd_price: resUsdt.data.usd_price.toLocaleString(),
                        market_cap: resUsdt.data.market_cap ? resUsdt.data.market_cap.toLocaleString() : "N/A", // Check if market_cap exists
                        change_24h: resUsdt.data.change_24h !== undefined ? resUsdt.data.change_24h.toFixed(2) : "N/A" // Check if change_24h exists
                    };
                    setIsUsdt(formattedData)
                }
            })
    }, []);

    return (
        <>

            <section className="coin-list">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {/*<div className="block-text">*/}
                            {/*    <h3 className="heading">Market Update</h3>*/}
                            {/*</div>*/}
                            <div className="coin-list__main">
                                <div className="flat-tabs">
                                    <ul className="menu-tab">
                                        <li className={flatTabs === 1 ? "active" : ""} onClick={() => handleFlatTabs(1)}>
                                            <h6 className="fs-16">Coins</h6>
                                        </li>
                                    </ul>
                                    <div className="content-tab">
                                        <div className="content-inner" style={{ display: `${flatTabs === 1 ? "block" : "none"}` }}>
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col" />
                                                        <th scope="col">#</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Last Price</th>
                                                        <th scope="col">24h %</th>
                                                        <th scope="col">Market Cap</th>
                                                        <th scope="col">Last 7 Days</th>
                                                        <th scope="col" />
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row"><IconStar /></th>
                                                        <td>1</td>
                                                        <td>
                                                            <Link href="#"><span className="icon-btc"><span className="path1" /><span className="path2" /></span>
                                                                <span>Bitcoin</span>
                                                                <span className="unit">BTC</span></Link>
                                                        </td>
                                                        <td className="boild">${isBtc.usd_price}</td>
                                                        <td className="up">{isBtc.change_24h > 0 ? "+"+isBtc.change_24h : "-" + isBtc.change_24h}%</td>
                                                        <td className="boild">${isBtc.market_cap}</td>
                                                        <td>
                                                            <ChatList color={isBtc.change_24h > 0 ? 1 : 2} />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><IconStar/></th>
                                                        <td>2</td>
                                                        <td>
                                                            <Link href="#"><span className="icon-eth"><span
                                                                className="path1"/><span className="path2"/><span
                                                                className="path3"/><span
                                                                className="path4"/></span><span>Ethereum</span>
                                                                <span className="unit">ETH</span></Link>
                                                        </td>
                                                        <td className="boild">${isEth.usd_price}</td>
                                                        <td className="up">{isEth.change_24h > 0 ? "+" + isEth.change_24h : "-" + isBtc.change_24h}%</td>
                                                        <td className="boild">${isEth.market_cap}</td>
                                                        <td>
                                                            <ChatList color={isEth.change_24h > 0 ? 1 : 2}/>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><IconStar/></th>
                                                        <td>3</td>
                                                        <td>
                                                            <Link href="#"><span className="icon-bnb"><span
                                                                className="path1"/><span className="path2"/><span
                                                                className="path3"/><span className="path4"/><span
                                                                className="path5"/><span className="path6"/></span><span>BNB</span>
                                                                <span className="unit">BNB/USD</span></Link>
                                                        </td>
                                                        <td className="boild">$56,623.54</td>
                                                        <td className="down">-3.75%</td>
                                                        <td className="boild">$880,423,640,582</td>
                                                        <td>
                                                            <ChatList color={2} />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><IconStar /></th>
                                                        <td>4</td>
                                                        <td>
                                                            <Link href="#"><span className="icon-tether"><span className="path1" /><span className="path2" /></span><span>Tether</span>
                                                                <span className="unit">USDT/USD</span></Link>
                                                        </td>
                                                        <td className="boild">$56,623.54</td>
                                                        <td className="up">+1.45%</td>
                                                        <td className="boild">$880,423,640,582</td>
                                                        <td>
                                                            <ChatList color={1} />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><IconStar /></th>
                                                        <td>5</td>
                                                        <td>
                                                            <Link href="#"><span className="icon-sol"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /></span><span>Solana</span>
                                                                <span className="unit">SOL</span></Link>
                                                        </td>
                                                        <td className="boild">$56,623.54</td>
                                                        <td className="up">+1.45%</td>
                                                        <td className="boild">$880,423,640,582</td>
                                                        <td>
                                                            <ChatList color={1} />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><IconStar /></th>
                                                        <td>6</td>
                                                        <td>
                                                            <Link href="#"><span className="icon-btc"><span className="path1" /><span className="path2" /></span><span>XRP</span> <span className="unit">XRP</span></Link>
                                                        </td>
                                                        <td className="boild">$56,623.54</td>
                                                        <td className="down">-2.22%</td>
                                                        <td className="boild">$880,423,640,582</td>
                                                        <td>
                                                            <ChatList color={2} />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><IconStar /></th>
                                                        <td>7</td>
                                                        <td>
                                                            <Link href="#"><span className="icon-ada"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /><span className="path6" /><span className="path7" /><span className="path8" /><span className="path9" /></span><span>Cardano</span>
                                                                <span className="unit">ADA</span></Link>
                                                        </td>
                                                        <td className="boild">$56,623.54</td>
                                                        <td className="up">+0.8%</td>
                                                        <td className="boild">$880,423,640,582</td>
                                                        <td>
                                                            <ChatList color={1} />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><IconStar /></th>
                                                        <td>8</td>
                                                        <td>
                                                            <Link href="#"><span className="icon-avax"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /></span><span>Avalanche</span>
                                                                <span className="unit">AVAX</span></Link>
                                                        </td>
                                                        <td className="boild">$56,623.54</td>
                                                        <td className="up">+1.41%</td>
                                                        <td className="boild">$880,423,640,582</td>
                                                        <td>
                                                            <ChatList color={1} />
                                                        </td>
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
            </section>
        </>
    )
}
