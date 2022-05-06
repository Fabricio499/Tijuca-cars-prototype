import styled from 'styled-components'

export const ContainerEditCard = styled.div`
    margin-top: 4rem;
    color: #f6f6f6;

    width: 93%;

    .div-status {
        display: flex;
        flex-direction: row;
        gap: 6.2rem;

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