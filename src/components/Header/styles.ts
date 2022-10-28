import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 70px;
`

export const IconsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    div {
        display: flex;
        align-items: center;
        justify-content: center;

        height: 35px;
        width: 135px;
        border-radius: 6px;
        
        background-color: #DFCAB9;
        color: #A7754D;
        font-weight: bold;
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;

        height: 35px;
        width: 35px;
        border-radius: 6px;

        background-color: #D2B2B5;
    }
`