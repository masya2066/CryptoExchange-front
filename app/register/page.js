'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
export default function Register() {
    const [flatTabs, setFlatTabs] = useState(1)
    const handleFlatTabs = (index) => {
        setFlatTabs(index)
    }
    return (
        <>

            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Register">
                <div>
                    <section className="register">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="block-text center">
                                        <h3 className="heading">Register To Rockie</h3>
                                        <p className="desc fs-20">
                                            Register in advance and enjoy the event benefits
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="flat-tabs">
                                    <ul className="menu-tab">
                                            <li className={flatTabs === 1 ? "active" : ""} onClick={() => handleFlatTabs(1)}><h6 className="fs-16">Email</h6></li>
                                            <li className={flatTabs === 2 ? "active" : ""} onClick={() => handleFlatTabs(2)}><h6 className="fs-16">Mobile</h6></li>
                                        </ul>
                                        <div className="content-tab">
                                            <div className="content-inner" style={{ display: `${flatTabs === 1 ? "block" : "none"}` }}>
                                                <form>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Email/ID</label>
                                                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Please fill in the email form." />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Password
                                                            <span>(8 or more characters, including numbers and special
                                                                characters)</span></label>
                                                        <input type="password" className="form-control" placeholder="Please enter a password." />
                                                        <input type="password" className="form-control" placeholder="Please re-enter your password." />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>NickName
                                                            <span className="fs-14">(Excluding special characters)</span></label>
                                                        <input type="text" className="form-control" placeholder="Enter Email" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Country </label>
                                                        <select className="form-control">
                                                            <option>South Korea (+82)</option>
                                                            <option>Vietnamese (+84)</option>
                                                            <option>South Korea (+82)</option>
                                                            <option>South Korea (+82)</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Phone
                                                            <span className="fs-14">(Enter numbers only)</span></label>
                                                        <input type="text" className="form-control" placeholder="ex) 01012345678 (without '-')" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>UID Code </label>
                                                        <input type="text" className="form-control" placeholder="Please enter your invitation code." />
                                                    </div>
                                                    <button type="submit" className="btn-action">
                                                        Pre-Registration
                                                    </button>
                                                    <div className="bottom">
                                                        <p>Already have an account?</p>
                                                        <Link href="/login">Login</Link>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="content-inner" style={{ display: `${flatTabs === 2 ? "block" : "none"}` }}>
                                                <form>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Mobile Phone</label>
                                                        <div>
                                                            <select className="form-control">
                                                                <option>+1</option>
                                                                <option>+84</option>
                                                                <option>+82</option>
                                                                <option>+32</option>
                                                            </select>
                                                            <input type="text" className="form-control" placeholder="Your Phone number" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Password
                                                            <span>(8 or more characters, including numbers and special
                                                                characters)</span></label>
                                                        <input type="password" className="form-control" placeholder="Please enter a password." />
                                                        <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Please re-enter your password." />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>NickName
                                                            <span className="fs-14">(Excluding special characters)</span></label>
                                                        <input type="text" className="form-control" placeholder="Enter Email" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Country </label>
                                                        <select className="form-control" id="exampleFormControlSelect1">
                                                            <option>South Korea (+82)</option>
                                                            <option>Vietnamese (+84)</option>
                                                            <option>South Korea (+82)</option>
                                                            <option>South Korea (+82)</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Phone
                                                            <span className="fs-14">(Enter numbers only)</span></label>
                                                        <input type="text" className="form-control" placeholder="ex) 01012345678 (without '-')" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>UID Code </label>
                                                        <input type="text" className="form-control" placeholder="Please enter your invitation code." />
                                                    </div>
                                                    <button type="submit" className="btn-action">
                                                        Pre-Registration
                                                    </button>
                                                    <div className="bottom">
                                                        <p>Already have an account?</p>
                                                        <Link href="/login">Login</Link>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-sale">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="block-text">
                                        <h4 className="heading">Earn up to $25 worth of crypto</h4>
                                        <p className="desc">
                                            Discover how specific cryptocurrencies work — and get a bit of
                                            each crypto to try out for yourself.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="button">
                                        <Link href="#">Create Account</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}