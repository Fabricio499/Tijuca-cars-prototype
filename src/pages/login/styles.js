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
                min-height: 3rem;
                max-width: 90%;
                width: 450px;
                margin-bottom: 10%;
            }

            h2 {    
                margin: 0 auto;
                color: white;
                font-size: calc(400% + -4vmin);
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
            height: 80%;
            width: 80%;

            h2 {
                margin: 4rem 0 2rem 0;
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
        }
        .iconView {
            display: flex;
            justify-content: end;
            align-items: center;
            color: #000;
            font-size: 19px;
            color: #f6f6f6;
            transition: all ease .3s;
            width: 82%;
            margin: -2.5rem 0;
            width: 1rem;
            margin-left: 78%;

            &:hover {
                transition: all ease .3s;
                color: #F9A826;
            }
        }
    }

    .btn-enviar {
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
`