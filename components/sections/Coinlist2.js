'use client'
import ChatList from "@/components/chart/ChatList"
import Link from "next/link"
import { useState } from "react"
import IconStar from "../elements/IconStar"
export default function Coinlist2() {
    const [flatTabs, setFlatTabs] = useState(1)
    const handleFlatTabs = (index) => {
        setFlatTabs(index)
    }

    return (
        <>

            <section className="coin-list">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block-text">
                                <h3 className="heading">Market Update</h3>
                                <Link className="btn-action" href="#">See All Coins</Link>
                            </div>
                            <div className="coin-list__main">
                                <div className="flat-tabs">
                                    <ul className="menu-tab">
                                        <li className={flatTabs === 1 ? "active" : ""} onClick={() => handleFlatTabs(1)}>
                                            <h6 className="fs-16">View All</h6>
                                        </li>
                                        <li className={flatTabs === 2 ? "active" : ""} onClick={() => handleFlatTabs(2)}>
                                            <h6 className="fs-16">Metaverse</h6>
                                        </li>
                                        <li className={flatTabs === 3 ? "active" : ""} onClick={() => handleFlatTabs(3)}>
                                            <h6 className="fs-16">Entertainment</h6>
                                        </li>
                                        <li className={flatTabs === 4 ? "active" : ""} onClick={() => handleFlatTabs(4)}>
                                            <h6 className="fs-16">Energy</h6>
                                        </li>
                                        <li className={flatTabs === 5 ? "active" : ""} onClick={() => handleFlatTabs(5)}>
                                            <h6 className="fs-16">NFT</h6>
                                        </li>
                                        <li className={flatTabs === 6 ? "active" : ""} onClick={() => handleFlatTabs(6)}>
                                            <h6 className="fs-16">Gaming</h6>
                                        </li>
                                        <li className={flatTabs === 7 ? "active" : ""} onClick={() => handleFlatTabs(7)}>
                                            <h6 className="fs-16">Music</h6>
                                        </li>
                                    </ul>
                                    <div className="content-tab">
                                        <div className="content-inner">
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
                                                        <td className="boild">$56,623.54</td>
                                                        <td className="up">+1.45%</td>
                                                        <td className="boild">$880,423,640,582</td>
                                                        <td>
                                                            <ChatList color={1} />
                                                        </td>
                                                        <td><Link href="#" className="btn">Trade</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><IconStar /></th>
                                                        <td>2</td>
                                                        <td>
                                                            <Link href="#"><span className="icon-eth"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /></span><span>Ethereum</span>
                                                                <span className="unit">ETH</span></Link>
                                                        </td>
                                                        <td className="boild">$56,623.54</td>
                                                        <td className="down">-5.12%</td>
                                                        <td className="boild">$880,423,640,582</td>
                                                        <td>
                                                            <ChatList color={1} />
                                                        </td>
                                                        <td><Link href="#" className="btn">Trade</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><IconStar /></th>
                                                        <td>3</td>
                                                        <td>
                                                            <Link href="#"><span className="icon-bnb"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /><span className="path6" /></span><span>BNB</span>
                                                                <span className="unit">BNB/USD</span></Link>
                                                        </td>
                                                        <td className="boild">$56,623.54</td>
                                                        <td className="down">-3.75%</td>
                                                        <td className="boild">$880,423,640,582</td>
                                                        <td>
                                                            <ChatList color={1} />
                                                        </td>
                                                        <td><Link href="#" className="btn">Trade</Link></td>
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
                                                        <td><Link href="#" className="btn">Trade</Link></td>
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
                                                        <td><Link href="#" className="btn">Trade</Link></td>
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
                                                            <ChatList color={1} />
                                                        </td>
                                                        <td><Link href="#" className="btn">Trade</Link></td>
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
                                                        <td><Link href="#" className="btn">Trade</Link></td>
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
            </section>
        </>
    )
}
