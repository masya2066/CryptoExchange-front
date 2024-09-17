
import Link from "next/link"

export default function Join() {
    return (
        <>

            <section className="join">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="join__images">
                                <img src="/assets/images/layout/join.png" alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="join__content" data-aos="fade-up" data-aos-duration={1000}>
                                <h3 className="heading">Join our trading global community</h3>
                                <p className="desc">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sit
                                    amet, sagittis leo aliquam nunc etiam. Ac et mauris et nisi
                                    molestie.
                                </p>
                                <Link href="#" className="btn-action">Join now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
