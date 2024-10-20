import './elements.scss'
import {TextField} from "@mui/material";

export default function BaseInput(props) {
    return (
        <div className={'base-input'}>
            <TextField
                error={props.error}
                variant={'outlined'}
                color={"secondary"}
                type={props.type}
                onChange={props.onChange}
                placeholder={props.placeholder}
            />
            <p style={{color: "red", paddingLeft: "10px"}}>
                {props.error ? props.errorText : null}
            </p>
        </div>
    )
}