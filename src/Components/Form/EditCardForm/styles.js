import styled from 'styled-components'

export const ContainerEditCard = styled.div`
    margin-top: 4rem;
    color: #f6f6f6;

    width: 100%;
    
    h2 {
        text-align: center;
    }

    .div-status {
        display: flex;
        justify-content: center;
        gap: 5rem;
        width: 50%;
        margin: 2rem auto;

        .single-status {
            margin: 2rem 0;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            font-size: 4rem;
            transition: all ease .2s;

            &:hover {
                transition: all ease .2s;
                color: #F9A826;
            }
            
            label {
                font-size: .5rem;
            }

        }
    }
`