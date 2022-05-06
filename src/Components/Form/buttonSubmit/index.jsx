import * as C from './styles'

export const ButtonSubmit = ({text, onClick, className}) => {
    return (
        <C.ButtonSubmit onClick={onClick} className={className}>
            {text}
        </C.ButtonSubmit>
    )
}