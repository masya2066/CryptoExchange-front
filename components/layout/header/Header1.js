import { Menu } from '@headlessui/react'
import dynamic from 'next/dynamic'
import Link from "next/link"
import MainMenu from '../Menu'
import MobileMenu from '../MobileMenu'
import {Provider, useDispatch, useSelector} from "react-redux";
import store from "@/store";
import {storage} from "@/storage";
import {useEffect, useState} from "react";
import authMethods from "@/methods/auth";
import {authStatus} from "@/store/authSlice";

const ThemeSwitch = dynamic(() => import('@/components/elements/ThemeSwitch'), {
    ssr: false,
})
export default function Header1({ scroll, isMobileMenu, handleMobileMenu }) {

    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.authSlices.isAuth)

    const logout = () => {
        authMethods.logout()
        localStorage.removeItem(storage.accessToken)
        localStorage.removeItem(storage.accessToken)
        localStorage.removeItem(storage.user)
        dispatch(authStatus({isAuth: false}))
        window.location.href = '/login';
    }

    useEffect(() => {
        authMethods.userInfo()
            .then(res => {
                if (res.data && res.status == 200) {
                    dispatch(authStatus({isAuth: true}))
                } else {
                    dispatch(authStatus({isAuth: false}))
                    localStorage.removeItem(storage.accessToken)
                    localStorage.removeItem(storage.accessToken)
                    localStorage.removeItem(storage.user)
                }
            }).catch(e => {
                console.log(e)
            localStorage.removeItem(storage.accessToken)
            localStorage.removeItem(storage.accessToken)
            localStorage.removeItem(storage.user)
        })
    }, []);

    return (
        <>
            <Provider store={store}>
            <header id="header_main" className={`header ${scroll ? "is-fixed is-small" : ""}`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="header__body d-flex justify-content-between">
                                <div className="header__left">
                                    <div className="logo">
                                        <Link className="light" href="/">
                                            <img src="/assets/images/logo/logo.png" alt="" width={120} height={25} data-retina="assets/images/logo/logo@2x.png" data-width={120} data-height={25} />
                                        </Link>
                                        <Link className="dark" href="/">
                                            <img src="/assets/images/logo/logo-dark.png" alt="" width={120} height={25} data-retina="assets/images/logo/logo-dark@2x.png" data-width={120} data-height={25} />
                                        </Link>
                                    </div>
                                    <div className="left__main">
                                        <div className="d-none d-lg-block">
                                            <nav id="main-nav" className="main-nav">
                                                <MainMenu />
                                            </nav>
                                            {/* #main-nav */}
                                        </div>
                                    </div>
                                </div>
                                <div className="header__right">
                                    <ThemeSwitch/>
                                    {isAuth ? <div className={"header-sign-buttons"}>
                                            <div className="wallet">
                                                <Link href="/wallet"> Wallet </Link>
                                            </div>
                                            <div className="wallet">
                                                <Link href="/deposit"> Deposit </Link>
                                            </div>
                                        </div> :
                                        <div className={"header-sign-buttons"}>
                                            <div className="wallet">
                                                <Link href="/login"> Sign In </Link>
                                            </div>
                                            <div className="wallet">
                                                <Link href="/register"> Sign Up </Link>
                                            </div>
                                        </div>
                                    }
                                    <div className="d-block d-lg-none">
                                        <div className={`mobile-button d-block ${isMobileMenu ? "active" : ""}`}
                                             onClick={handleMobileMenu}><span/></div>
                                        {/* /.mobile-button */}
                                    </div>
                                    {isAuth ?
                                        <Menu as="div" className="dropdown user">
                                            <Menu.Button className="btn dropdown-toggle" type="button"
                                                         id="dropdownMenuButton4" data-toggle="dropdown"
                                                         aria-haspopup="true" aria-expanded="false">
                                                <img src="/assets/images/avt/avt.png" alt=""/>
                                            </Menu.Button>
                                            <Menu.Items as="div" className="dropdown-menu show"
                                                        aria-labelledby="dropdownMenuButton4">
                                                <Link className="dropdown-item" href="/user-profile"><i
                                                    className="bx bx-user font-size-16 align-middle me-1"/>
                                                    <span>Profile</span></Link>
                                                {isAuth ? <Link className="dropdown-item" href="/deposit"><i
                                                    className="bx bx-wallet font-size-16 align-middle me-1"/>
                                                    <span>Deposit</span></Link> : null}
                                                <Link className="dropdown-item d-block" href="#"><span
                                                    className="badge bg-success float-end">11</span><i
                                                    className="bx bx-wrench font-size-16 align-middle me-1"/>
                                                    <span>Settings</span></Link>
                                                <div className="dropdown-divider"/>
                                                <Link
                                                    onClick={() => logout()}
                                                    className="dropdown-item text-danger" href=""><i
                                                    className="bx bx-power-off font-size-16 align-middle me-1 text-danger"/>
                                                    <span>Logout</span></Link>
                                            </Menu.Items>
                                        </Menu> : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <MobileMenu isMobileMenu={isMobileMenu}/>
            </header>
            </Provider>

        </>
    )
}
