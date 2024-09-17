import Link from "next/link"

export default function Footer2() {
    return (
        <>

            <footer className="footer style-2">
                <div className="container">
                    <div className="footer__main">
                        <div className="row">
                            <div className="col-xl-4 col-md-6">
                                <div className="info">
                                    <Link href="/" className="logo">
                                        <img src="/assets/images/logo/log-footer.png" alt="" />
                                    </Link>
                                    <h6>Let's talk! 🤙</h6>
                                    <ul className="list">
                                        <li>
                                            <p>+12 345 678 9101</p>
                                        </li>
                                        <li>
                                            <p>Info.Avitex@Gmail.Com</p>
                                        </li>
                                        <li>
                                            <p>
                                                Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi
                                                96522
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="widget">
                                    <div className="widget-link">
                                        <h6 className="title">PRODUCTS</h6>
                                        <ul>
                                            <li><Link href="/spot">Spot</Link></li>
                                            <li><Link href="#">Inverse Perpetual</Link></li>
                                            <li><Link href="#">USDT Perpetual</Link></li>
                                            <li><Link href="/exchange">Exchange</Link></li>
                                            <li><Link href="#">Launchpad</Link></li>
                                            <li><Link href="#">Binance Pay</Link></li>
                                        </ul>
                                    </div>
                                    <div className="widget-link s2">
                                        <h6 className="title">SERVICES</h6>
                                        <ul>
                                            <li><Link href="/buy-crypto-select">Buy Crypto</Link></li>
                                            <li><Link href="/markets">Markets</Link></li>
                                            <li><Link href="#">Tranding Fee</Link></li>
                                            <li><Link href="#">Affiliate Program</Link></li>
                                            <li><Link href="#">Referral Program</Link></li>
                                            <li><Link href="#">API</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-12">
                                <div className="footer-contact">
                                    <h5>Newletters</h5>
                                    <p>
                                        Subscribe our newsletter to get more free design course and
                                        resource.
                                    </p>
                                    <form >
                                        <input type="email" placeholder="Enter your email" required />
                                        <button type="submit" className="btn-action">Submit</button>
                                    </form>
                                    <ul className="list-social">
                                        <li>
                                            <Link href="#"><span className="icon-facebook-f" /></Link>
                                        </li>
                                        <li>
                                            <Link href="#"><span className="icon-instagram" /></Link>
                                        </li>
                                        <li>
                                            <Link href="#"><span className="icon-youtube" /></Link>
                                        </li>
                                        <li>
                                            <Link href="#"><span className="icon-twitter" /></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="footer__bottom">
                        <p>
                            ©{new Date().getFullYear()} Rockie.com. All rights reserved. Terms of Service | Privacy
                            Terms
                        </p>
                    </div>
                </div>
            </footer>

        </>
    )
}
