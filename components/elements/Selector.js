import './elements.scss'
import {MenuItem, TextField} from "@mui/material";

export default function BaseSelector(props) {

    return (
        <div className={"base-selector"}>
            <TextField
                id="standard-select-currency"
                color={"secondary"}
                select
                label={props.label}
                error={props.error}
                onChange={props.onChange}
                defaultValue={props.defaultValue}
            >
                {props.data.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        <img style={{width: "25px", height: '25px', marginRight: "20px"}} alt={"coin"} src={option.image}/>{option.label}
                    </MenuItem>
                ))}
            </TextField>
            <p style={{color: "red", paddingLeft: "10px"}}>
                {props.error ? props.errorText : null}
            </p>
        </div>
    )
}