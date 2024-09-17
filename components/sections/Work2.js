
import Link from "next/link"

export default function Work2() {
    return (
        <>

            <section className="work">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block-text center">
                                <h3 className="heading">How It Work</h3>
                                <p className="fs-20 desc">
                                    Stacks is a production-ready library of stackable content blocks
                                    built in React Native.
                                </p>
                            </div>
                            <div className="work__main" data-aos="fade-up" data-aos-duration={1000}>
                                <div className="work-box">
                                    <div className="image">
                                        <img src="/assets/images/icon/Cloud.png" alt="" />
                                    </div>
                                    <div className="content">
                                        <p className="step">Step 1</p>
                                        <Link href="#" className="title">Download</Link>
                                        <p className="text">
                                            Stacks is a production-ready library of stackable content
                                            blocks built in React Native.
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
                                        <Link href="#" className="title">Connect wallet</Link>
                                        <p className="text">
                                            Stacks is a production-ready library of stackable content
                                            blocks built in React Native.
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
                                            Stacks is a production-ready library of stackable content
                                            blocks built in React Native.
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
                                            Stacks is a production-ready library of stackable content
                                            blocks built in React Native.
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
