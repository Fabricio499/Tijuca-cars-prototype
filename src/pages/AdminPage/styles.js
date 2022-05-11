import styled from 'styled-components'

export const ContainerAdminPage = styled.div`
    color: #f6f6f6;


    .header-adm {
        margin: auto;
        margin-top: 3%;

        width: 80%;
        display: flex;
        justify-content: space-between;
        color: #f6f6f6;

        align-items: center;
        align-items: center;

        .buttons-adm {
            button {
                margin: 0 0 0 2rem;
            }
        }
    }
    .all-aluguel {
        margin: auto;
        padding: 2rem;
        width: 80%;
        
        .card-div {
            margin-top: 1rem;
            display: flex;
            
            justify-content: flex-start;
            align-items: center;
            flex-wrap: wrap;

            gap: 26px;
        }
    }

    .all-cars{
        width: 80%;
        margin: auto;

        .card-div {
            margin-top: 1rem;
            display: flex;
            
            justify-content: flex-start;
            align-items: center;
            flex-wrap: wrap;

            gap: 90px;
        }
    }
`