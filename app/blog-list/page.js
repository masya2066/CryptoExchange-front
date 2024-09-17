'use client'
import VideoPopup from "@/components/elements/VideoPopup"
import Layout from "@/components/layout/Layout"
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
export default function BlogList() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Blog List">
                <div>
                    <section className="blog-list">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="blog-slider">
                                        <div className="swiper blog-swiper">
                                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                                <SwiperSlide>
                                                    <div className="blog-box">
                                                        <div className="box-image">
                                                            <img src="/assets/images/blog/banner.jpg" alt="" />
                                                        </div>
                                                        <div className="box-content">
                                                            <Link href="#" className="category btn-action">learn &amp; earn</Link>
                                                            <Link href="#" className="title">Learn about UI8 coin and earn an All-Access Pass</Link>
                                                            <div className="meta">
                                                                <Link href="#" className="name"><span />Floyd Buckridge</Link>
                                                                <Link href="#" className="time">Feb 03, 2021</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="blog-box">
                                                        <div className="box-image">
                                                            <img src="/assets/images/blog/banner.jpg" alt="" />
                                                        </div>
                                                        <div className="box-content">
                                                            <Link href="#" className="category btn-action">learn &amp; earn</Link>
                                                            <Link href="#" className="title">Learn about UI8 coin and earn an All-Access Pass</Link>
                                                            <div className="meta">
                                                                <Link href="#" className="name"><span />Floyd Buckridge</Link>
                                                                <Link href="#" className="time">Feb 03, 2021</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="blog-box">
                                                        <div className="box-image">
                                                            <img src="/assets/images/blog/banner.jpg" alt="" />
                                                        </div>
                                                        <div className="box-content">
                                                            <Link href="#" className="category btn-action">learn &amp; earn</Link>
                                                            <Link href="#" className="title">Learn about UI8 coin and earn an All-Access Pass</Link>
                                                            <div className="meta">
                                                                <Link href="#" className="name"><span />Floyd Buckridge</Link>
                                                                <Link href="#" className="time">Feb 03, 2021</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="blog-box">
                                                        <div className="box-image">
                                                            <img src="/assets/images/blog/banner.jpg" alt="" />
                                                        </div>
                                                        <div className="box-content">
                                                            <Link href="#" className="category btn-action">learn &amp; earn</Link>
                                                            <Link href="#" className="title">Learn about UI8 coin and earn an All-Access Pass</Link>
                                                            <div className="meta">
                                                                <Link href="#" className="name"><span />Floyd Buckridge</Link>
                                                                <Link href="#" className="time">Feb 03, 2021</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
                                            <div className="swiper-pagination" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-8 col-md-12">
                                    <div className="blog-main">
                                        <div className="blog-box">
                                            <div className="box-image">
                                                <img src="/assets/images/blog/blog-01.jpg" alt="" />
                                                <div className="wrap-video">
                                                    <VideoPopup />
                                                </div>
                                            </div>
                                            <div className="box-content">
                                                <Link href="#" className="category btn-action">learn &amp; earn</Link>
                                                <Link href="#" className="title">Learn about UI8 coin and earn an All-Access Pass</Link>
                                                <div className="meta">
                                                    <Link href="#" className="name"><span />Floyd Buckridge</Link>
                                                    <Link href="#" className="time">Feb 03, 2021</Link>
                                                </div>
                                                <p className="text">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Facilisi id vestibulum sem at sed neque.
                                                </p>
                                                <Link href="/blog-details">Read More</Link>
                                            </div>
                                        </div>
                                        <div className="blog-box">
                                            <div className="box-image">
                                                <img src="/assets/images/blog/blog-01.jpg" alt="" />
                                                <div className="wrap-video">
                                                    <VideoPopup />
                                                </div>
                                            </div>
                                            <div className="box-content">
                                                <Link href="#" className="category btn-action">learn &amp; earn</Link>
                                                <Link href="#" className="title">Learn about UI8 coin and earn an All-Access Pass</Link>
                                                <div className="meta">
                                                    <Link href="#" className="name"><span />Floyd Buckridge</Link>
                                                    <Link href="#" className="time">Feb 03, 2021</Link>
                                                </div>
                                                <p className="text">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Facilisi id vestibulum sem at sed neque.
                                                </p>
                                                <Link href="/blog-details">Read More</Link>
                                            </div>
                                        </div>
                                        <div className="blog-box">
                                            <div className="box-image">
                                                <img src="/assets/images/blog/blog-01.jpg" alt="" />
                                                <div className="wrap-video">
                                                    <VideoPopup />
                                                </div>
                                            </div>
                                            <div className="box-content">
                                                <Link href="#" className="category btn-action">learn &amp; earn</Link>
                                                <Link href="#" className="title">Learn about UI8 coin and earn an All-Access Pass</Link>
                                                <div className="meta">
                                                    <Link href="#" className="name"><span />Floyd Buckridge</Link>
                                                    <Link href="#" className="time">Feb 03, 2021</Link>
                                                </div>
                                                <p className="text">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Facilisi id vestibulum sem at sed neque.
                                                </p>
                                                <Link href="/blog-details">Read More</Link>
                                            </div>
                                        </div>
                                        <div className="blog-box">
                                            <div className="box-image">
                                                <img src="/assets/images/blog/blog-01.jpg" alt="" />
                                                <div className="wrap-video">
                                                    <VideoPopup />
                                                </div>
                                            </div>
                                            <div className="box-content">
                                                <Link href="#" className="category btn-action">learn &amp; earn</Link>
                                                <Link href="#" className="title">Learn about UI8 coin and earn an All-Access Pass</Link>
                                                <div className="meta">
                                                    <Link href="#" className="name"><span />Floyd Buckridge</Link>
                                                    <Link href="#" className="time">Feb 03, 2021</Link>
                                                </div>
                                                <p className="text">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Facilisi id vestibulum sem at sed neque.
                                                </p>
                                                <Link href="/blog-details">Read More</Link>
                                            </div>
                                        </div>
                                        <div className="button-loadmore">
                                            <Link href="#">
                                                <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.00001 0.333008C6.63182 0.333008 6.33334 0.631485 6.33334 0.999674V2.99967C6.33334 3.36786 6.63182 3.66634 7.00001 3.66634C7.3682 3.66634 7.66668 3.36786 7.66668 2.99967V0.999674C7.66668 0.631485 7.3682 0.333008 7.00001 0.333008Z" fill="#23262F" />
                                                    <path d="M7.00001 10.333C6.63182 10.333 6.33334 10.6315 6.33334 10.9997V12.9997C6.33334 13.3679 6.63182 13.6663 7.00001 13.6663C7.3682 13.6663 7.66668 13.3679 7.66668 12.9997V10.9997C7.66668 10.6315 7.3682 10.333 7.00001 10.333Z" fill="#23262F" />
                                                    <path d="M13 6.33301C13.3682 6.33301 13.6667 6.63148 13.6667 6.99967C13.6667 7.36786 13.3682 7.66634 13 7.66634H11C10.6318 7.66634 10.3333 7.36786 10.3333 6.99967C10.3333 6.63148 10.6318 6.33301 11 6.33301H13Z" fill="#23262F" />
                                                    <path d="M3.66668 6.99967C3.66668 6.63148 3.3682 6.33301 3.00001 6.33301H1.00001C0.63182 6.33301 0.333344 6.63148 0.333344 6.99967C0.333343 7.36786 0.63182 7.66634 1.00001 7.66634H3.00001C3.3682 7.66634 3.66668 7.36786 3.66668 6.99967Z" fill="#23262F" />
                                                    <path d="M10.7713 2.28569C11.0316 2.02535 11.4537 2.02535 11.7141 2.28569C11.9744 2.54604 11.9744 2.96815 11.7141 3.2285L10.2999 4.64272C10.0395 4.90307 9.61742 4.90307 9.35707 4.64272C9.09672 4.38237 9.09672 3.96026 9.35707 3.69991L10.7713 2.28569Z" fill="#23262F" />
                                                    <path d="M4.64296 9.35666C4.38262 9.09631 3.9605 9.09631 3.70016 9.35666L2.28594 10.7709C2.02559 11.0312 2.02559 11.4533 2.28594 11.7137C2.54629 11.974 2.9684 11.974 3.22875 11.7137L4.64296 10.2995C4.90331 10.0391 4.90331 9.61701 4.64296 9.35666Z" fill="#23262F" />
                                                    <path d="M11.7141 10.7709C11.9744 11.0313 11.9744 11.4534 11.7141 11.7138C11.4537 11.9741 11.0316 11.9741 10.7713 11.7138L9.35705 10.2995C9.0967 10.0392 9.0967 9.61708 9.35705 9.35673C9.6174 9.09638 10.0395 9.09638 10.2999 9.35673L11.7141 10.7709Z" fill="#23262F" />
                                                    <path d="M4.64303 4.64263C4.90338 4.38228 4.90338 3.96017 4.64303 3.69982L3.22881 2.28561C2.96846 2.02526 2.54635 2.02526 2.286 2.28561C2.02565 2.54596 2.02565 2.96807 2.286 3.22841L3.70022 4.64263C3.96057 4.90298 4.38268 4.90298 4.64303 4.64263Z" fill="#23262F" />
                                                </svg>
                                                Load more</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-12">
                                    <div className="sidebar">
                                        <form className="form-search" >
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Search Post" />
                                                <button type="submit" className="search">
                                                    <i className="fa-solid fa-magnifying-glass" />
                                                </button>
                                            </div>
                                        </form>
                                        <div className="widget category">
                                            <h6 className="heading">Category</h6>
                                            <ul>
                                                <li><Link href="/blog-grid-v1">Blockchain</Link></li>
                                                <li><Link href="/blog-grid-v1">Technology</Link></li>
                                                <li><Link href="/blog-grid-v1">Community</Link></li>
                                                <li><Link href="/blog-grid-v1">Learn &amp; Earn</Link></li>
                                            </ul>
                                        </div>
                                        <div className="widget recent">
                                            <h6 className="heading">Recent Post</h6>
                                            <ul>
                                                <li>
                                                    <div className="image">
                                                        <img src="/assets/images/blog/blog-01.jpg" alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <Link href="#" className="category">LEARN &amp; EARN</Link>
                                                        <Link href="#" className="title">Learn about UI8 coin and earn an All-Access Pass</Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="image">
                                                        <img src="/assets/images/blog/blog-01.jpg" alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <Link href="#" className="category">LEARN &amp; EARN</Link>
                                                        <Link href="#" className="title">Learn about UI8 coin and earn an All-Access Pass</Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="image">
                                                        <img src="/assets/images/blog/blog-01.jpg" alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <Link href="#" className="category">LEARN &amp; EARN</Link>
                                                        <Link href="#" className="title">Learn about UI8 coin and earn an All-Access Pass</Link>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="widget tags">
                                            <h6 className="heading">Popular tags</h6>
                                            <ul>
                                                <li><Link href="/blog-grid-v1">Crypto</Link></li>
                                                <li><Link href="/blog-grid-v1">Virtual Land</Link></li>
                                                <li><Link href="/blog-grid-v1">Metaverse</Link></li>
                                                <li><Link href="/blog-grid-v1">NFT Marketplace</Link></li>
                                                <li><Link href="/blog-grid-v1">Token</Link></li>
                                                <li><Link href="/blog-grid-v1">NFTs</Link></li>
                                                <li><Link href="/blog-grid-v1">Bitcoin</Link></li>
                                                <li><Link href="/blog-grid-v1">Arts</Link></li>
                                                <li><Link href="/blog-grid-v1">Wallet</Link></li>
                                            </ul>
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