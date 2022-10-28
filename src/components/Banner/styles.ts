import styled from "styled-components";

export const BannerContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 30px;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column; 
    width: 50%;

    h2 {
        font-family: 'Baloo 2', cursive;
        font-weight: bold;
        font-size: 48px;
        line-height: 120%;
    }

    p {
        font-size: 24px;
        line-height: 130%;
    }

    div {
        display: flex;
        flex-wrap: wrap;

        div {
            display: flex;
            align-items: center;

            width: 50%;
            gap: 10px;
            margin-bottom: 15px;
        }

        span {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 32px;
            width: 32px;
            border-radius: 9999px;

            background: black;
        }
    }
`