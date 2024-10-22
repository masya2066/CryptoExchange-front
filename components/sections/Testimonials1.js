
'use client'
import { useState } from 'react'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
export default function Testimonials1() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    // Swiper options for the main slider
    const mainSwiperOptions = {
        spaceBetween: 10,
        thumbs: { swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null },
        modules: [FreeMode, Navigation, Thumbs],
    }

    // Swiper options for the thumbnail slider
    const thumbnailSwiperOptions = {
        modules: [FreeMode, Navigation, Thumbs],
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
    }
    return (
        <>

            <section className="testimonials">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="block-text">
                                <h3 className="heading">Our customers love what we do</h3>
                                <h6 className="fs-20">
                                    Transform Your idea into Reality With Finchain
                                </h6>
                                <p>
                                    It is a long established fact that a reader will be distracted
                                    by the readable content of a page when looking at its layout.
                                </p>
                                <div className="swiper swiper-thumb1">
                                    <Swiper {...thumbnailSwiperOptions} onSwiper={setThumbsSwiper} className="swiper-wrapper list-img">
                                        <SwiperSlide>
                                            <img src="/assets/images/avt/avt-02.jpg" alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="/assets/images/avt/avt-03.webp" alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="/assets/images/avt/avt-04.webp" alt="" />
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                                <div className="couter">
                                    <h6>290+</h6>
                                    <p className="title">Customer Reviews</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="swiper swiper-testimonial-1">
                                <Swiper {...mainSwiperOptions} className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="testimonials-box">
                                            <span className="icon-quote" />
                                            <h6 className="text">
                                                “FinChain has been a real game-changer for me!
                                                I’m just starting to get into cryptocurrency,
                                                and FinChain turned out to be the perfect platform.
                                                The interface is super intuitive, and buying or selling
                                                is seamless. I especially like being able to track
                                                real-time price changes, which helps me make quick
                                                decisions. I feel like I’m becoming part of something big!”
                                            </h6>
                                            <div className="bottom">
                                                <div className="info">
                                                    <img src="/assets/images/avt/avt-02.jpg" alt="" />
                                                    <div className="content">
                                                        <h6 className="name">Johnny Andro</h6>
                                                        <p className="position">Finchain Newbie</p>
                                                    </div>
                                                </div>
                                                <img src="/assets/images/icon/ethereum-logo.svg" alt="" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonials-box">
                                            <span className="icon-quote" />
                                            <h6 className="text">
                                                “I’m a complete newbie to crypto, and FinChain has been a lifesaver!
                                                The platform is so simple that even someone with no experience
                                                can use it easily. I tried buying some ETH, and the whole
                                                process went smoothly. What I love the most are the convenient
                                                alerts and the ability to react quickly to market changes.
                                                I’m really glad I chose FinChain!”
                                            </h6>
                                            <div className="bottom">
                                                <div className="info">
                                                    <img src="/assets/images/avt/avt-03.webp" alt="" />
                                                    <div className="content">
                                                        <h6 className="name">Mark Wallberg</h6>
                                                        <p className="position">Finchain User</p>
                                                    </div>
                                                </div>
                                                <img src="/assets/images/icon/ethereum-logo.svg" alt="" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonials-box">
                                            <span className="icon-quote" />
                                            <h6 className="text">
                                                “I recently started using FinChain, and I
                                                couldn’t be happier! The platform is super
                                                easy to navigate, even for someone like me who’s
                                                new to trading. I’ve tried buying BTC and ETH,
                                                and the process was smooth. Plus, the real-time
                                                price updates help me make quick decisions.
                                                It feels great to be part of this community!”
                                            </h6>
                                            <div className="bottom">
                                                <div className="info">
                                                    <img src="/assets/images/avt/avt-04.webp" alt="" />
                                                    <div className="content">
                                                        <h6 className="name">Andrey Kosolapov</h6>
                                                        <p className="position">Finchain Professional</p>
                                                    </div>
                                                </div>
                                                <img src="/assets/images/icon/ethereum-logo.svg" alt="" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
