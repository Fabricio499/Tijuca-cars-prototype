import styled from 'styled-components'

export const FormNovoCarroContainer = styled.div`
    .form-newCar {
        margin-top: 6rem;
        width: 93%;

        font-size: 1.2rem;
        color: #f6f6f6;
    
        .campo-info {
            margin-top: 2rem;
            width: 100%;
            display: flex;

            input {
                flex: 1;
                margin-left: 2rem;

                background: none;
                outline: 0;
                border: 0;

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
    }
    .input-adicionar {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 5rem;
        width: 93%;
    }
`