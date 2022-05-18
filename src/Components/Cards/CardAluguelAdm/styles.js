import styled from 'styled-components'

export const CardAlguelAdmContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 320px;
    height: 240px;
    color: #f6f6f6;
    font-family: roboto;
    background: #0D47A1;

    border-radius: 15px;

    font-size: 1rem;

    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    transition: all ease-in .4s;
    padding: 0.5rem;


    .header-card {
        /* margin: 1rem 0; */
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        .info-client {
            width: 100%;
            display: flex;
            border-bottom: 1px solid #F9A826;
        }

        p {
            margin-left: 1rem;
            color: #F9A826;
        }

        .edit {
            display: flex;
            justify-content: end;
            width: 1rem;
            margin-left: -.3rem;
            padding: .8rem;
            cursor: pointer;
            transition: all ease .2s;

            &:hover {
                transition: all ease .2s;
                color: #F9A826;
            }
        }
    }
    .info-card {
        display: flex;
        flex-direction: column;


        .single-info {
            margin: 0 .5rem;
            display: flex;
            justify-content: space-between;

            p {
                color: #F9A826;
                font-size: 9pt;
            }
        }
    }
    .status-icon {
        font-size: 2rem;
        margin: 0.8rem 0;
        text-align: center;
    }
`