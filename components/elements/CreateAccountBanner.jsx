import Link from "next/link";
import {useSelector} from "react-redux";

export default function CreateAccountBanner() {

    const isAuth = useSelector(state => state.authSlices.isAuth)

    return (
        <>
            {isAuth ? null :
                <section className="section-sale">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="block-text">
                                    <h4 className="heading">Earn up to $300 worth of crypto</h4>
                                    <p className="desc">
                                        Discover how specific cryptocurrencies work — and get a bit of
                                        each crypto to try out for yourself.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="button">
                                    <Link href="/register">Create Account</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
    )
}