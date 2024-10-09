import React, {useEffect, useState} from "react";
import authMethods from "@/methods/auth";
import {storage} from "@/storage";
import {useDispatch} from "react-redux";
import {authStatus} from "@/store/authSlice";

export default function Information() {
    const [isUser, setIsUser] = useState({ email: "", phone: "" });

    const dispatch = useDispatch()

    useEffect(() => {
        if (typeof window !== "undefined") {
            const userInfo = localStorage.getItem("user_info");
            if (userInfo) {
                setIsUser(JSON.parse(userInfo));
            }
        }
    }, []);


    return (
        <>
            <div className="form-group d-flex">
                <input type="email" className="form-control" id="exampleInputEmail1"
                       defaultValue={isUser.email}/>
                <div className="sl">
                    <input disabled={true} style={{width: "50px", marginRight: "5px"}} defaultValue={"+"}/>
                    <input type="text" className="form-control" placeholder="Your Phone number" defaultValue={isUser.phone}/>
                </div>
            </div>
            <div className="form-group d-flex s1">
                <select className="form-control" id="exampleFormControlSelect2">
                    <option>South Korean</option>
                    <option>Vietnamese</option>
                    <option>South Korean</option>
                    <option>South Korean</option>
                </select>
            </div>
        </>
    )
}