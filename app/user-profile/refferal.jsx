import Link from "next/link";
import {useSelector} from "react-redux";

export default function Refferal() {
    const isUser = useSelector(state => state.userSlices.isUser)

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
                        <input className="form-control" type="text" defaultValue="https://accounts.rockie.com/login"/>
                    </div>
                    <div>
                        <p>Referral code</p>
                        <input className="form-control" type="text" disabled={true} defaultValue={isUser.ref_code}/>
                        <span className="btn-action">Copied</span>
                    </div>
                </div>
            </div>
            <Link href="/wallet" className="btn-action">My Wallet</Link>
        </>
    )
}