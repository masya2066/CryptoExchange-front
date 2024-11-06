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
                                        <img src="/assets/images/logo/log-footer.png" alt="" width={195} height={40}/>
                                    </Link>
                                    <h6>Let's talk! 🤙</h6>
                                    <ul className="list">
                                        <li>
                                            <p>Info.Avitex@Gmail.Com</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div classame="widget">
                                    <div className="widget-link">
                                        <h6 className="title">PRODUCTS</h6>
                                        <ul>
                                            <li><Link href="/login">Profile</Link></li>
                                            <li><Link href="/wallet">Wallet</Link></li>
                                            <li><Link href="/deposit">Deposit</Link></li>
                                        </ul>
                                    </div>
                                    <div className="widget-link s2">
                                        <h6 className="title">SERVICES</h6>
                                        <ul>
                                            <li><Link href="/exchange-crypto">Exchange</Link></li>
                                            {/*<li><Link href="/markets">Deposit to Earn</Link></li>*/}
                                            <li><Link href="/user-profile">Referral Program</Link></li>
                                            <li><Link href="https://t.me/kosolapovBTC">Support</Link></li>
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
                                            <Link href="https://t.me/kosolapovBTC"><img className={"image-icon-footer"}
                                                                src={"assets/images/icon/instagram.svg"}/></Link>
                                        </li>
                                        <li>
                                            <Link href="https://t.me/kosolapovBTC"><img className={"image-icon-footer"}
                                                                src={"assets/images/icon/whatsapp.svg"}/></Link>
                                        </li>
                                        <li>
                                            <Link href="https://t.me/kosolapovBTC"><img className={"image-icon-footer"}
                                                                src={"assets/images/icon/telegram.svg"}/></Link>
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
                            ©{new Date().getFullYear()} Finchain.app. All rights reserved. Terms of Service | Privacy
                            Terms
                        </p>
                    </div>
                </div>
            </footer>

        </>
    )
}
