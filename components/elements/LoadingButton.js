import './elements.scss';
import { LoadingButton } from '@mui/lab';

export default function LoadButton(props) {
    return (
        <div className={'loading-button'}>
            <LoadingButton
            variant={"contained"}
            color={"primary"}
            loading={props.loading}
            >
                {props.label}
            </LoadingButton>
        </div>
    )
}