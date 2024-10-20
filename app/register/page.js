'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import {useRef, useState} from "react"
import RegisterModal from "@/app/register/registerModal";
import store from "@/store";
import {Provider} from "react-redux";
import CreateAccountBanner from "@/components/elements/CreateAccountBanner";
export default function Register() {

    return (
        <>
            <Provider store={store}>
            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Sing up">
                <div>
                    <section className="register">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="block-text center">
                                        <h3 className="heading">Sign up To Finchain</h3>
                                        <p className="desc fs-20">
                                            Sign up in advance and enjoy the event benefits
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="flat-tabs">
                                        <div className="content-tab">
                                            <div className="content-inner" style={{ display: "block"}}>
                                                <RegisterModal/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <CreateAccountBanner/>
                </div>

            </Layout>
            </Provider>
        </>
    )
}