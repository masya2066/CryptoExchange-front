
import Link from "next/link"
import VideoPopup from "../elements/VideoPopup"

export default function Blog2() {
    return (
        <>

            <section className="blog-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block-text">
                                <h3 className="heading">Learn And Earn</h3>
                                <p className="desc">
                                    Stacks is a production-ready library of stackable <br />
                                    content blocks built in React Native.
                                </p>
                                <Link href="#" className="btn-action-3">See all article</Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="blog-box s1">
                                <div className="box-image">
                                    <img src="/assets/images/blog/blog-v2.1.png" alt="" />
                                    <div className="wrap-video">
                                        <VideoPopup />
                                    </div>
                                </div>
                                <div className="box-content">
                                    <div className="left">
                                        <Link href="#" className="category btn-action">learn &amp; earn</Link>
                                        <Link href="#" className="title">Learn about UI8 coin and earn an All-Access Pass</Link>
                                        <p className="text fs-18">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Facilisi id vestibulum sem
                                        </p>
                                    </div>
                                    <div className="right">
                                        <Link href="#" className="btn-action-3">Learn more</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="blog-main">
                                <div className="blog-box">
                                    <div className="box-image">
                                        <img src="/assets/images/blog/blog-v2.2.png" alt="" />
                                        <div className="wrap-video">
                                            <VideoPopup />
                                        </div>
                                    </div>
                                    <div className="box-content">
                                        <Link href="#" className="category btn-action">learn &amp; earn</Link>
                                        <Link href="#" className="title">Learn about UI8 coin and earn an All-Access Pass</Link>
                                        <p className="text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                    </div>
                                </div>
                                <div className="blog-box">
                                    <div className="box-image">
                                        <img src="/assets/images/blog/blog-v2.3.png" alt="" />
                                        <div className="wrap-video">
                                            <VideoPopup />
                                        </div>
                                    </div>
                                    <div className="box-content">
                                        <Link href="#" className="category btn-action">learn &amp; earn</Link>
                                        <Link href="#" className="title">Learn about UI8 coin and earn an All-Access Pass</Link>
                                        <p className="text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                    </div>
                                </div>
                                <div className="blog-box">
                                    <div className="box-image">
                                        <img src="/assets/images/blog/blog-v2.4.png" alt="" />
                                        <div className="wrap-video">
                                            <VideoPopup />
                                        </div>
                                    </div>
                                    <div className="box-content">
                                        <Link href="#" className="category btn-action">learn &amp; earn</Link>
                                        <Link href="#" className="title">Learn about UI8 coin and earn an All-Access Pass</Link>
                                        <p className="text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
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
