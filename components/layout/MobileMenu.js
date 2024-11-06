'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Providers from "@/components/layout/Providers";
import {useDispatch, useSelector} from "react-redux";
import authMethods from "@/methods/auth";
import {storage} from "@/storage";
import {authStatus} from "@/store/authSlice";

export default function MobileMenu({ isMobileMenu }) {
    const [isActive, setIsActive] = useState(0)

    const handleClick = (key) => {
        setIsActive(prevState => prevState === key ? null : key)
    }
    const pathname = usePathname()
    const [currentMenuItem, setCurrentMenuItem] = useState("")

    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.authSlices.isAuth)


    useEffect(() => {
        setCurrentMenuItem(pathname)
    }, [pathname])

    const logout = () => {
        authMethods.logout()
        localStorage.removeItem(storage.accessToken)
        localStorage.removeItem(storage.accessToken)
        localStorage.removeItem(storage.user)
        dispatch(authStatus({isAuth: false}))
        window.location.href = '/login';
    }

    const checkCurrentMenuItem = (path) => currentMenuItem === path ? "current-item" : ""
    const checkParentActive = (paths) => paths.some(path => currentMenuItem.startsWith(path)) ? "current-menu-item" : ""
    return (
        <>
            <Providers>
            <nav id="main-nav-mobi" className="main-nav" style={{ display: `${isMobileMenu ? "block" : "none"}` }}>
                <ul id="menu-primary-menu" className="menu">
                    <li className={`menu-item menu-item-has-children ${checkParentActive(["/home-v2", "/home-v3"])}`}>
                        <Link href="#">Home </Link>
                    </li>
                    <li className={`menu-item menu-item-has-children ${checkParentActive(["/exchange-crypto",
                        "/buy-crypto-confirm",
                        "/buy-crypto-details",])}`}>
                        <Link href="/exchange-crypto">Exchange Crypto</Link>
                        {/*<span className="arrow" onClick={() => handleClick(2)}/>*/}
                        {/*<ul className="sub-menu" style={{display: `${isActive == 2 ? "block" : "none"}`}}>*/}
                        {/*    <li className={`menu-item ${checkCurrentMenuItem("/buy-crypto-select")}`}>*/}
                        {/*        <Link href="/buy-crypto-select">Buy/Sell Crypto Select</Link>*/}
                        {/*    </li>*/}
                        {/*    <li className={`menu-item ${checkCurrentMenuItem("/buy-crypto-confirm")}`}>*/}
                        {/*        <Link href="/buy-crypto-confirm">Buy/Sell Crypto Confirm</Link>*/}
                        {/*    </li>*/}
                        {/*    <li className={`menu-item ${checkCurrentMenuItem("/buy-crypto-details")}`}>*/}
                        {/*        <Link href="/buy-crypto-details">Buy/Sell Crypto Details</Link>*/}
                        {/*    </li>*/}
                        {/*</ul>*/}
                    </li>
                    {
                        isAuth ?
                            <>
                                <li className={`menu-item menu-item-has-children`}>
                                    <Link href="/user-profile">Profile </Link>
                                </li>
                                <li className={`menu-item menu-item-has-children`}>
                                    <Link href="/wallet">Wallet </Link>
                                </li>
                                <li className={`menu-item menu-item-has-children`}>
                                    <Link href="/deposit">Deposit </Link>
                                </li>
                                <li className={`menu-item menu-item-has-children`}>
                                    <Link onClick={() => logout()} href="/login">Logout </Link>
                                </li>
                            </> :
                            <>
                                <li className={`menu-item menu-item-has-children ${checkParentActive(["/home-v2", "/home-v3"])}`}>
                                    <Link href="/login">Sign In </Link>
                                </li>
                                <li className={`menu-item menu-item-has-children ${checkParentActive(["/home-v2", "/home-v3"])}`}>
                                    <Link href="/register">Sign Up </Link>
                                </li>
                            </>
                    }
                </ul>
            </nav>
            </Providers>
        </>
    )
}
