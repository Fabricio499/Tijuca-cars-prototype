import styled from 'styled-components'

export const NoContentContainer = styled.div`
    width: 100%;
    background: #2C4372;
    border-radius: 1.5rem;
    display: flex;

    .info {
        width: 50%;

        h2 {
            font-size: 300%;
            padding: 10%;
        }
    }
    .intrucoes {
        width: 50%;
    
        p {
            color: #C2D2F1;
            padding: 20% 20% 0 0;
        }
        hr {
            color: #C2D2F1;
        }
    }
`