'use client'
import Layout from "@/components/layout/Layout"
import { useState } from "react"
import store from "@/store";
import {Provider} from "react-redux";
import CreateAccountBanner from "@/components/elements/CreateAccountBanner";
import BaseInput from "@/components/elements/BaseInput";
import LoadButton from "@/components/elements/LoadingButton";
import BaseSelector from "@/components/elements/Selector";
export default function Wallet() {
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
                                        <li className={flatTabs === 1 ? "active" : ""} onClick={() => handleFlatTabs(1)}><h6 className="fs-16">Overview</h6></li>
                                        <li className={flatTabs === 2 ? "active" : ""} onClick={() => handleFlatTabs(2)}><h6 className="fs-16">Withdraw</h6></li>
                                    </ul>
                                </div>
                                <div className="col-xl-9 col-md-12">
                                    <div className="content-tab">
                                        <div className="content-inner" style={{ display: `${flatTabs === 1 ? "block" : "none"}` }}>
                                            <div className="wallet-main">
                                                <h4 className="heading">Overview</h4>
                                                <div className="wallet-body">
                                                    <div className="left">
                                                        <p>Total Balance</p>
                                                        <div className="price">
                                                            <h6>$ 0.79253864</h6>
                                                        </div>
                                                    </div>
                                                    <div className="right">
                                                        <form action="wallet-assets">
                                                            <div className="form-group">
                                                                <input type="text" placeholder="Search" />
                                                                <svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M20 20L15.514 15.506L20 20ZM18 9.5C18 11.7543 17.1045 13.9163 15.5104 15.5104C13.9163 17.1045 11.7543 18 9.5 18C7.24566 18 5.08365 17.1045 3.48959 15.5104C1.89553 13.9163 1 11.7543 1 9.5C1 7.24566 1.89553 5.08365 3.48959 3.48959C5.08365 1.89553 7.24566 1 9.5 1C11.7543 1 13.9163 1.89553 15.5104 3.48959C17.1045 5.08365 18 7.24566 18 9.5V9.5Z" stroke="#B1B5C3" strokeWidth={2} strokeLinecap="round" />
                                                                </svg>
                                                                <select aria-label="USD">
                                                                    <option >USD</option>
                                                                    <option value={1}>VND</option>
                                                                    <option value={2}>USDT</option>
                                                                    <option value={3}>USDC</option>
                                                                </select>
                                                            </div>
                                                            <button type="submit" className="btn-action">
                                                                Show balance
                                                            </button>
                                                        </form>
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
                                                                <span className="icon-btc"><span className="path1" /><span className="path2" /></span>
                                                                <p>
                                                                    <span className="boild">USDT</span>
                                                                    <span className="unit">Tether USD</span>
                                                                </p>
                                                            </td>
                                                            <td className="color-success">
                                                                <span className="boild">7.46% APR</span>
                                                            </td>
                                                            <td>
                                                                <span className="boild">0.2785689852 BTC</span>
                                                                <span className="unit">$10,098.36</span>
                                                            </td>
                                                            <td>
                                                                <span className="boild">0.2785689852 BTC</span>
                                                                <span className="unit">$10,098.36</span>
                                                            </td>
                                                            <td>
                                                                <span className="boild">0.2785689852 BTC</span>
                                                                <span className="unit">$10,098.36</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="number">
                                                                <span>2</span>
                                                            </td>
                                                            <td className="asset">
                                                                <span className="icon-eth"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /></span>
                                                                <p>
                                                                    <span className="boild">Ethereum</span>
                                                                    <span className="unit">Tether USD</span>
                                                                </p>
                                                            </td>
                                                            <td className="color-success">
                                                                <span className="boild">7.46% APR</span>
                                                            </td>
                                                            <td>
                                                                <span className="boild">0.2785689852 BTC</span>
                                                                <span className="unit">$10,098.36</span>
                                                            </td>
                                                            <td>
                                                                <span className="boild">0.2785689852 BTC</span>
                                                                <span className="unit">$10,098.36</span>
                                                            </td>
                                                            <td>
                                                                <span className="boild">0.2785689852 BTC</span>
                                                                <span className="unit">$10,098.36</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="number">
                                                                <span>3</span>
                                                            </td>
                                                            <td className="asset">
                                                                <span className="icon-bnb"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /><span className="path6" /></span>
                                                                <p>
                                                                    <span className="boild">Binance</span>
                                                                    <span className="unit">BNB</span>
                                                                </p>
                                                            </td>
                                                            <td className="color-success">
                                                                <span className="boild">7.46% APR</span>
                                                            </td>
                                                            <td>
                                                                <span className="boild">0.2785689852 BTC</span>
                                                                <span className="unit">$10,098.36</span>
                                                            </td>
                                                            <td>
                                                                <span className="boild">0.2785689852 BTC</span>
                                                                <span className="unit">$10,098.36</span>
                                                            </td>
                                                            <td>
                                                                <span className="boild">0.2785689852 BTC</span>
                                                                <span className="unit">$10,098.36</span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="content-inner" style={{ display: `${flatTabs === 2 ? "block" : "none"}` }}>
                                            <div className="wallet-main">
                                                <h4 className="heading">Withdraw</h4>
                                                <div className="wallet-body">
                                                    <div className="left">
                                                        <p>Total Balance</p>
                                                        <div className="price">
                                                            <h6>0.79253864</h6>
                                                            <div className="sale success">BTC</div>
                                                        </div>
                                                        <p>$12,068.83</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wallet-withdraw">
                                                <div className={"inputs-container"}>
                                                    <BaseSelector
                                                    data={currencies}
                                                    label={"Currency"}
                                                    defaultValue={currencies[0].value}
                                                    />
                                                    <BaseInput placeholder={"Address"}/>
                                                    <BaseInput placeholder={"Amount"}/>
                                                </div>
                                                <div className={"button-container"}>
                                                    <LoadButton label={"Submit"}/>
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