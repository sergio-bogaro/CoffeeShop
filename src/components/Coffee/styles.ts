import styled from "styled-components";

export const CoffeeListItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 6px 36px;
    height: 310px;
    width: 256px;

    background: #F1EBE4;

    img {
        height: 120px;
        width: 120px;

        margin-top: -20px;
    }

    button:hover {
        cursor: pointer;
    }

    button:disabled {
        cursor: auto;
    }

    .CoffeeName {
        font-family: 'Baloo 2', cursive;
        font-weight: bold;
        font-size: 20px;
        line-height: 130%;
    }

    .Description {
        width: 90%;
        margin-top: 10px;

        text-align: center;

        font-size: 14px;
        line-height: 130%;
        color: #7C797C;
    }

    .ChooseQuantity {
        display: flex;
        justify-content: space-between;
        width: 100px;
    }

    .Quantity {
        color: #62452D;
    }
`

export const TagsList = styled.div`
    display: flex;
    margin: 15px 0;
    gap: 4px;

    .Tag {
        display: flex;
        align-items: center;

        font-weight: 700;
        font-size: 13px;
        line-height: 130%;
        
        height: 20px;
        padding: 0 10px;
        border-radius: 50px;

        background-color: #DFCAB9;
        color: #A7754D;
    }
`

export const PriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    gap: 29px;

    .MoneySymbol {
        font-size: 13px;
    }

    .Price {
        font-family: 'Baloo 2', cursive;
        font-size: 24px;
        font-weight: 800;
        line-height: 130%;
    }

    .AddToCart {
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: #9D5C63;
        border: none;

        height: 33px;
        width: 33px;
        border-radius: 8px;
    }
`

export const QuantityContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #E3D7CA;

    width: 60px;
    height: 33px;
    border-radius: 8px;

    button {
        background: none;
        border: none;
    }
`