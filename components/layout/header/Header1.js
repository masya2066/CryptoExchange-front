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
import {useNavigate} from "react-router-dom";
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
        dispatch(authStatus({isAuth: false}))
        window.location.href = '/login';
    }

    useEffect(() => {

    }, [isAuth]);

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
                                    <ThemeSwitch />
                                    <Menu as="div" className="dropdown notification">
                                        <Menu.Button className="btn dropdown-toggle" type="button" id="dropdownMenuButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="icon-notification" />
                                        </Menu.Button>
                                        <Menu.Items as="div" className="dropdown-menu show" aria-labelledby="dropdownMenuButton3">
                                            <div className="dropdown-item">
                                                <div className="media server-log">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-server">
                                                        <rect x={2} y={2} width={20} height={8} rx={2} ry={2} />
                                                        <rect x={2} y={14} width={20} height={8} rx={2} ry={2} />
                                                        <line x1={6} y1={6} x2={6} y2={6} />
                                                        <line x1={6} y1={18} x2={6} y2={18} />
                                                    </svg>
                                                    <div className="media-body">
                                                        <div className="data-info">
                                                            <h6 >Server Rebooted</h6>
                                                            <p >45 min ago</p>
                                                        </div>
                                                        <div className="icon-status">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                                                                <line x1={18} y1={6} x2={6} y2={18} />
                                                                <line x1={6} y1={6} x2={18} y2={18} />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dropdown-item">
                                                <div className="media">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart">
                                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
                                                        </path>
                                                    </svg>
                                                    <div className="media-body">
                                                        <div className="data-info">
                                                            <h6 >Licence Expiring Soon</h6>
                                                            <p >8 hrs ago</p>
                                                        </div>
                                                        <div className="icon-status">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                                                                <line x1={18} y1={6} x2={6} y2={18} />
                                                                <line x1={6} y1={6} x2={18} y2={18} />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dropdown-item">
                                                <div className="media file-upload">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text">
                                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z">
                                                        </path>
                                                        <polyline points="14 2 14 8 20 8" />
                                                        <line x1={16} y1={13} x2={8} y2={13} />
                                                        <line x1={16} y1={17} x2={8} y2={17} />
                                                        <polyline points="10 9 9 9 8 9" />
                                                    </svg>
                                                    <div className="media-body">
                                                        <div className="data-info">
                                                            <h6 >Kelly Portfolio.pdf</h6>
                                                            <p >670 kb</p>
                                                        </div>
                                                        <div className="icon-status">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                                                                <polyline points="20 6 9 17 4 12" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Menu.Items>
                                    </Menu>
                                    <div className="d-block d-lg-none">
                                        <div className={`mobile-button d-block ${isMobileMenu ? "active" : ""}`} onClick={handleMobileMenu}><span /></div>{/* /.mobile-button */}
                                    </div>
                                    {isAuth ? <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="wallet">
                                                <Link href="/wallet"> Wallet </Link>
                                            </div>
                                            <div className="wallet">
                                                <Link href="/deposit"> Deposit </Link>
                                            </div>
                                        </div> :
                                        <>
                                            <div className="wallet">
                                                <Link href="/login"> Sign In </Link>
                                            </div>
                                            <div className="wallet">
                                                <Link href="/register"> Sign Up </Link>
                                            </div>
                                        </>
                                    }
                                    {isAuth ?
                                        <Menu as="div" className="dropdown user">
                                            <Menu.Button className="btn dropdown-toggle" type="button" id="dropdownMenuButton4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <img src="/assets/images/avt/avt-01.jpg" alt="" />
                                            </Menu.Button>
                                            <Menu.Items as="div" className="dropdown-menu show" aria-labelledby="dropdownMenuButton4">
                                                <Link className="dropdown-item" href="/user-profile"><i className="bx bx-user font-size-16 align-middle me-1" />
                                                    <span>Profile</span></Link>
                                                {isAuth ? <Link className="dropdown-item" href="/deposit"><i className="bx bx-wallet font-size-16 align-middle me-1" />
                                                    <span>Deposit</span></Link> : null}
                                                <Link className="dropdown-item d-block" href="#"><span className="badge bg-success float-end">11</span><i className="bx bx-wrench font-size-16 align-middle me-1" />
                                                    <span>Settings</span></Link>
                                                <div className="dropdown-divider" />
                                                <Link
                                                    onClick={() => logout()}
                                                    className="dropdown-item text-danger" href=""><i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />
                                                    <span>Logout</span></Link>
                                            </Menu.Items>
                                        </Menu> : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <MobileMenu isMobileMenu={isMobileMenu} />
            </header>
                </Provider>

        </>
    )
}
