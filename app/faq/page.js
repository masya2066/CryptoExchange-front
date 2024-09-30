'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import store from "@/store";
import {Provider} from "react-redux";
import CreateAccountBanner from "@/components/elements/CreateAccountBanner";
export default function Faq() {
    const [isActive, setIsActive] = useState(1)

    const handleClick = (key) => {
        setIsActive(prevState => prevState === key ? null : key)
    }
    return (
        <>
            <Provider store={store}>
            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="FAQ">
                <div>
                    <section className="faq">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="block-text center">
                                        <h3 className="heading">Frequently Asked Questions</h3>
                                        <p className="desc fs-20">Learn how to get started</p>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="flat-accordion">
                                        <div className={isActive == 1 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleClick(1)}>
                                            <h6 className="toggle-title">What is Rockie</h6>
                                            <div className="toggle-content" style={{ display: `${isActive == 1 ? "block" : "none"}` }}>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Tellus aliquam parturient erat id vel, condimentum a,
                                                    hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                                                    Egestas feugiat gravida in imperdiet facilisi tortor ac
                                                    ultrices venenatis.
                                                </p>
                                                <Link href="#">Learn more</Link>
                                            </div>
                                        </div>
                                        <div  className={isActive == 2 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleClick(2)}>
                                            <h6 className="toggle-title">How to start with Rockie</h6>
                                            <div className="toggle-content" style={{ display: `${isActive == 2 ? "block" : "none"}` }}>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Tellus aliquam parturient erat id vel, condimentum a,
                                                    hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                                                    Egestas feugiat gravida in imperdiet facilisi tortor ac
                                                    ultrices venenatis.
                                                </p>
                                                <Link href="#">Learn more</Link>
                                            </div>
                                        </div>
                                        <div  className={isActive == 3 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleClick(3)}>
                                            <h6 className="toggle-title">
                                                What Cryptocurrencies can I use to purchase
                                            </h6>
                                            <div className="toggle-content" style={{ display: `${isActive == 3 ? "block" : "none"}` }}>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Tellus aliquam parturient erat id vel, condimentum a,
                                                    hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                                                    Egestas feugiat gravida in imperdiet facilisi tortor ac
                                                    ultrices venenatis.
                                                </p>
                                                <Link href="#">Learn more</Link>
                                            </div>
                                        </div>
                                        <div  className={isActive == 4 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleClick(4)}>
                                            <h6 className="toggle-title">How to buy &amp; sell in Rockie</h6>
                                            <div className="toggle-content" style={{ display: `${isActive == 4 ? "block" : "none"}` }}>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Tellus aliquam parturient erat id vel, condimentum a,
                                                    hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                                                    Egestas feugiat gravida in imperdiet facilisi tortor ac
                                                    ultrices venenatis.
                                                </p>
                                                <Link href="#">Learn more</Link>
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