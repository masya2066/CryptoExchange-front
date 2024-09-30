'use client'

import VideoPopup from "@/components/elements/VideoPopup"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import store from "@/store";
import {Provider} from "react-redux";
import CreateAccountBanner from "@/components/elements/CreateAccountBanner";
export default function BlogDetails() {
    console.log("BlogDetails")

    return (
        <>
            <Provider store={store}>
            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Blog Details">
                <div>
                    <section className="blog-details">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-md-12">
                                    <div className="blog-main">
                                        <h3 className="title">
                                            Virtual Land in the Metaverse Is Selling for Millions of Dollars
                                        </h3>
                                        <div className="meta">
                                            <Link href="#" className="category btn-action">learn &amp; earn</Link>
                                            <div className="meta-info">
                                                <Link href="#" className="name"><span />Floyd Buckridge</Link>
                                                <Link href="#" className="time">Feb 03, 2021</Link>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <h5>What is the Metaverse?</h5>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Posuere sed nec, vestibulum odio diam amet. In massa auctor
                                                integer est. Morbi viverra neque sagittis varius. Ornare in
                                                nibh dui ornare mattis vel. Volutpat aenean enim sit cras
                                                egestas diam volutpat integer est. Ornare in odio lorem
                                                pharetra tempor, neque sit. Lacus fermentum urna tellus
                                                vulputate aliquam nullam amet, posuere. Magna ligula et ut
                                                sagittis interdum duis. Ut sed tristique tempor nibh bibendum
                                                accumsan, fringilla. Eget rhoncus in hendrerit nascetur odio
                                                consectetur enim tristique. In porttitor.
                                            </p>
                                            <div className="box-image">
                                                <img src="/assets/images/blog/blog-01.jpg" alt="" />
                                                <div className="wrap-video">
                                                    <VideoPopup />
                                                </div>
                                            </div>
                                            <h5>What is Virtual Land?</h5>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus
                                                quis diam integer ridiculus facilisis. Laoreet diam, ipsum
                                                congue augue vel aenean mus. At felis, quis massa elementum
                                                tortor dignissim erat. Pharetra eleifend facilisis sit nisi,
                                                pharetra urna volutpat. Amet lacus sed lorem euismod at diam
                                                neque, mi. Eget congue id phasellus pulvinar id at enim
                                                feugiat cursus. Aliquam egestas vulputate semper at cursus
                                                quam. Augue egestas montes, amet mauris molestie nibh. Aliquam
                                                viverra nec, ornare vitae. Eu etiam donec morbi purus quis
                                                quis nibh. Venenatis cras magna.
                                            </p>
                                            <div className="image">
                                                <img src="/assets/images/blog/blog-details-1.jpg" alt="" />
                                                <img src="/assets/images/blog/blog-details-2.jpg" alt="" />
                                            </div>
                                            <h5>The Frontier of a New Economy</h5>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                                                aenean turpis nec pharetra. Eu massa egestas dolor a facilisi.
                                                Sed amet, ultrices et venenatis vitae ipsum ante. Cras viverra
                                                dui augue nulla nulla phasellus magna. Quam congue ut nibh ut
                                                magna non. Elit elementum cursus curabitur aliquet senectus.
                                                Donec velit ac sed vitae vulputate lorem. Amet, amet feugiat
                                                dui cursus integer luctus. Malesuada eu sodales et arcu varius
                                                ac porta. Eu tincidunt et, tellus enim. Natoque in augue ac
                                                donec tellus. Libero vel magnis leo nunc erat adipiscing
                                                pretium diam. Nibh sagittis consequat massa vel. Tellus
                                                interdum elit velit velit tincidunt egestas nunc, eu. Sit enim
                                                vitae neque at nulla. Libero at facilisis scelerisque velit
                                                gravida pellentesque amet, amet. Massa et viverra vitae, nec
                                                turpis nisi. A suspendisse feugiat ac faucibus.
                                            </p>
                                            <div className="img">
                                                <img src="/assets/images/blog/blog-details-3.jpg" alt="" />
                                            </div>
                                            <h5>The Value Creation Machine</h5>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                                                iaculis laoreet morbi malesuada. Ligula semper faucibus eu
                                                posuere enim diam. Pharetra amet velit lacus, montes, justo.
                                                Tortor, lorem vivamus sit in mi ipsum sit sollicitudin dolor.
                                                Nunc justo cras sed sollicitudin in. Lacus euismod hendrerit
                                                duis pellentesque urna pulvinar lacinia. Platea tempor tellus,
                                                amet odio mauris cursus pharetra. Massa nec, pretium
                                                scelerisque nulla. Quam vitae vulputate et nunc nibh
                                                vestibulum consectetur. Viverra non scelerisque quam rhoncus
                                                id diam. Proin.
                                            </p>
                                        </div>
                                        <div className="details-bottom">
                                            <div className="tags">
                                                <h6>Tags:</h6>
                                                <ul>
                                                    <li><Link href="/blog-grid-v1">Metaverse</Link></li>
                                                    <li><Link href="/blog-grid-v1">NFT Marketplace</Link></li>
                                                    <li><Link href="/blog-grid-v1">Virtual Land</Link></li>
                                                </ul>
                                            </div>
                                            <div className="share">
                                                <h6>Share:</h6>
                                                <ul>
                                                    <li>
                                                        <Link href="#"><i className="fa-brands fa-facebook-f" /></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#"><i className="fa-brands fa-instagram" /></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#"><i className="fa-brands fa-youtube" /></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#"><i className="fa-brands fa-twitter" /></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <form >
                                            <h6 className="heading">Leave a comment</h6>
                                            <div className="form-group">
                                                <input className="form-control" type="text" placeholder="Name" />
                                                <input className="form-control" type="text" placeholder="Email" />
                                            </div>
                                            <div className="form-group">
                                                <textarea className="form-control" cols={30} rows={10} placeholder="Message" />
                                            </div>
                                            <button className="btn-action" type="submit">Send comment</button>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-12">
                                    <div className="sidebar">
                                        <div className="widget recent mt-0">
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
                    <CreateAccountBanner/>
                </div>

            </Layout>
            </Provider>
        </>
    )
}