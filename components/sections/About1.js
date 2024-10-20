
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import {useDispatch, useSelector} from "react-redux";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
}

export default function About1() {

    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.authSlices.isAuth)

    return (
        <>

            <section className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="about_image">
                                <div className="swiper img-swiper">
                                    <Swiper {...swiperOptions} className="swiper-wrapper">
                                        <SwiperSlide>
                                            <img className="img-main" src="/assets/images/layout/about-h1.png" alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img className="img-main" src="/assets/images/layout/about-h1.png" alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img className="img-main" src="/assets/images/layout/about-h1.png" alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img className="img-main" src="/assets/images/layout/about-h1.png" alt="" />
                                        </SwiperSlide>
                                    </Swiper>
                                    <div className="swiper-pagination" />
                                </div>
                                <img className="icon icon-1" src="/assets/images/icon/icon-01.png" alt="" />
                                <img className="icon icon-2" src="/assets/images/icon/icon-02.png" alt="" />
                                <img className="icon icon-3" src="/assets/images/icon/icon-03.png" alt="" />
                                <img className="icon icon-4" src="/assets/images/icon/icon-04.png" alt="" />
                                <img className="icon icon-5" src="/assets/images/icon/icon-05.png" alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="about__content" data-aos="fade-up" data-aos-duration={1000}>
                                <h3 className="heading">What Is FinChain</h3>
                                <p className="fs-20 decs">
                                    Experience diverse trading options on FinChain,
                                    including Spot, Futures, P2P, Staking, Mining, and Margin.
                                </p>
                                <ul className="list">
                                    <li>
                                        <h6 className="title">
                                            <span className="icon-check" />
                                            Buy and sell popular cryptocurrencies
                                            like BTC, ETH, SOLI, and more, while viewing real-time prices on our platform.
                                        </h6>
                                    </li>
                                </ul>
                                {isAuth ? <Link href="/deposit" className="btn-action">Deposit now</Link> :
                                    <Link href="/user-profile" className="btn-action">Start Now</Link>}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
