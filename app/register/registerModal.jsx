import Link from "next/link";
import {useEffect, useRef, useState} from "react";
import authMethods from "@/methods/auth";
import {Provider, useDispatch} from "react-redux";
import {LoaderButton} from "@/app/buttons/LoaderButton";
import store from "@/store";

export default function RegisterModal() {
    const [email, setEmail] = useState('')
    const [isPassword, setIsPassword] = useState('');
    const [isRePassword, setIsRePassword] = useState('');
    const [login, setLogin] = useState('')
    const referralCode = useRef('');
    const [isDisabledBtn, setIsDisabledBtn] = useState(true);
    const [isLoadingReg, setIsLoadingReg] = useState(false)

    const dispatch = useDispatch()

    const register = () => {

        setIsLoadingReg(true)
        authMethods.register(email, isPassword, login, referralCode.current).then((res) => {
            if (res?.status === 200 && res?.data) {
                dispatch({type: 'authStatus', payload: {isAuth: true}})
                setIsLoadingReg(false)
                window.location.href = '/login'
            }
        }).catch(e => {
            dispatch({type: 'authStatus', payload: {isAuth: false}})
            setIsLoadingReg(false)
        })
    }

    useEffect(() => {
        if (isPassword === isRePassword) {
            if (isPassword.length >= 8) {
                if (email.length >= 5 && login.length >= 6) {
                    setIsDisabledBtn(false);
                } else {
                    setIsDisabledBtn(true)
                }
            }
        }
    }, [isPassword, isRePassword, email, login]);

    return (
        <>
            <Provider store={store}>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Please enter a email."
                    />
                </div>
                <div className="form-group">
                    <label>Login
                        <span className="fs-14"> (Excluding special characters)</span></label>
                    <input
                        onChange={(e) => setLogin(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Enter Login"
                    />
                </div>
                <div className="form-group">
                    <label>
                        Password
                        <span>
                            (8 or more characters, including numbers and special characters)
                        </span>
                    </label>
                    <input
                        style={{margin: "10px 0"}}
                        onChange={(e) => setIsPassword(e.target.value)}
                        type="password"
                        className="form-control"
                        placeholder="Please enter a password."
                    />
                    <input
                        style={{margin: "10px 0"}}
                        onChange={(e) => setIsRePassword(e.target.value)}
                        type="password"
                        className="form-control"
                        placeholder="Please re-enter your password."
                    />
                    <div style={{color: "red", paddingLeft: "7px"}}>{isPassword !== isRePassword ? "Passwords do not match" : ""}</div>
                </div>
                <div className="form-group">
                    <label>Referral Code </label>
                    <input
                        onChange={(e) => referralCode.current = e.target.value}
                        type="text"
                        className="form-control"
                        placeholder="Please enter a referral code."
                    />
                </div>
                <LoaderButton text={"Register"} loading={isLoadingReg} disabled={isDisabledBtn} onClick={() => register()}/>
                <div className="bottom">
                    <p>Already have an account?</p>
                    <Link href="/login">Sign In</Link>
                </div>
            </form>
            </Provider>
            </>
    )
}