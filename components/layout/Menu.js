'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux";
import {storage} from "@/storage";
import authMethods from "@/methods/auth";

export default function MainMenu() {
    const pathname = usePathname()
    const [currentMenuItem, setCurrentMenuItem] = useState("")

    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.authSlices.isAuth)

    useEffect(() => {
        if (!localStorage.getItem(storage.accessToken) || !localStorage.getItem(storage.refreshToken)) {
            dispatch({type: 'authStatus', payload: {isAuth: false}})
        } else {
        }
    }, [isAuth]);

    useEffect(() => {
        setCurrentMenuItem(pathname)
    }, [pathname])

    const checkCurrentMenuItem = (path) => currentMenuItem === path ? "current-item" : ""
    const checkParentActive = (paths) => paths.some(path => currentMenuItem.startsWith(path)) ? "current-menu-item" : ""

    return (
        <>
            <ul id="menu-primary-menu" className="menu">
                <li href="/" className={`menu-item menu-item-has-children ${checkParentActive(["/home-v2", "/home-v3"])}`}>
                    <Link
                        style={{width: '100%'}}
                        href="/">Home </Link>
                    {/*<ul className="sub-menu">*/}
                    {/*    <li className={`menu-item ${checkCurrentMenuItem("/")}`}>*/}
                    {/*        <Link href="/">Home 01</Link>*/}
                    {/*    </li>*/}
                    {/*    <li className={`menu-item ${checkCurrentMenuItem("/home-v2")}`}>*/}
                    {/*        <Link href="/home-v2">Home 02</Link>*/}
                    {/*    </li>*/}
                    {/*    <li className={`menu-item ${checkCurrentMenuItem("/home-v3")}`}>*/}
                    {/*        <Link href="/home-v3">Home 03</Link>*/}
                    {/*    </li>*/}
                    {/*</ul>*/}
                </li>
                <li className={`menu-item menu-item-has-children ${checkParentActive(["/buy-crypto-select",
                    "/buy-crypto-confirm",
                    "/buy-crypto-details",])}`}>
                    <Link href="#">Buy/Sell Crypto</Link>
                    <ul className="sub-menu">
                        <li className={`menu-item ${checkCurrentMenuItem("/buy-crypto-select")}`}>
                            <Link href="/buy-crypto-select">Buy/Sell Crypto Select</Link>
                        </li>
                        <li className={`menu-item ${checkCurrentMenuItem("/buy-crypto-confirm")}`}>
                            <Link href="/buy-crypto-confirm">Buy/Sell Crypto Confirm</Link>
                        </li>
                        <li className={`menu-item ${checkCurrentMenuItem("/buy-crypto-details")}`}>
                            <Link href="/buy-crypto-details">Buy/Sell Crypto Details</Link>
                        </li>
                    </ul>
                </li>
                {/*<li className={`menu-item menu-item-has-children ${checkParentActive(["/sell-crypto",*/}
                {/*    "/sell-crypto-amount",*/}
                {/*    "/sell-crypto-confirm",*/}
                {/*    "/sell-crypto-details",])}`}>*/}
                {/*    <Link href="#">Sell Crypto</Link>*/}
                {/*    <ul className="sub-menu">*/}
                {/*        <li className={`menu-item ${checkCurrentMenuItem("/sell-crypto")}`}>*/}
                {/*            <Link href="/sell-crypto">Sell Select</Link>*/}
                {/*        </li>*/}
                {/*        <li className={`menu-item ${checkCurrentMenuItem("/sell-crypto-amount")}`}>*/}
                {/*            <Link href="/sell-crypto-amount">Sell Crypto Amount</Link>*/}
                {/*        </li>*/}
                {/*        <li className={`menu-item ${checkCurrentMenuItem("/sell-crypto-confirm")}`}>*/}
                {/*            <Link href="/sell-crypto-confirm">Sell Crypto Confirm</Link>*/}
                {/*        </li>*/}
                {/*        <li className={`menu-item ${checkCurrentMenuItem("/sell-crypto-details")}`}>*/}
                {/*            <Link href="/sell-crypto-details">Sell Crypto Details</Link>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</li>*/}
                {/*<li className={`menu-item menu-item-has-children ${checkParentActive(["/blog-default",*/}
                {/*    "/blog-grid-v1",*/}
                {/*    "/blog-grid-v2",*/}
                {/*    "/blog-list",*/}
                {/*    "/blog-details"])}`}>*/}
                {/*    <Link href="#">Blog</Link>*/}
                {/*    <ul className="sub-menu">*/}
                {/*        <li className={`menu-item ${checkCurrentMenuItem("/blog-default")}`}>*/}
                {/*            <Link href="/blog-default">Blog Default</Link>*/}
                {/*        </li>*/}
                {/*        <li className={`menu-item ${checkCurrentMenuItem("/blog-grid-v1")}`}>*/}
                {/*            <Link href="/blog-grid-v1">Blog Grid v1</Link>*/}
                {/*        </li>*/}
                {/*        <li className={`menu-item ${checkCurrentMenuItem("/blog-grid-v2")}`}>*/}
                {/*            <Link href="/blog-grid-v2">Blog Grid v2</Link>*/}
                {/*        </li>*/}
                {/*        <li className={`menu-item ${checkCurrentMenuItem("/blog-list")}`}>*/}
                {/*            <Link href="/blog-list">Blog List</Link>*/}
                {/*        </li>*/}
                {/*        <li className={`menu-item ${checkCurrentMenuItem("/blog-details")}`}>*/}
                {/*            <Link href="/blog-details">Blog Details</Link>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</li>*/}
            </ul>
        </>
    )
}

