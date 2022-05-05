import styled from 'styled-components'

export const FormNovoClienteContainer = styled.div`
    font-family: Poppins;
    color: #f6f6f6;
    font-size: 1.2rem;

    .form-newcliente {
        width: 93%;
        margin-top: 4.5rem;
    }
    .campo-info {
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;

        input[type="date"]::-webkit-inner-spin-button,
            input[type="date"]::-webkit-calendar-picker-indicator {
                filter: invert(1);
                cursor: pointer;
            }

        input {
            margin-left: 1rem;
            flex: 1;

            background: none;
            border: 0;
            outline: 0;

            color: #f6f6f6;
            border-bottom: 1px solid #f6f6f6;
            transition: all ease-in .5s;

        
            &:hover, &:focus {
                transition: all ease-in .5s;
                color: #F9A826;
                border-bottom: 1px solid #F9A826;
            }

            
        }
    }

    .input-submit {
        margin-top: 2.5rem;
        width: 93%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`