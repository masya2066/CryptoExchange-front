'use client'
import { useState } from 'react'

export default function IconStar() {
    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        setIsActive(prevState => !prevState)
    }

    return (
        <span className={`icon-star ${isActive ? 'active' : ''}`} onClick={handleClick} />
    )
}
