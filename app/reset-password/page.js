'use client'
import CreateAccountBanner from "@/components/elements/CreateAccountBanner";
import Layout from "@/components/layout/Layout";
import {Provider} from "react-redux";
import store from "@/store";
import {useState} from "react";
import Link from "next/link";
import {LoaderButton} from "@/app/buttons/LoaderButton";
import LoadButton from "@/components/elements/LoadingButton";

export default function ResetPassword() {

    const [isErrText, setIsErrText] = useState("");
    const [isEmail, setIsEmail] = useState("");
    const [isDisabledBtn, setIsDisabledBtn] = useState(true)
    const [isError, setIsError] = useState(false)
    const [isLoadingBtn, setIsLoadingBtn] = useState(false)

    return (
        <>
            <Provider store={store}>
                <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Reset Password">
                    <div>
                        <section className="reset-password">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="block-text center">
                                            <h3 className="heading">Reset your password</h3>
                                            <p className="desc fs-20">
                                                You can reset your password by your e-mail
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="flat-tabs">
                                            <div className="content-tab">
                                            <div className="reset-container">
                                                <form className={"reset-form"}>
                                                    <div className="reset-password-inputs-container">
                                                        <label htmlFor="exampleInputEmail1">E-Mail</label>
                                                        <input
                                                            onChange={(e) => setIsEmail(e.target.value)}
                                                            type="email" className="form-control"
                                                            id="exampleInputEmail1"
                                                            placeholder="Please fill in the email form."/>
                                                    </div>
                                                    <div className={"modal-error-container"}>
                                                        {isError &&
                                                            <p className={"modal-error-text"}>{isErrText}</p>
                                                        }
                                                    </div>
                                                        <LoadButton
                                                            onClick={() => {}}
                                                            label={"Reset password"}
                                                            disabled={isDisabledBtn}
                                                            loading={isLoadingBtn}
                                                            type="submit"
                                                            className="btn-action"/>
                                                </form>
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