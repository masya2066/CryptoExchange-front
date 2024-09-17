'use client'
import { usePathname } from 'next/navigation' // Corrected import path
import { useEffect } from 'react'

export default function AddClassBody() {
    const pathname = usePathname()

    useEffect(() => {
        const bodyElement = document.querySelector('body')

        if (bodyElement) {
            // Remove all classes
            bodyElement.classList.remove('home-3', 'home-2', 'markets',)

            // Add class based on pathname
            // Add class based on pathname
            if (pathname === '/home-v2') {
                bodyElement.classList.add('home-2')
            } else if (pathname === '/home-v3') {
                bodyElement.classList.add('home-3')
            } else if (pathname === '/markets') {
                bodyElement.classList.add('markets','home-2')
            }

        }
    }, [pathname])

    return null
}
