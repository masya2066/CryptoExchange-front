
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Contact() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Contact">
                <div>
                    <section className="contact">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-md-12">
                                    <div className="image">
                                        <img src="/assets/images/layout/contact.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-md-12">
                                    <div className="contact-main">
                                        <div className="block-text center">
                                            <h3 className="heading">Leave a message for us</h3>
                                            <p className="desc fs-20">Get in touch with Rockie</p>
                                        </div>
                                        <form>
                                            <div className="form-group">
                                                <label>Your name</label>
                                                <input type="text" className="form-control" placeholder="Enter your name" />
                                            </div>
                                            <div className="form-group">
                                                <label>Email </label>
                                                <input type="text" className="form-control" placeholder="Enter mail" />
                                            </div>
                                            <div className="form-group">
                                                <label>Subject </label>
                                                <select className="form-control" id="exampleFormControlSelect1">
                                                    <option>NFT Items</option>
                                                    <option>NFT Items 1</option>
                                                    <option>NFT Items 1</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label>Message </label>
                                                <textarea cols={30} rows={10} className="form-control" placeholder="Enter your message" />
                                            </div>
                                            <button type="submit" className="btn-action">Send message</button>
                                        </form>
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