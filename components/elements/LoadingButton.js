import './elements.scss';
import { LoadingButton } from '@mui/lab';

export default function LoadButton(props) {
    return (
        <div className={'loading-button'}>
            <LoadingButton
            variant={"contained"}
            color={"primary"}
            disabled={props.disabled}
            loading={props.loading}
            onClick={props.onClick}
            >
                {props.label}
            </LoadingButton>
        </div>
    )
}