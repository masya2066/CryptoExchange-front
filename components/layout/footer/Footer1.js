import Link from "next/link"

export default function Footer1() {
    return (
        <>

            <footer className="footer">
                <div className="container">
                    <div className="footer__main">
                        <div className="row">
                            <div className="col-xl-4 col-md-8">
                                <div className="info">
                                    <Link href="/" className="logo">
                                        <img src="/assets/images/logo/log-footer.png" alt=""  width={160} height={40}/>
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
                            <div className="col-xl-2 col-md-4">
                                <div className="widget-link s1">
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
                            </div>
                            <div className="col-xl-2 col-md-4">
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
                            <div className="col-xl-2 col-md-4">
                                <div className="widget-link s3">
                                    <h6 className="title">SUPPORT</h6>
                                    <ul>
                                        <li><Link href="#">Bybit Learn</Link></li>
                                        <li><Link href="#">Help Center</Link></li>
                                        <li><Link href="/user-profile">User Feedback</Link></li>
                                        <li><Link href="#">Submit a request</Link></li>
                                        <li><Link href="#">API Documentation</Link></li>
                                        <li><Link href="#">Trading Rules</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4">
                                <div className="widget-link s4">
                                    <h6 className="title">ABOUT US</h6>
                                    <ul>
                                        <li><Link href="#">About Bybit</Link></li>
                                        <li><Link href="#">Authenticity Check</Link></li>
                                        <li><Link href="#">Careers</Link></li>
                                        <li><Link href="#">Business Contacts</Link></li>
                                        <li><Link href="/blog-default">Blog</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid bg">
                    <div className="footer__bottom">
                        <p>Copyright © {new Date().getFullYear()} Themesflat</p>
                        <ul className="list-social">
                            <li>
                                <Link href="#"><i className="fa-brands fa-facebook" /></Link>
                            </li>
                            <li>
                                <Link href="#"><i className="fa-brands fa-twitter" /></Link>
                            </li>
                            <li>
                                <Link href="#"><i className="fa-brands fa-instagram" /></Link>
                            </li>
                            <li>
                                <Link href="#"><i className="fa-brands fa-linkedin" /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>

        </>
    )
}
