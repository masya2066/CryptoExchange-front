
import Link from "next/link"

export default function Work1() {
    return (
        <>

            <section className="work">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block-text center">
                                <h3 className="heading">How It Works</h3>
                                <p className="fs-20 desc">
                                    A quick and easy guide to using our platform.
                                </p>
                            </div>
                            <div className="work__main">
                                <div className="work-box">
                                    <div className="image">
                                        <img src="/assets/images/icon/Cloud.png" alt="" />
                                    </div>
                                    <div className="content">
                                        <p className="step">Step 1</p>
                                        <Link href="#" className="title">Download</Link>
                                        <p className="text">
                                            Go to the official website or download FinChain from your app store.
                                        </p>
                                    </div>
                                    <img className="line" src="/assets/images/icon/connect-line.png" alt="" />
                                </div>
                                <div className="work-box">
                                    <div className="image">
                                        <img src="/assets/images/icon/Wallet.png" alt="" />
                                    </div>
                                    <div className="content">
                                        <p className="step">Step 2</p>
                                        <Link href="#" className="title">Sign Up and Create Wallet
                                        </Link>
                                        <p className="text">
                                            Register your account and set up your secure cryptocurrency wallet.
                                        </p>
                                    </div>
                                    <img className="line" src="/assets/images/icon/connect-line.png" alt="" />
                                </div>
                                <div className="work-box">
                                    <div className="image">
                                        <img src="/assets/images/icon/Mining.png" alt="" />
                                    </div>
                                    <div className="content">
                                        <p className="step">Step 3</p>
                                        <Link href="#" className="title">Start trading</Link>
                                        <p className="text">
                                            Deposit funds and begin trading cryptocurrencies on our platform.
                                        </p>
                                    </div>
                                    <img className="line" src="/assets/images/icon/connect-line.png" alt="" />
                                </div>
                                <div className="work-box">
                                    <div className="image">
                                        <img src="/assets/images/icon/Comparison.png" alt="" />
                                    </div>
                                    <div className="content">
                                        <p className="step">Step 4</p>
                                        <Link href="#" className="title">Earn money</Link>
                                        <p className="text">
                                            Watch your investments grow and profit from successful trades.
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
