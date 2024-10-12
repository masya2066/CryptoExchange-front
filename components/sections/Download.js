
import Link from "next/link"

export default function Download() {
    return (
        <>

            <section className="download">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="download__content" data-aos="fade-up" data-aos-duration={1000}>
                                <h3 className="heading">Free your money &amp; Invest with confident</h3>
                                <p className="fs-20 decs">
                                    With Crypto Trade, you can be sure your trading skills are
                                    matched
                                </p>
                                <ul className="list">
                                    <li>
                                        <h6 className="title">
                                            <span className="icon-check" />Buy, Sell, And Trade On The
                                            Go
                                        </h6>
                                        <p className="text">
                                            Manage your holdings from your mobile device
                                        </p>
                                    </li>
                                    <li>
                                        <h6 className="title">
                                            <span className="icon-check" />Take Control Of Your Wealth
                                        </h6>
                                        <p className="text">
                                            Rest assured you (and only you) have access to your funds
                                        </p>
                                    </li>
                                </ul>
                                <div className="group-button">
                                    <Link href="#"><img src="/assets/images/icon/googleplay.png" alt="" /></Link>
                                    <Link href="#"><img src="/assets/images/icon/appstore.png" alt="" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="download__image">
                                <div className="button">Scan To Download</div>
                                <img src="/assets/images/layout/download.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
