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
            display: flex;
            justify-content: center;
            align-items: center;
            /* gap: rem; */
            flex-direction: column;
            

            .img-car {
                width: 450px;
                margin-bottom: 3rem;
            }

            h2 {    
                margin: 3rem 0;
                color: white;
                font-size: 60px;
                font-family: 'Goldman', cursive;
                letter-spacing: 0.25rem;
                
                
            }
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
            height: 60%;
            width: 80%;

            h2 {
                /* margin: 0; */
                color: #fff;
                font-size: 3.5rem;
            }
            .input-div {
                width: 100%;
                margin-left: 20%;
                margin-top: 15%;
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
                    background-color: rgba(255, 255, 255, 0);
                    outline: 0;
                    border: 0;
                    border-bottom: 2px solid #eee;
                    padding: 0 5px;
                    transition: all ease .5s;
                    color: #f6f6f6;
                    

                    &:hover, &:focus {
                        transition: all ease .5s;
                        border-bottom: 2px solid #F9A826;
                    }
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