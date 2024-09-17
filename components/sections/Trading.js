

export default function Trading() {
    return (
        <>

            <section className="trading">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="trading__image">
                                <img src="/assets/images/layout/trading-01.png" alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="trading__content" data-aos="fade-up" data-aos-duration={1000}>
                                <h3 className="heading">3 steps easy trading</h3>
                                <p className="desc fs-20">
                                    Rockie has a variety of features that make it the best place to
                                    start trading
                                </p>
                                <ul className="list-steps">
                                    <li>
                                        <img src="/assets/images/icon/Cloud.png" alt="" />
                                        <div className="content">
                                            <p className="step">Step 1</p>
                                            <h6 className="title">Download</h6>
                                            <p className="fs-16">
                                                Stacks is a production-ready <br />
                                                Library of stackable content blocks built in React Native.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="/assets/images/icon/Wallet.png" alt="" />
                                        <div className="content">
                                            <p className="step">Step 2</p>
                                            <h6 className="title">Connect wallet</h6>
                                            <p className="fs-16">
                                                Stacks is a production-ready <br />
                                                Library of stackable content blocks built in React Native.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="/assets/images/icon/Mining.png" alt="" />
                                        <div className="content">
                                            <p className="step">Step 3</p>
                                            <h6 className="title">Start trading</h6>
                                            <p className="fs-16">
                                                Stacks is a production-ready Library of stackable <br />
                                                content blocks built in React Native.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
