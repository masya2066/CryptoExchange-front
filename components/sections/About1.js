
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
}

export default function About1() {
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
                                <h3 className="heading">What Is Rockie</h3>
                                <p className="fs-20 decs">
                                    Experience a variety of trading on Bitcost. You can use various
                                    types of coin transactions such as Spot Trade, Futures Trade,
                                    P2P, Staking, Mining, and margin.
                                </p>
                                <ul className="list">
                                    <li>
                                        <h6 className="title">
                                            <span className="icon-check" />View real-time
                                            cryptocurrency prices
                                        </h6>
                                        <p className="text">
                                            Experience a variety of trading on Bitcost. You can use
                                            various types of coin transactions such as Spot Trade,
                                            Futures Trade, P2P, Staking, Mining, and margin.
                                        </p>
                                    </li>
                                    <li>
                                        <h6 className="title">
                                            <span className="icon-check" />Buy and sell BTC, ETH, XRP,
                                            OKB, Etc...
                                        </h6>
                                        <p className="text">
                                            Experience a variety of trading on Bitcost. You can use
                                            various types of coin transactions such as Spot Trade,
                                            Futures Trade, P2P, Staking, Mining, and margin.
                                        </p>
                                    </li>
                                </ul>
                                <Link href="#" className="btn-action">Explore More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
