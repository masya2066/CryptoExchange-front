
import Link from "next/link"

export default function Banner3() {
    return (
        <>

            <section className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="banner__content">
                                <h2 className="title">Learn, buy &amp; sell crypto easily</h2>
                                <p className="fs-20 desc">
                                    Rockie is the easiest place to buy and sell cryptocurrency. Sign
                                    up and get started today.
                                </p>
                                <Link href="#" className="btn-action"><span>Start trading</span></Link>
                            </div>
                            <div className="banner__image">
                                <img src="/assets/images/layout/banner-03.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
