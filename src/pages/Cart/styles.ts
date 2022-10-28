import styled from "styled-components";

export const PaymentContainer = styled.div`
    display: flex;
    justify-content: space-around;

    .card {
        background-color: #F1EBE4;
        padding: 20px;
       
        border-radius: 6px;
    }

`

export const AdressContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    input {
        box-sizing: border-box;
        background-color: #F8F5F2;
        border: 1px solid #C2C1C2;
        border-radius: 6px;
        margin: 5px;
        padding-left: 15px;
        margin-top: 12px;
        height: 42px;
    }

    p {
        margin-bottom: 20px;
    }

    .smallInput {
        width: 40%;
    }

    .bigInput {
        display: flex;
        flex: 1;
    }

    .InputContainer {
        display: flex;
    }
`

export const PaymentMethodContainer = styled.div`
    margin-top: 20px;
`

export const OrderContainer = styled.div``