
'use client'
import { useState } from 'react'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
export default function Testimonials2() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    // Swiper options for the main slider
    const mainSwiperOptions = {
        thumbs: { swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null },
        modules: [FreeMode, Navigation, Thumbs],
        spaceBetween: 10,
        loop: true,

        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    }

    // Swiper options for the thumbnail slider
    const thumbnailSwiperOptions = {
        modules: [FreeMode, Navigation, Thumbs],
        spaceBetween: 10,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesProgress: true,
    }
    return (
        <>

            <section className="testimonials-2">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12 left">
                            <div className="block-text center">
                                <h3 className="heading">What our Customers say</h3>
                                <p className="desc">
                                    Our customers from all over the world share their lovely words
                                    about us.
                                </p>
                            </div>
                            <div className="swiper swiper-testimonial-2">
                                <Swiper {...mainSwiperOptions} className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="testimonials-box-2">
                                            <h6>“Trading crypto has never been so easy.”</h6>
                                            <p className="text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Mi non viverra eros purus. Turpis ac scelerisque blandit
                                                mauris ut senectus nibh. Pretium cras sit non at amet
                                                velit id in.
                                            </p>
                                            <div className="bottom">
                                                <div className="info">
                                                    <img src="/assets/images/avt/use-01.png" alt="" />
                                                    <div className="content">
                                                        <h6 className="name">Marvin McKinney</h6>
                                                        <p className="position">CEO of Startup</p>
                                                    </div>
                                                </div>
                                                <img src="/assets/images/partner/logo-06.png" alt="" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonials-box-2">
                                            <h6>“Trading crypto has never been so easy.”</h6>
                                            <p className="text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Mi non viverra eros purus. Turpis ac scelerisque blandit
                                                mauris ut senectus nibh. Pretium cras sit non at amet
                                                velit id in.
                                            </p>
                                            <div className="bottom">
                                                <div className="info">
                                                    <img src="/assets/images/avt/use-02.png" alt="" />
                                                    <div className="content">
                                                        <h6 className="name">Marvin McKinney</h6>
                                                        <p className="position">CEO of Startup</p>
                                                    </div>
                                                </div>
                                                <img src="/assets/images/partner/logo-06.png" alt="" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonials-box-2">
                                            <h6>“Trading crypto has never been so easy.”</h6>
                                            <p className="text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Mi non viverra eros purus. Turpis ac scelerisque blandit
                                                mauris ut senectus nibh. Pretium cras sit non at amet
                                                velit id in.
                                            </p>
                                            <div className="bottom">
                                                <div className="info">
                                                    <img src="/assets/images/avt/use-03.png" alt="" />
                                                    <div className="content">
                                                        <h6 className="name">Marvin McKinney</h6>
                                                        <p className="position">CEO of Startup</p>
                                                    </div>
                                                </div>
                                                <img src="/assets/images/partner/logo-06.png" alt="" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonials-box-2">
                                            <h6>“Trading crypto has never been so easy.”</h6>
                                            <p className="text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Mi non viverra eros purus. Turpis ac scelerisque blandit
                                                mauris ut senectus nibh. Pretium cras sit non at amet
                                                velit id in.
                                            </p>
                                            <div className="bottom">
                                                <div className="info">
                                                    <img src="/assets/images/avt/use-04.png" alt="" />
                                                    <div className="content">
                                                        <h6 className="name">Marvin McKinney</h6>
                                                        <p className="position">CEO of Startup</p>
                                                    </div>
                                                </div>
                                                <img src="/assets/images/partner/logo-06.png" alt="" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonials-box-2">
                                            <h6>“Trading crypto has never been so easy.”</h6>
                                            <p className="text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Mi non viverra eros purus. Turpis ac scelerisque blandit
                                                mauris ut senectus nibh. Pretium cras sit non at amet
                                                velit id in.
                                            </p>
                                            <div className="bottom">
                                                <div className="info">
                                                    <img src="/assets/images/avt/use-05.png" alt="" />
                                                    <div className="content">
                                                        <h6 className="name">Marvin McKinney</h6>
                                                        <p className="position">CEO of Startup</p>
                                                    </div>
                                                </div>
                                                <img src="/assets/images/partner/logo-06.png" alt="" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonials-box-2">
                                            <h6>“Trading crypto has never been so easy.”</h6>
                                            <p className="text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Mi non viverra eros purus. Turpis ac scelerisque blandit
                                                mauris ut senectus nibh. Pretium cras sit non at amet
                                                velit id in.
                                            </p>
                                            <div className="bottom">
                                                <div className="info">
                                                    <img src="/assets/images/avt/use-06.png" alt="" />
                                                    <div className="content">
                                                        <h6 className="name">Marvin McKinney</h6>
                                                        <p className="position">CEO of Startup</p>
                                                    </div>
                                                </div>
                                                <img src="/assets/images/partner/logo-06.png" alt="" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="swiper-button-next">
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19" stroke="#23262F" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 5L19 12L12 19" stroke="#23262F" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="swiper-button-prev">
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 12L5 12" stroke="#23262F" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 19L5 12L12 5" stroke="#23262F" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="swiper-pagination" />
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="map-testimonial">
                                <img className="map" src="/assets/images/layout/testimonials.png" alt="" />
                                <div className="swiper swiper-thumb2">
                                    <Swiper {...thumbnailSwiperOptions} onSwiper={setThumbsSwiper} className="swiper-wrapper list-img">
                                        <SwiperSlide>
                                            <div>
                                                <img src="/assets/images/avt/use-01.png" alt="" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div><img src="/assets/images/avt/use-02.png" alt="" /></div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div><img src="/assets/images/avt/use-03.png" alt="" /></div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div><img src="/assets/images/avt/use-04.png" alt="" /></div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div><img src="/assets/images/avt/use-05.png" alt="" /></div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div><img src="/assets/images/avt/use-06.png" alt="" /></div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
