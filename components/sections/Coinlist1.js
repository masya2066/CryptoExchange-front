
'use client'
import Link from "next/link"
import {useEffect, useState} from "react"
import ChatList from "../chart/ChatList"
import IconStar from "../elements/IconStar"
import cryptoMethods from "@/methods/crypto";
import {defaultCurrecy} from "@/components/models/cryptoModels";

export default function Coinlist1() {
    const [flatTabs, setFlatTabs] = useState(1)
    const [isBtc, setIsBtc] = useState(defaultCurrecy)
    const [isEth, setIsEth] = useState(defaultCurrecy)
    const [isUsdt, setIsUsdt] = useState(defaultCurrecy)
    const [isRipple, setIsRipple] = useState(defaultCurrecy)
    const [isSolana, setIsSolana] = useState(defaultCurrecy)
    const [isBnb, setIsBnb] = useState(defaultCurrecy)
    const [isAvalanche, setIsAvalanche] = useState(defaultCurrecy)
    const [isCardano, setIsCardano] = useState(defaultCurrecy)
    const handleFlatTabs = (index) => {
        setFlatTabs(index)
    }

    useEffect(() => {
        cryptoMethods.getCurrenciesInfo()
            .then(res => {
                if (res.data) {
                    res.data.forEach(currency => {
                        if (currency.id === "bitcoin") setIsBtc(currency)
                        if (currency.id === "ethereum") setIsEth(currency)
                        if (currency.id === "tether") setIsUsdt(currency)
                        if (currency.id === "solana") setIsSolana(currency)
                        if (currency.id === "binancecoin") setIsBnb(currency)
                        if (currency.id === "ripple") setIsRipple(currency)
                        if (currency.id === "cardano") setIsCardano(currency)
                        if (currency.id === "avalanche-2") setIsAvalanche(currency)
                    })
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
                                                        <td className="boild">${isBtc.market_data.current_price.usd.toLocaleString('en-US')}</td>
                                                        <td className={isBtc.market_data.price_change_percentage_24h > 0 ? "up" : "down"}>
                                                            {isBtc.market_data.price_change_percentage_24h.toFixed(2)}%
                                                        </td>
                                                        <td className="boild">${isBtc.market_data.market_cap.usd.toLocaleString('en-US')}</td>
                                                        <td>
                                                            <ChatList color={isBtc.market_data.price_change_percentage_7dnp  > 0 ? 1 : 2} />
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
                                                        <td className="boild">${isEth.market_data.current_price.usd.toLocaleString('en-US')}</td>
                                                        <td className={isEth.market_data.price_change_percentage_24h > 0 ? "up" : "down"}>
                                                            {isEth.market_data.price_change_percentage_24h.toFixed(2)}%
                                                        </td>
                                                        <td className="boild">${isEth.market_data.market_cap.usd.toLocaleString('en-US')}</td>
                                                        <td>
                                                            <ChatList
                                                                color={isEth.market_data.price_change_percentage_7d > 0 ? 1 : 2}/>
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
                                                        <td className="boild">${isBnb.market_data.current_price.usd.toLocaleString('en-US')}</td>
                                                        <td className={isBnb.market_data.price_change_percentage_24h > 0 ? "up" : "down"}>
                                                            {isBnb.market_data.price_change_percentage_24h.toFixed(2)}%
                                                        </td>
                                                        <td className="boild">${isBnb.market_data.market_cap.usd.toLocaleString('en-US')}</td>
                                                        <td>
                                                            <ChatList
                                                                color={isBnb.market_data.price_change_percentage_7d > 0 ? 1 : 2}/>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><IconStar /></th>
                                                        <td>4</td>
                                                        <td>
                                                            <Link href="#"><span className="icon-tether"><span className="path1" /><span className="path2" /></span><span>Tether</span>
                                                                <span className="unit">USDT/USD</span></Link>
                                                        </td>
                                                        <td className="boild">${isUsdt.market_data.current_price.usd.toLocaleString('en-US')}</td>
                                                        <td className={isUsdt.market_data.price_change_percentage_24h > 0 ? "up" : "down"}>
                                                            {isUsdt.market_data.price_change_percentage_24h.toFixed(2)}%
                                                        </td>
                                                        <td className="boild">${isUsdt.market_data.market_cap.usd.toLocaleString('en-US')}</td>
                                                        <td>
                                                            <ChatList
                                                                color={isUsdt.market_data.price_change_percentage_7d > 0 ? 1 : 2}/>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><IconStar /></th>
                                                        <td>5</td>
                                                        <td>
                                                            <Link href="#"><span className="icon-sol"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /></span><span>Solana</span>
                                                                <span className="unit">SOL</span></Link>
                                                        </td>
                                                        <td className="boild">${isSolana.market_data.current_price.usd.toLocaleString('en-US')}</td>
                                                        <td className={isSolana.market_data.price_change_percentage_24h > 0 ? "up" : "down"}>
                                                            {isSolana.market_data.price_change_percentage_24h.toFixed(2)}%
                                                        </td>
                                                        <td className="boild">${isSolana.market_data.market_cap.usd.toLocaleString('en-US')}</td>
                                                        <td>
                                                            <ChatList
                                                                color={isSolana.market_data.price_change_percentage_7d > 0 ? 1 : 2}/>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><IconStar/></th>
                                                        <td>6</td>
                                                        <td>
                                                            <Link href="#"><span className="icon-btc"><span
                                                                className="path1"/><span
                                                                className="path2"/></span><span>XRP</span> <span
                                                                className="unit">XRP</span></Link>
                                                        </td>
                                                        <td className="boild">${isRipple.market_data.current_price.usd.toLocaleString('en-US')}</td>
                                                        <td className={isRipple.market_data.price_change_percentage_24h > 0 ? "up" : "down"}>
                                                            {isRipple.market_data.price_change_percentage_24h.toFixed(2)}%
                                                        </td>
                                                        <td className="boild">${isRipple.market_data.market_cap.usd.toLocaleString('en-US')}</td>
                                                        <td>
                                                            <ChatList
                                                                color={isRipple.market_data.price_change_percentage_7d > 0 ? 1 : 2}/>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><IconStar/></th>
                                                        <td>7</td>
                                                        <td>
                                                            <Link href="#"><span className="icon-ada"><span
                                                                className="path1"/><span className="path2"/><span
                                                                className="path3"/><span className="path4"/><span
                                                                className="path5"/><span className="path6"/><span
                                                                className="path7"/><span className="path8"/><span
                                                                className="path9"/></span><span>Cardano</span>
                                                                <span className="unit">ADA</span></Link>
                                                        </td>
                                                        <td className="boild">${isCardano.market_data.current_price.usd.toLocaleString('en-US')}</td>
                                                        <td className={isCardano.market_data.price_change_percentage_24h > 0 ? "up" : "down"}>
                                                            {isCardano.market_data.price_change_percentage_24h.toFixed(2)}%
                                                        </td>
                                                        <td className="boild">${isCardano.market_data.market_cap.usd.toLocaleString('en-US')}</td>
                                                        <td>
                                                            <ChatList
                                                                color={isCardano.market_data.price_change_percentage_7d > 0 ? 1 : 2}/>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><IconStar /></th>
                                                        <td>8</td>
                                                        <td>
                                                            <Link href="#"><span className="icon-avax"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /></span><span>Avalanche</span>
                                                                <span className="unit">AVAX</span></Link>
                                                        </td>
                                                        <td className="boild">${isAvalanche.market_data.current_price.usd.toLocaleString('en-US')}</td>
                                                        <td className={isAvalanche.market_data.price_change_percentage_24h > 0 ? "up" : "down"}>
                                                            {isAvalanche.market_data.price_change_percentage_24h.toFixed(2)}%
                                                        </td>
                                                        <td className="boild">${isAvalanche.market_data.market_cap.usd.toLocaleString('en-US')}</td>
                                                        <td>
                                                            <ChatList
                                                                color={isAvalanche.market_data.price_change_percentage_7d > 0 ? 1 : 2}/>
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
