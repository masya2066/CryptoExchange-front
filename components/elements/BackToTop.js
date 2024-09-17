'use client'
import { useEffect, useState } from "react"

export default function BackToTop({ target }) {
    const [hasScrolled, setHasScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setHasScrolled(window.scrollY > 100)
        }

        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const handleClick = () => {
        window.scrollTo({
            top: document.querySelector(target).offsetTop,
            behavior: 'smooth'
        })
    }

    return (
        <>
            {hasScrolled && (
                <button className="btn btn-primary"  onClick={handleClick}>
                    Back to top
                </button>

            )}
        </>
    )
}
