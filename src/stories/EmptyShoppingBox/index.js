import React from "react";
import styled from "styled-components";

const Container = styled.div`
    border: 1px solid #C6C6C6;
    width: 614px;
    height: 290px;
    justify-content: center;
    display: flex;
    align-items: center;
    background: #FFFFFF;
    box-sizing: border-box;
    border-radius: 5px;
`
const EmptyShoppingBox = ({ children, ...props }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default EmptyShoppingBox;