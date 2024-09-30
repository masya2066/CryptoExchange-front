import Link from "next/link";
import {useState} from "react";
import {useSelector} from "react-redux";

export default function UserMainInfo() {
    const isUser = useSelector(state => state.userSlices.isUser)

    return (
        <>
            <h6 className="name">{isUser.login}</h6>
            <p>{isUser.email}</p>
        </>
    )
}