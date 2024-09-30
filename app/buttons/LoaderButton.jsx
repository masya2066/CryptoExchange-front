export const LoaderButton = (props) => {
    return (
        <button
            onClick={ (e) => {
                e.preventDefault()
                if (!props.disabled) {
                    props.onClick();
                }
            } }
            style={props.loading || props.disabled ? {background: "gray", cursor: "not-allowed"} : {}}
            type="submit" className="btn-action">
            <div style={{height: "20px"}}>
                {props.loading ? <img style={{height: "20px"}} src={"/assets/loaders/loader.svg"}/> : props.text}
            </div>
        </button>
    )
}