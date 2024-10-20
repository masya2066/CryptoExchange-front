'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 60,
        },
    },
    slidesPerView: 4,
}

export default function Banner1() {
    return (
        <>

            <section className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="banner__content">
                                <h2 className="title">Start Your Crypto Journey On FinChain</h2>
                                <p className="fs-20 desc">
                                    Finchain offers you the most favorable conditions for cryptocurrency trading.
                                </p>
                                <Link href="/login" className="btn-action"><span>Get started now</span></Link>
                                <div className="partner">
                                    <h6>Our Partners</h6>
                                    <div className="partner__list">
                                        <div className="swiper swiper-partner">
                                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                                <SwiperSlide style={{display: "flex", justifyContent: "center", margin: "auto"}}>
                                                    <Link href="#"><img src="/assets/images/icon/binance-logo.svg" alt="" /></Link>
                                                </SwiperSlide>
                                                <SwiperSlide style={{display: "flex", justifyContent: "center", margin: "auto"}}>
                                                    <Link href="#"><img src="/assets/images/icon/ethereum-logo.svg" alt="" /></Link>
                                                </SwiperSlide>
                                                <SwiperSlide style={{display: "flex", justifyContent: "center", margin: "auto"}}>
                                                    <Link href="#"><img src="/assets/images/icon/bybit-logo.svg" alt="" /></Link>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="banner__image">
                                <img style={{width: "95%", height: "95%", objectFit: "cover", borderRadius: "20px"}} src="/assets/images/layout/banner-01.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
