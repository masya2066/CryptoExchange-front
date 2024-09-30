
'use client'
import { useEffect, useState } from "react"
import AddClassBody from "../elements/AddClassBody"
import BackToTop from '../elements/BackToTop'
import Breadcrumb from './Breadcrumb'
import Footer1 from './footer/Footer1'
import Footer2 from './footer/Footer2'
import Header1 from "./header/Header1"
import Header2 from './header/Header2'
import AOS from 'aos';
import {Provider, useDispatch, useSelector} from "react-redux";
import store from "@/store";
import {storage} from "@/storage";
import authMethods from "@/methods/auth";
import Providers from "@/components/layout/Providers";
import {authStatus} from "@/store/authSlice";
import {infoUser} from "@/store/userSlice";

export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, children }) {
    const [scroll, setScroll] = useState(0)
    // Moblile Menu
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => setMobileMenu(!isMobileMenu)

    const dispatch = useDispatch()

    const isAuth = useSelector(state => state.authSlices.isAuth)

    useEffect(() => {
        if (localStorage.getItem(storage.accessToken) || localStorage.getItem(storage.refreshToken)) {
            if (!localStorage.getItem(storage.user)) {
                authMethods.userInfo().then(res => {
                    if (res?.status === 200 && res?.data) {
                        dispatch(authStatus({isAuth: true}))
                        localStorage.setItem(storage.user, JSON.stringify(res.data))
                        dispatch(infoUser({isUser: JSON.stringify(res.data)}))
                    }
                }).catch(e => {
                    console.error(e)
                    localStorage.removeItem(storage.accessToken)
                    localStorage.removeItem(storage.refreshToken)
                })
            } else {
                dispatch(authStatus({isAuth: true}))
                const user = JSON.parse(localStorage.getItem(storage.user))
                dispatch(infoUser({isUser: user}))
            }
        }
    }, []);

    useEffect(() => {
        AOS.init();
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    }, [])
    return (
        <>
            <Providers>
                <Provider store={store}>
            <div id="top" />
            <AddClassBody />
            {!headerStyle && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />}
            {headerStyle == 1 ? <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
            {headerStyle == 2 ? <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}



            {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
                {children}
            {!footerStyle && < Footer1 />}
            {footerStyle == 1 ? < Footer1 /> : null}
            {footerStyle == 2 ? < Footer2 /> : null}

            <BackToTop target="#top" />
                </Provider>
        </Providers>
        </>
    )
}
