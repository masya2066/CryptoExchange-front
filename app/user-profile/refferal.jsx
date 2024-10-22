import Link from "next/link";
import {useSelector} from "react-redux";
import {useState} from "react";

export default function Refferal() {
    const [isCopied, setIsCopied] = useState("Copy")
    const isUser = useSelector(state => state.userSlices.isUser)

    const handleCopy = (textToCopy) => {
        navigator.clipboard.writeText(textToCopy).then(() => {
            setIsCopied("Copied");
            setTimeout(() => setIsCopied("Copy"), 500); // Сброс состояния через 2 секунды
        }).catch(() => {
            // Обработка ошибки копирования
            alert("Failed to copy!");
        });
    };

    return (
        <>
            <h6>Total rewards</h6>
            <h4>$0.00 <span>USD</span></h4>
            <p>
                You're earning 20% of the trading fees your referrals pay.
                Learn more
            </p>
            <div className="main">
                <h6>Invite friends to earn 20%</h6>
                <div className="refe">
                    <div>
                        <p>Referral link</p>
                        {/*<a style={{cursor: "pointer"}} href={"https://finchain.app/login"}>*/}
                        <input className="form-control" type="text" disabled={true} defaultValue="https://finchain.app/login"/>
                        {/*</a>*/}
                    </div>
                    <div>
                        <p>Referral code</p>
                        <input className="form-control" type="text" disabled={true} defaultValue={isUser.ref_code}/>
                        <span
                            onClick={() => handleCopy(isUser.ref_code)}
                            className="btn-action">{isCopied}</span>
                    </div>
                </div>
            </div>
            <Link href="/wallet" className="btn-action">My Wallet</Link>
        </>
    )
}