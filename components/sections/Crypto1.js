
'use client'
import Link from "next/link"
import {useEffect, useState} from "react"
import cryptoMethods from "@/methods/crypto";
import {defaultCurrecy} from "@/components/models/cryptoModels";
export default function Crypto1() {
    const [isBtc, setIsBtc] = useState(defaultCurrecy)
    const [isEth, setIsEth] = useState(defaultCurrecy)
    const [isUsdt, setIsUsdt] = useState(defaultCurrecy)

    const [flatTabs, setFlatTabs] = useState(1)
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
                    })
                }
            })
    }, []);

    return (
        <>

            <section className="crypto" data-aos="fade-up" data-aos-duration={1000}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="crypto__main">
                                <div className="flat-tabs">
                                    <ul className="menu-tab">
                                        <li className={flatTabs === 1 ? "active" : ""} onClick={() => handleFlatTabs(1)}>
                                            <h6 className="fs-16">Crypto</h6>
                                        </li>
                                        {/*<li className={flatTabs === 2 ? "active" : ""} onClick={() => handleFlatTabs(2)}>*/}
                                        {/*    <h6 className="fs-16">DeFi</h6>*/}
                                        {/*</li>*/}
                                        {/*<li className={flatTabs === 3 ? "active" : ""} onClick={() => handleFlatTabs(3)}>*/}
                                        {/*    <h6 className="fs-16">BSC</h6>*/}
                                        {/*</li>*/}
                                        {/*<li className={flatTabs === 4 ? "active" : ""} onClick={() => handleFlatTabs(4)}>*/}
                                        {/*    <h6 className="fs-16">NFT</h6>*/}
                                        {/*</li>*/}
                                        {/*<li className={flatTabs === 5 ? "active" : ""} onClick={() => handleFlatTabs(5)}>*/}
                                        {/*    <h6 className="fs-16">Metaverse</h6>*/}
                                        {/*</li>*/}
                                        {/*<li className={flatTabs === 6 ? "active" : ""} onClick={() => handleFlatTabs(6)}>*/}
                                        {/*    <h6 className="fs-16">Polkadot</h6>*/}
                                        {/*</li>*/}
                                        {/*<li className={flatTabs === 7 ? "active" : ""} onClick={() => handleFlatTabs(7)}>*/}
                                        {/*    <h6 className="fs-16">Solana</h6>*/}
                                        {/*</li>*/}
                                        {/*<li className={flatTabs === 8 ? "active" : ""} onClick={() => handleFlatTabs(8)}>*/}
                                        {/*    <h6 className="fs-16">Opensea</h6>*/}
                                        {/*</li>*/}
                                        {/*<li className={flatTabs === 9 ? "active" : ""} onClick={() => handleFlatTabs(9)}>*/}
                                        {/*    <h6 className="fs-16">Makersplace</h6>*/}
                                        {/*</li>*/}
                                    </ul>
                                    <div className="content-tab">
                                        <div className="content-inner" style={{ display: `${flatTabs === 1 ? "flex" : "none"}` }}>
                                            <div className="crypto-box">
                                                <div className="top">
                                                    <Link href="#"><span className="icon-btc"><span className="path1" /><span className="path2" /></span>
                                                        <span>Bitcoin</span>
                                                        <span className="unit">BTC/USD</span></Link>
                                                </div>
                                                <h6 className="price">USD {isBtc.market_data.current_price.usd.toLocaleString('en-US')}</h6>
                                                <div className="bottom">
                                                    <p>{isBtc.market_data.current_price.usd.toLocaleString('en-US')}</p>
                                                    <p className={isBtc.market_data.price_change_percentage_24h.toFixed(2) > 0 ?
                                                        "sale success" : "sale critical"}>
                                                        {isBtc.market_data.price_change_percentage_24h.toFixed(2)}%</p>
                                                </div>
                                            </div>
                                            <div className="crypto-box">
                                                <div className="top">
                                                    <Link href="#"><span className="icon-eth"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /></span><span>Ethereum</span>
                                                        <span className="unit">ETH/USD</span></Link>
                                                </div>
                                                <h6 className="price">USD {isEth.market_data.current_price.usd.toLocaleString('en-US')}</h6>
                                                <div className="bottom">
                                                    <p>{isEth.market_data.current_price.usd.toLocaleString('en-US')}</p>
                                                    <p className={isEth.market_data.price_change_percentage_24h.toFixed(2) > 0 ?
                                                        "sale success" : "sale critical"}>
                                                        {isEth.market_data.price_change_percentage_24h.toFixed(2)}%</p>
                                                </div>
                                            </div>
                                            <div className="crypto-box">
                                                <div className="top">
                                                    <Link href="#"><span className="icon-tether"><span className="path1" /><span className="path2" /></span><span>Tether</span>
                                                        <span className="unit">USDT/USD</span></Link>
                                                </div>
                                                <h6 className="price">USD {isUsdt.market_data.current_price.usd.toLocaleString('en-US')}</h6>
                                                <div className="bottom">
                                                    <p>{isUsdt.market_data.current_price.usd.toLocaleString('en-US')}</p>
                                                    <p className={isUsdt.market_data.price_change_percentage_24h.toFixed(2) > 0 ?
                                                        "sale success" : "sale critical"}>
                                                        {isUsdt.market_data.price_change_percentage_24h.toFixed(2)}%</p>
                                                </div>
                                            </div>
                                            <div className="crypto-box active">
                                                <div className="top">
                                                    <Link href="#"><img style={{marginLeft: -6, marginRight: 5, width: 30, height: 30}} src={"assets/images/icon/soli-icon.webp"}/><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /><span className="path6" /><span>SOLI</span> <span className="unit">SOLI/USD</span></Link>
                                                </div>
                                                <h6 className="price">USD 0.56</h6>
                                                <div className="bottom">
                                                    <p>0.56</p>
                                                    <div className="sale success">0.08%</div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<div className="content-inner" style={{ display: `${flatTabs === 2 ? "flex" : "none"}` }}>*/}
                                        {/*    <div className="crypto-box">*/}
                                        {/*        <div className="top">*/}
                                        {/*            <Link href="#"><span className="icon-btc"><span className="path1" /><span className="path2" /></span>*/}
                                        {/*                <span>Bitcoin</span>*/}
                                        {/*                <span className="unit">BTC/USD</span></Link>*/}
                                        {/*        </div>*/}
                                        {/*        <h6 className="price">USD 46,168.95</h6>*/}
                                        {/*        <div className="bottom">*/}
                                        {/*            <p>36,641.20</p>*/}
                                        {/*            <p className="sale critical">-0.79%</p>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="crypto-box active">*/}
                                        {/*        <div className="top">*/}
                                        {/*            <Link href="#"><span className="icon-eth"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /></span><span>Ethereum</span>*/}
                                        {/*                <span className="unit">ETH/USD</span></Link>*/}
                                        {/*        </div>*/}
                                        {/*        <h6 className="price">USD $3,480.04</h6>*/}
                                        {/*        <div className="bottom">*/}
                                        {/*            <p>36,641.20</p>*/}
                                        {/*            <div className="sale success">+10.55%</div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="crypto-box">*/}
                                        {/*        <div className="top">*/}
                                        {/*            <Link href="#"><span className="icon-tether"><span className="path1" /><span className="path2" /></span><span>Tether</span>*/}
                                        {/*                <span className="unit">USDT/USD</span></Link>*/}
                                        {/*        </div>*/}
                                        {/*        <h6 className="price">USD 1.00</h6>*/}
                                        {/*        <div className="bottom">*/}
                                        {/*            <p>36,641.20</p>*/}
                                        {/*            <div className="sale critical">-0.01%%</div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="crypto-box">*/}
                                        {/*        <div className="top">*/}
                                        {/*            <Link href="#"><span className="icon-bnb"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /><span className="path6" /></span><span>BNB</span> <span className="unit">BNB/USD</span></Link>*/}
                                        {/*        </div>*/}
                                        {/*        <h6 className="price">USD 443.56</h6>*/}
                                        {/*        <div className="bottom">*/}
                                        {/*            <p>36,641.20</p>*/}
                                        {/*            <div className="sale critical">-1.24%</div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        {/*<div className="content-inner" style={{ display: `${flatTabs === 3 ? "flex" : "none"}` }}>*/}
                                        {/*    <div className="crypto-box">*/}
                                        {/*        <div className="top">*/}
                                        {/*            <Link href="#"><span className="icon-btc"><span className="path1" /><span className="path2" /></span>*/}
                                        {/*                <span>Bitcoin</span>*/}
                                        {/*                <span className="unit">BTC/USD</span></Link>*/}
                                        {/*        </div>*/}
                                        {/*        <h6 className="price">USD 46,168.95</h6>*/}
                                        {/*        <div className="bottom">*/}
                                        {/*            <p>36,641.20</p>*/}
                                        {/*            <p className="sale critical">-0.79%</p>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="crypto-box active">*/}
                                        {/*        <div className="top">*/}
                                        {/*            <Link href="#"><span className="icon-eth"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /></span><span>Ethereum</span>*/}
                                        {/*                <span className="unit">ETH/USD</span></Link>*/}
                                        {/*        </div>*/}
                                        {/*        <h6 className="price">USD $3,480.04</h6>*/}
                                        {/*        <div className="bottom">*/}
                                        {/*            <p>36,641.20</p>*/}
                                        {/*            <div className="sale success">+10.55%</div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="crypto-box">*/}
                                        {/*        <div className="top">*/}
                                        {/*            <Link href="#"><span className="icon-tether"><span className="path1" /><span className="path2" /></span><span>Tether</span>*/}
                                        {/*                <span className="unit">USDT/USD</span></Link>*/}
                                        {/*        </div>*/}
                                        {/*        <h6 className="price">USD 1.00</h6>*/}
                                        {/*        <div className="bottom">*/}
                                        {/*            <p>36,641.20</p>*/}
                                        {/*            <div className="sale critical">-0.01%%</div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="crypto-box">*/}
                                        {/*        <div className="top">*/}
                                        {/*            <Link href="#"><span className="icon-bnb"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /><span className="path6" /></span><span>BNB</span> <span className="unit">BNB/USD</span></Link>*/}
                                        {/*        </div>*/}
                                        {/*        <h6 className="price">USD 443.56</h6>*/}
                                        {/*        <div className="bottom">*/}
                                        {/*            <p>36,641.20</p>*/}
                                        {/*            <div className="sale critical">-1.24%</div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        {/*<div className="content-inner" style={{ display: `${flatTabs === 4 ? "flex" : "none"}` }}>*/}
                                        {/*    <div className="crypto-box">*/}
                                        {/*        <div className="top">*/}
                                        {/*            <Link href="#"><span className="icon-btc"><span className="path1" /><span className="path2" /></span>*/}
                                        {/*                <span>Bitcoin</span>*/}
                                        {/*                <span className="unit">BTC/USD</span></Link>*/}
                                        {/*        </div>*/}
                                        {/*        <h6 className="price">USD 46,168.95</h6>*/}
                                        {/*        <div className="bottom">*/}
                                        {/*            <p>36,641.20</p>*/}
                                        {/*            <p className="sale critical">-0.79%</p>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="crypto-box active">*/}
                                        {/*        <div className="top">*/}
                                        {/*            <Link href="#"><span className="icon-eth"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /></span><span>Ethereum</span>*/}
                                        {/*                <span className="unit">ETH/USD</span></Link>*/}
                                        {/*        </div>*/}
                                        {/*        <h6 className="price">USD $3,480.04</h6>*/}
                                        {/*        <div className="bottom">*/}
                                        {/*            <p>36,641.20</p>*/}
                                        {/*            <div className="sale success">+10.55%</div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="crypto-box">*/}
                                        {/*        <div className="top">*/}
                                        {/*            <Link href="#"><span className="icon-tether"><span className="path1" /><span className="path2" /></span><span>Tether</span>*/}
                                        {/*                <span className="unit">USDT/USD</span></Link>*/}
                                        {/*        </div>*/}
                                        {/*        <h6 className="price">USD 1.00</h6>*/}
                                        {/*        <div className="bottom">*/}
                                        {/*            <p>36,641.20</p>*/}
                                        {/*            <div className="sale critical">-0.01%%</div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="crypto-box">*/}
                                        {/*        <div className="top">*/}
                                        {/*            <Link href="#"><span className="icon-bnb"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /><span className="path6" /></span><span>BNB</span> <span className="unit">BNB/USD</span></Link>*/}
                                        {/*        </div>*/}
                                        {/*        <h6 className="price">USD 443.56</h6>*/}
                                        {/*        <div className="bottom">*/}
                                        {/*            <p>36,641.20</p>*/}
                                        {/*            <div className="sale critical">-1.24%</div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        {/*<div className="content-inner" style={{ display: `${flatTabs === 5 ? "flex" : "none"}` }}>*/}
                                        {/*    <div className="crypto-box">*/}
                                        {/*        <div className="top">*/}
                                        {/*            <Link href="#"><span className="icon-btc"><span className="path1" /><span className="path2" /></span>*/}
                                        {/*                <span>Bitcoin</span>*/}
                                        {/*                <span className="unit">BTC/USD</span></Link>*/}
                                        {/*        </div>*/}
                                        {/*        <h6 className="price">USD 46,168.95</h6>*/}
                                        {/*        <div className="bottom">*/}
                                        {/*            <p>36,641.20</p>*/}
                                        {/*            <p className="sale critical">-0.79%</p>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="crypto-box active">*/}
                                        {/*        <div className="top">*/}
                                        {/*            <Link href="#"><span className="icon-eth"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /></span><span>Ethereum</span>*/}
                                        {/*                <span className="unit">ETH/USD</span></Link>*/}
                                        {/*        </div>*/}
                                        {/*        <h6 className="price">USD $3,480.04</h6>*/}
                                        {/*        <div className="bottom">*/}
                                        {/*            <p>36,641.20</p>*/}
                                        {/*            <div className="sale success">+10.55%</div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="crypto-box">*/}
                                        {/*        <div className="top">*/}
                                        {/*            <Link href="#"><span className="icon-tether"><span className="path1" /><span className="path2" /></span><span>Tether</span>*/}
                                        {/*                <span className="unit">USDT/USD</span></Link>*/}
                                        {/*        </div>*/}
                                        {/*        <h6 className="price">USD 1.00</h6>*/}
                                        {/*        <div className="bottom">*/}
                                        {/*            <p>36,641.20</p>*/}
                                        {/*            <div className="sale critical">-0.01%%</div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="crypto-box">*/}
                                        {/*        <div className="top">*/}
                                        {/*            <Link href="#"><span className="icon-bnb"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /><span className="path6" /></span><span>BNB</span> <span className="unit">BNB/USD</span></Link>*/}
                                        {/*        </div>*/}
                                        {/*        <h6 className="price">USD 443.56</h6>*/}
                                        {/*        <div className="bottom">*/}
                                        {/*            <p>36,641.20</p>*/}
                                        {/*            <div className="sale critical">-1.24%</div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        {/*<div className="content-inner" style={{ display: `${flatTabs === 6 ? "flex" : "none"}` }}>*/}
                                        {/*    <div className="crypto-box">*/}
                                        {/*        <div className="top">*/}
                                        {/*            <Link href="#"><span className="icon-btc"><span className="path1" /><span className="path2" /></span>*/}
                                        {/*                <span>Bitcoin</span>*/}
                                        {/*                <span className="unit">BTC/USD</span></Link>*/}
                                        {/*        </div>*/}
                                        {/*        <h6 className="price">USD 46,168.95</h6>*/}
                                        {/*        <div className="bottom">*/}
                                        {/*            <p>36,641.20</p>*/}
                                        {/*            <p className="sale critical">-0.79%</p>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="crypto-box active">*/}
                                        {/*        <div className="top">*/}
                                        {/*            <Link href="#"><span className="icon-eth"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /></span><span>Ethereum</span>*/}
                                        {/*                <span className="unit">ETH/USD</span></Link>*/}
                                        {/*        </div>*/}
                                        {/*        <h6 className="price">USD $3,480.04</h6>*/}
                                        {/*        <div className="bottom">*/}
                                        {/*            <p>36,641.20</p>*/}
                                        {/*            <div className="sale success">+10.55%</div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="crypto-box">*/}
                                        {/*        <div className="top">*/}
                                        {/*            <Link href="#"><span className="icon-tether"><span className="path1" /><span className="path2" /></span><span>Tether</span>*/}
                                        {/*                <span className="unit">USDT/USD</span></Link>*/}
                                        {/*        </div>*/}
                                        {/*        <h6 className="price">USD 1.00</h6>*/}
                                        {/*        <div className="bottom">*/}
                                        {/*            <p>36,641.20</p>*/}
                                        {/*            <div className="sale critical">-0.01%%</div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="crypto-box">*/}
                                        {/*        <div className="top">*/}
                                        {/*            <Link href="#"><span className="icon-bnb"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /><span className="path6" /></span><span>BNB</span> <span className="unit">BNB/USD</span></Link>*/}
                                        {/*        </div>*/}
                                        {/*        <h6 className="price">USD 443.56</h6>*/}
                                        {/*        <div className="bottom">*/}
                                        {/*            <p>36,641.20</p>*/}
                                        {/*            <div className="sale critical">-1.24%</div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        {/*<div className="content-inner" style={{ display: `${flatTabs === 7 ? "flex" : "none"}` }}>*/}
                                        {/*    <div className="crypto-box">*/}
                                        {/*        <div className="top">*/}
                                        {/*            <Link href="#"><span className="icon-btc"><span className="path1" /><span className="path2" /></span>*/}
                                        {/*                <span>Bitcoin</span>*/}
                                        {/*                <span className="unit">BTC/USD</span></Link>*/}
                                        {/*        </div>*/}
                                        {/*        <h6 className="price">USD 46,168.95</h6>*/}
                                        {/*        <div className="bottom">*/}
                                        {/*            <p>36,641.20</p>*/}
                                        {/*            <p className="sale critical">-0.79%</p>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="crypto-box active">*/}
                                        {/*        <div className="top">*/}
                                        {/*            <Link href="#"><span className="icon-eth"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /></span><span>Ethereum</span>*/}
                                        {/*                <span className="unit">ETH/USD</span></Link>*/}
                                        {/*        </div>*/}
                                        {/*        <h6 className="price">USD $3,480.04</h6>*/}
                                        {/*        <div className="bottom">*/}
                                        {/*            <p>36,641.20</p>*/}
                                        {/*            <div className="sale success">+10.55%</div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="crypto-box">*/}
                                        {/*        <div className="top">*/}
                                        {/*            <Link href="#"><span className="icon-tether"><span className="path1" /><span className="path2" /></span><span>Tether</span>*/}
                                        {/*                <span className="unit">USDT/USD</span></Link>*/}
                                        {/*        </div>*/}
                                        {/*        <h6 className="price">USD 1.00</h6>*/}
                                        {/*        <div className="bottom">*/}
                                        {/*            <p>36,641.20</p>*/}
                                        {/*            <div className="sale critical">-0.01%%</div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="crypto-box">*/}
                                        {/*        <div className="top">*/}
                                        {/*            <Link href="#"><span className="icon-bnb"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /><span className="path6" /></span><span>BNB</span> <span className="unit">BNB/USD</span></Link>*/}
                                        {/*        </div>*/}
                                        {/*        <h6 className="price">USD 443.56</h6>*/}
                                        {/*        <div className="bottom">*/}
                                        {/*            <p>36,641.20</p>*/}
                                        {/*            <div className="sale critical">-1.24%</div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
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
