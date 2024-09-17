'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
export default function BuyCryptoConfirm() {
    const [flatTabs, setFlatTabs] = useState(1)
    const handleFlatTabs = (index) => {
        setFlatTabs(index)
    }
    return (
        <>

            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Buy Crypto">
                <div>
                    <section className="buy-crypto s1 flat-tabs">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <ul className="menu-tab">
                                        <li className={flatTabs === 1 ? "active" : ""} onClick={() => handleFlatTabs(1)}><h6 className="fs-16">Overview</h6></li>
                                        <li className={flatTabs === 2 ? "active" : ""} onClick={() => handleFlatTabs(2)}><h6 className="fs-16">Buy Crypto</h6></li>
                                        <li className={flatTabs === 3 ? "active" : ""} onClick={() => handleFlatTabs(3)}><h6 className="fs-16">Sell Crypto</h6></li>
                                    </ul>
                                </div>
                                <div className="col-md-9">
                                    <div className="content-tab">
                                        <div className="content-inner buy-crypto__main" style={{ display: `${flatTabs === 1 ? "block" : "none"}` }}>
                                            <div className="top">
                                                <ul className="top-list">
                                                    <li className="done">
                                                        <h6>
                                                            <span>
                                                                <svg width={10} height={8} viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M1 3.99967L3.66667 6.66634L9 1.33301" stroke="white" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg> </span>Select currency
                                                        </h6>
                                                    </li>
                                                    <li className="active">
                                                        <h6><span />Confirm Payment</h6>
                                                    </li>
                                                    <li>
                                                        <h6><span />Complete Payment</h6>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="main info">
                                                <h6>Confirm Information</h6>
                                                <p className="desc">
                                                    You are about to Receive 1.356 BTC for Bitcloud bank
                                                </p>
                                                <ul className="list">
                                                    <li>
                                                        <div className="icon">
                                                            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M15.8333 4.16667H4.16665C3.24617 4.16667 2.49998 4.91286 2.49998 5.83333V14.1667C2.49998 15.0871 3.24617 15.8333 4.16665 15.8333H15.8333C16.7538 15.8333 17.5 15.0871 17.5 14.1667V5.83333C17.5 4.91286 16.7538 4.16667 15.8333 4.16667ZM4.16665 2.5C2.3257 2.5 0.833313 3.99238 0.833313 5.83333V14.1667C0.833313 16.0076 2.3257 17.5 4.16665 17.5H15.8333C17.6743 17.5 19.1666 16.0076 19.1666 14.1667V5.83333C19.1666 3.99238 17.6743 2.5 15.8333 2.5H4.16665Z" fill="white" />
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M10.8333 9.99967C10.8333 7.69849 12.6988 5.83301 15 5.83301H18.3333C18.7935 5.83301 19.1666 6.2061 19.1666 6.66634C19.1666 7.12658 18.7935 7.49967 18.3333 7.49967H15C13.6193 7.49967 12.5 8.61896 12.5 9.99967C12.5 11.3804 13.6193 12.4997 15 12.4997H18.3333C18.7935 12.4997 19.1666 12.8728 19.1666 13.333C19.1666 13.7932 18.7935 14.1663 18.3333 14.1663H15C12.6988 14.1663 10.8333 12.3009 10.8333 9.99967Z" fill="white" />
                                                                <path d="M15.8334 10.0003C15.8334 10.4606 15.4603 10.8337 15 10.8337C14.5398 10.8337 14.1667 10.4606 14.1667 10.0003C14.1667 9.54009 14.5398 9.16699 15 9.16699C15.4603 9.16699 15.8334 9.54009 15.8334 10.0003Z" fill="white" />
                                                            </svg>
                                                        </div>
                                                        <div className="content">
                                                            <p>Pay</p>
                                                            <h6 className="price">3.000.000 VND</h6>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M15.8333 4.16667H4.16665C3.24617 4.16667 2.49998 4.91286 2.49998 5.83333V14.1667C2.49998 15.0871 3.24617 15.8333 4.16665 15.8333H15.8333C16.7538 15.8333 17.5 15.0871 17.5 14.1667V5.83333C17.5 4.91286 16.7538 4.16667 15.8333 4.16667ZM4.16665 2.5C2.3257 2.5 0.833313 3.99238 0.833313 5.83333V14.1667C0.833313 16.0076 2.3257 17.5 4.16665 17.5H15.8333C17.6743 17.5 19.1666 16.0076 19.1666 14.1667V5.83333C19.1666 3.99238 17.6743 2.5 15.8333 2.5H4.16665Z" fill="white" />
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M10.8333 9.99967C10.8333 7.69849 12.6988 5.83301 15 5.83301H18.3333C18.7935 5.83301 19.1666 6.2061 19.1666 6.66634C19.1666 7.12658 18.7935 7.49967 18.3333 7.49967H15C13.6193 7.49967 12.5 8.61896 12.5 9.99967C12.5 11.3804 13.6193 12.4997 15 12.4997H18.3333C18.7935 12.4997 19.1666 12.8728 19.1666 13.333C19.1666 13.7932 18.7935 14.1663 18.3333 14.1663H15C12.6988 14.1663 10.8333 12.3009 10.8333 9.99967Z" fill="white" />
                                                                <path d="M15.8334 10.0003C15.8334 10.4606 15.4603 10.8337 15 10.8337C14.5398 10.8337 14.1667 10.4606 14.1667 10.0003C14.1667 9.54009 14.5398 9.16699 15 9.16699C15.4603 9.16699 15.8334 9.54009 15.8334 10.0003Z" fill="white" />
                                                            </svg>
                                                        </div>
                                                        <div className="content">
                                                            <p>Get</p>
                                                            <h6 className="price">0.00207026 BTC</h6>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <svg width={24} height={18} viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M15.5763 17.0837C20.1786 17.0837 23.9096 13.3527 23.9096 8.75032C23.9096 4.14795 20.1786 0.416992 15.5763 0.416992C12.0556 0.416992 9.04483 2.60027 7.82408 5.68678C7.23371 5.48653 6.60104 5.37793 5.943 5.37793C2.71059 5.37793 0.09021 7.99831 0.09021 11.2307C0.09021 14.4631 2.71059 17.0835 5.943 17.0835L5.94287 17.0837H14.7016C14.7958 17.0837 14.8892 17.0766 14.9811 17.0627C15.1777 17.0766 15.3761 17.0837 15.5763 17.0837ZM10.2874 15.1905C10.2808 15.1851 10.2743 15.1797 10.2677 15.1743C10.2551 15.1882 10.2424 15.202 10.2297 15.2157L10.2874 15.1905Z" fill="white" />
                                                            </svg>
                                                        </div>
                                                        <div className="content">
                                                            <p>For</p>
                                                            <h6 className="price">Rockie</h6>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="main details">
                                                <h6>Payment Details</h6>
                                                <form action="buy-crypto-details">
                                                    <p className="desc">Bank account</p>
                                                    <div className="form-group">
                                                        <label>Account name</label>
                                                        <input className="form-control" type="text" defaultValue="Veum Cecilia" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Account number</label>
                                                        <input className="form-control" type="text" defaultValue="V548422222221" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Address</label>
                                                        <input className="form-control" type="text" defaultValue="079 Dariana Knoll, CA" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>SWIFT Code</label>
                                                        <input className="form-control" type="text" defaultValue="UI8" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Bank Address</label>
                                                        <input className="form-control" type="text" defaultValue="55416 Powlowski Spring, CA" />
                                                    </div>
                                                    <div className="code">
                                                        <h6>Reference code</h6>
                                                        <p className="mb-5">
                                                            You MUST include the Reference Code in your deposit in
                                                            order to credit your account!
                                                        </p>
                                                        <p>Reference Code:</p>
                                                        <div className="code-text">BLUTUKHY34PB</div>
                                                    </div>
                                                    <div className="group-button">
                                                        <button className="cancel btn-action-3">Cancel</button>
                                                        <button className="submit btn-action">Let’s move on!</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="content-inner buy-crypto__main" style={{ display: `${flatTabs === 2 ? "block" : "none"}` }}>
                                            <div className="top">
                                                <ul className="top-list">
                                                    <li className="active">
                                                        <h6><span />Select currency</h6>
                                                    </li>
                                                    <li>
                                                        <h6><span />Important Notes</h6>
                                                    </li>
                                                    <li>
                                                        <h6><span />Payment Details</h6>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="main">
                                                <h6>Select Currency</h6>
                                                <p>Reference Price: 1,450,939,280.43 VND/BTC</p>
                                                <form action="buy-crypto-details" className="form">
                                                    <div className="form-field">
                                                        <label>Pay</label>
                                                        <input type="number" className="dollar" placeholder="US$" />
                                                    </div>
                                                    <button className="btn-convert" >
                                                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M17.6691 3.02447L15.4471 0.35791C15.3074 0.195998 15.1203 0.106407 14.9261 0.108432C14.7319 0.110457 14.5461 0.203937 14.4088 0.368737C14.2715 0.533538 14.1936 0.756473 14.1919 0.989527C14.1902 1.22258 14.2649 1.44711 14.3998 1.61475L15.3575 2.76403H2.3319C1.74258 2.76403 1.1774 3.04497 0.760683 3.54505C0.34397 4.04512 0.109863 4.72337 0.109863 5.43059L0.109863 8.09714C0.109863 8.33288 0.187899 8.55896 0.326803 8.72566C0.465707 8.89235 0.654102 8.986 0.850542 8.986C1.04698 8.986 1.23538 8.89235 1.37428 8.72566C1.51319 8.55896 1.59122 8.33288 1.59122 8.09714V5.43059C1.59122 5.19485 1.66926 4.96877 1.80816 4.80207C1.94707 4.63538 2.13546 4.54174 2.3319 4.54174H15.3575L14.3998 5.69102C14.329 5.77302 14.2726 5.8711 14.2338 5.97954C14.195 6.08798 14.1745 6.20462 14.1737 6.32264C14.1728 6.44066 14.1916 6.5577 14.2288 6.66694C14.2661 6.77618 14.3211 6.87542 14.3906 6.95888C14.4601 7.04233 14.5428 7.10833 14.6339 7.15302C14.7249 7.19772 14.8224 7.22021 14.9208 7.21918C15.0191 7.21816 15.1163 7.19363 15.2067 7.14705C15.297 7.10047 15.3788 7.03275 15.4471 6.94786L17.6691 4.2813C17.8052 4.11283 17.8812 3.88746 17.8812 3.65288C17.8812 3.41831 17.8052 3.19293 17.6691 3.02447Z" fill="white" />
                                                            <path d="M17.1467 8.98828C16.9503 8.98828 16.7619 9.08193 16.623 9.24862C16.4841 9.41531 16.406 9.64139 16.406 9.87713V12.5437C16.406 12.7794 16.328 13.0055 16.1891 13.1722C16.0502 13.3389 15.8618 13.4325 15.6653 13.4325H2.63976L3.59746 12.2832C3.73238 12.1156 3.80704 11.8911 3.80535 11.658C3.80366 11.425 3.72576 11.202 3.58844 11.0372C3.45111 10.8724 3.26534 10.779 3.07113 10.7769C2.87693 10.7749 2.68983 10.8645 2.55014 11.0264L0.328098 13.693C0.191902 13.8613 0.115723 14.0867 0.115723 14.3214C0.115723 14.556 0.191902 14.7814 0.328098 14.9498L2.55014 17.6164C2.61846 17.7012 2.70019 17.769 2.79056 17.8155C2.88092 17.8621 2.97812 17.8866 3.07646 17.8877C3.17481 17.8887 3.27234 17.8662 3.36337 17.8215C3.4544 17.7768 3.53709 17.7108 3.60664 17.6274C3.67618 17.5439 3.73118 17.4447 3.76842 17.3354C3.80567 17.2262 3.82441 17.1092 3.82355 16.9911C3.8227 16.8731 3.80226 16.7565 3.76345 16.648C3.72463 16.5396 3.6682 16.4415 3.59746 16.3595L2.63976 15.2102H15.6653C16.2547 15.2102 16.8199 14.9293 17.2366 14.4292C17.6533 13.9291 17.8874 13.2509 17.8874 12.5437V9.87713C17.8874 9.64139 17.8094 9.41531 17.6704 9.24862C17.5315 9.08193 17.3431 8.98828 17.1467 8.98828Z" fill="white" />
                                                        </svg>
                                                    </button>
                                                    <div className="form-field">
                                                        <label>Receive</label>
                                                        <input type="number" className="bitcoin" placeholder="BTC" />
                                                    </div>
                                                    <button type="submit" className="btn-action">Continue</button>
                                                </form>
                                                <div className="button" />
                                            </div>
                                        </div>
                                        <div className="content-inner buy-crypto__main" style={{ display: `${flatTabs === 3 ? "block" : "none"}` }}>
                                            <div className="top">
                                                <ul className="top-list">
                                                    <li className="active">
                                                        <h6><span />Select currency</h6>
                                                    </li>
                                                    <li>
                                                        <h6><span />Important Notes</h6>
                                                    </li>
                                                    <li>
                                                        <h6><span />Payment Details</h6>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="main">
                                                <h6>Select Currency</h6>
                                                <p>Reference Price: 1,450,939,280.43 VND/BTC</p>
                                                <form action="buy-crypto-details" className="form">
                                                    <div className="form-field">
                                                        <label>Pay</label>
                                                        <input type="number" className="dollar" placeholder="US$" />
                                                    </div>
                                                    <button className="btn-convert" >
                                                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M17.6691 3.02447L15.4471 0.35791C15.3074 0.195998 15.1203 0.106407 14.9261 0.108432C14.7319 0.110457 14.5461 0.203937 14.4088 0.368737C14.2715 0.533538 14.1936 0.756473 14.1919 0.989527C14.1902 1.22258 14.2649 1.44711 14.3998 1.61475L15.3575 2.76403H2.3319C1.74258 2.76403 1.1774 3.04497 0.760683 3.54505C0.34397 4.04512 0.109863 4.72337 0.109863 5.43059L0.109863 8.09714C0.109863 8.33288 0.187899 8.55896 0.326803 8.72566C0.465707 8.89235 0.654102 8.986 0.850542 8.986C1.04698 8.986 1.23538 8.89235 1.37428 8.72566C1.51319 8.55896 1.59122 8.33288 1.59122 8.09714V5.43059C1.59122 5.19485 1.66926 4.96877 1.80816 4.80207C1.94707 4.63538 2.13546 4.54174 2.3319 4.54174H15.3575L14.3998 5.69102C14.329 5.77302 14.2726 5.8711 14.2338 5.97954C14.195 6.08798 14.1745 6.20462 14.1737 6.32264C14.1728 6.44066 14.1916 6.5577 14.2288 6.66694C14.2661 6.77618 14.3211 6.87542 14.3906 6.95888C14.4601 7.04233 14.5428 7.10833 14.6339 7.15302C14.7249 7.19772 14.8224 7.22021 14.9208 7.21918C15.0191 7.21816 15.1163 7.19363 15.2067 7.14705C15.297 7.10047 15.3788 7.03275 15.4471 6.94786L17.6691 4.2813C17.8052 4.11283 17.8812 3.88746 17.8812 3.65288C17.8812 3.41831 17.8052 3.19293 17.6691 3.02447Z" fill="white" />
                                                            <path d="M17.1467 8.98828C16.9503 8.98828 16.7619 9.08193 16.623 9.24862C16.4841 9.41531 16.406 9.64139 16.406 9.87713V12.5437C16.406 12.7794 16.328 13.0055 16.1891 13.1722C16.0502 13.3389 15.8618 13.4325 15.6653 13.4325H2.63976L3.59746 12.2832C3.73238 12.1156 3.80704 11.8911 3.80535 11.658C3.80366 11.425 3.72576 11.202 3.58844 11.0372C3.45111 10.8724 3.26534 10.779 3.07113 10.7769C2.87693 10.7749 2.68983 10.8645 2.55014 11.0264L0.328098 13.693C0.191902 13.8613 0.115723 14.0867 0.115723 14.3214C0.115723 14.556 0.191902 14.7814 0.328098 14.9498L2.55014 17.6164C2.61846 17.7012 2.70019 17.769 2.79056 17.8155C2.88092 17.8621 2.97812 17.8866 3.07646 17.8877C3.17481 17.8887 3.27234 17.8662 3.36337 17.8215C3.4544 17.7768 3.53709 17.7108 3.60664 17.6274C3.67618 17.5439 3.73118 17.4447 3.76842 17.3354C3.80567 17.2262 3.82441 17.1092 3.82355 16.9911C3.8227 16.8731 3.80226 16.7565 3.76345 16.648C3.72463 16.5396 3.6682 16.4415 3.59746 16.3595L2.63976 15.2102H15.6653C16.2547 15.2102 16.8199 14.9293 17.2366 14.4292C17.6533 13.9291 17.8874 13.2509 17.8874 12.5437V9.87713C17.8874 9.64139 17.8094 9.41531 17.6704 9.24862C17.5315 9.08193 17.3431 8.98828 17.1467 8.98828Z" fill="white" />
                                                        </svg>
                                                    </button>
                                                    <div className="form-field">
                                                        <label>Receive</label>
                                                        <input type="number" className="bitcoin" placeholder="BTC" />
                                                    </div>
                                                    <button type="submit" className="btn-action">Continue</button>
                                                </form>
                                                <div className="button" />
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