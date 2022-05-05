import styled from 'styled-components'

export const ContainerModalCliente = styled.div`
    background: #0D47A1;
    width: 600px;
    margin-top: 60px;


    .form-model-cliente{
        display: flex;
        flex-direction: column;
        color: #F9A826;
        align-items: center;
        justify-content:  center;
        .campo-input{
            display: flex;
            flex-direction: column;
            text-align: left;
            margin: 1rem 0;
            transition: all ease-in .5s;


            input{
                background: none;
                border: 0;
                outline: 0;
                border-bottom: 1px solid #f6f6f6;
                width: 300px;
                height: 40px;
                transition: all ease-in .5s;
                color: #F6f6f6;

                &:hover, &:focus {
                    transition: all ease-in .5s;
                    border-bottom: 1px solid #F9A826;
                    color: #F9A826;
                }
            }
            input[type="date"]::-webkit-inner-spin-button,
            input[type="date"]::-webkit-calendar-picker-indicator {
                filter: invert(1);
                cursor: pointer;
            }
            
        }
    }
    .price-div {
        width: 50%;
        display: flex;
        align-items: center;


        p {
            text-align: left;
        }

        span {
            margin-left: 5%;
        }
    }
    .submit-button-alugar {
        margin: 2.7rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`