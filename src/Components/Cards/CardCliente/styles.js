import styled from 'styled-components'

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 240px;
    color: #f6f6f6;
    font-family: roboto;
    background: #0D47A1;
    gap: 0.8rem;

    border-radius: 15px;

    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    transition: all ease-in .4s;

    h2 {
        font-size: 1rem;
        color: #F9A826;
        margin-top: 10%;
        margin-left: 5%;
        text-align: center;
        margin-bottom: 0.5rem;
    }
    .single-info-card {
        margin: 0 0.4rem;
        font-size: 0.9rem;
        display: flex;
        justify-content: space-between;

        .info-span {
            color: #F9A826;
        }
    }



    &:hover {
        transition: all ease-in .4s;
        box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    }
`