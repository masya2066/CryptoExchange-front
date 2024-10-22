'use client'
import { useState } from 'react'

export default function IconStar() {
    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        setIsActive(prevState => !prevState)
    }

    return (
        <div style={{display: "flex", width: "100%", height: "100%", alignItems: "center", justifyContent: "center"}}>
            <span className={`icon-star ${isActive ? 'active' : ''}`} onClick={handleClick}/>
        </div>
    )
}
