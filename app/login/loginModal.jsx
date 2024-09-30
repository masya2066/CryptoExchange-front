'use client'
import Link from "next/link";
import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import authMethods from "@/methods/auth";
import {storage} from "@/storage";
import {LoaderButton} from "@/app/buttons/LoaderButton";
import authSlice, {authStatus} from "@/store/authSlice";
import auth from "@/methods/auth";

export default function LoginModal () {
    const [isEmail, setIsEmail] = useState('');
    const [isPassword, setIsPassword] = useState('');
    const isRemember = useRef(false)
    const [isLoadingBtn, setIsLoadingBtn] = useState(false)
    const [isDisabledBtn, setIsDisabledBtn] = useState(true)
    const dispatch = useDispatch()

    const logIn = () => {
        setIsLoadingBtn(true)
        authMethods.login(isEmail, isPassword).then((res) => {
            dispatch(authStatus({isAuth: true}))
            if (res?.status === 200 && res?.data) {
                localStorage.setItem(storage.accessToken, res.data.access_token)
                localStorage.setItem(storage.refreshToken, res.data.refresh_token)
                setIsLoadingBtn(false)
                window.location.href = '/user-profile'
            }
        }).catch(e => {
            setIsLoadingBtn(false)
            dispatch(authStatus({isAuth: false}))
        })
    }



    useEffect(() => {
        if (isEmail.length >= 5 && isPassword.length >= 8) {
            setIsDisabledBtn(false);
        } else {
            setIsDisabledBtn(true);
        }
    }, [isPassword, isEmail]);


    return (
        <div className="col-md-12">
            <div className="flat-tabs">
                <div className="content-tab">
                    <div className="content-inner" style={{display: "block"}}>
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email/Login</label>
                                <input
                                    onChange={(e) => setIsEmail(e.target.value)}
                                    type="email" className="form-control" id="exampleInputEmail1"
                                    placeholder="Please fill in the email form."/>
                            </div>
                            <div className="form-group s1">
                                <label>Password</label>
                                <input
                                    onChange={(e) => setIsPassword(e.target.value)}
                                    type="password" className="form-control" placeholder="Please enter a password."/>
                            </div>
                            <div className="form-group form-check">
                                <div>
                                    <input type="checkbox" className="form-check-input"/>
                                    <label className="form-check-label">Remember Me</label>
                                </div>
                                <p className={"forgot-password-button"}>Forgot Password?</p>
                            </div>
                            <LoaderButton
                                          onClick={() => logIn()}
                                          text={"Login"}
                                          disabled={isDisabledBtn}
                                          loading={isLoadingBtn}
                                          type="submit"
                                          className="btn-action"/>
                            <div className="bottom">
                                <p>Not a member?</p>
                                <Link href="/register">Register</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}