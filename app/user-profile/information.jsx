import {useSelector} from "react-redux";

export default function Information() {
    const isUser = useSelector(state => state.userSlices.isUser)


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