import styled from 'styled-components'

export const ContainerLogin = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    flex-direction: row;
    font-family: 'Roboto', sans-serif;

    .right {
        background: #1E3F7F;
        width: 60%;

        .content-right {
            background: rgba(0, 0, 0, 0.5);
            height: 93%;
            width: 95%;
            margin: 3% 3% 3% 5%;
            border-radius: 25px;
        }

    }
    .left {
        background-color: #1E3F7F;
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .form-left {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 80%;
            width: 80%;

            h2 {
                color: #fff;
                font-size: 3.5rem;
            }
            .input-div {
                width: 100%;
                margin-left: 20%;
                margin-top: 30%;
                display: flex;
                flex-direction: column;
                color: #fff;

                label {
                    font-size: 1.5rem;
                }
                
                .input-login {
                    width: 80%;
                    height: 40px;
                    margin: 1rem 0;

                    border: 0;
                    border-radius: 15px;
                    outline: 0;

                    padding: 0 5px;
                }
            }

            button {
                margin-top: 2rem;
                padding: 10px 25px;
                background: none;
                border: 0;
                outline: 0;
                border: 1px solid #F9A826;
                border-radius: 15px;

                color: #F9A826;
                transition: all ease 0.5s;

                cursor: pointer; 

                &:hover {
                    transition: all ease 0.5s;
                    background: #F9A826;
                    color: #000;
                }
            }
        }
        .iconView {
            position: fixed;
            left: 90%;
            top: 62.5%;
            color: #000;
            font-size: 19px;
        }
    }
`