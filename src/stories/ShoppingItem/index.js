import React from "react";
import styled from "styled-components";

const Container = styled.div`
    border: 1px solid #C6C6C6;
    justify-content: space-between;
    display: flex;
    align-items: center;
    background: #FFFFFF;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 24px 21px;
    &:hover {
        background: rgba(213, 223, 233, 0.17);
    }
`
const ShoppingItem = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default ShoppingItem;