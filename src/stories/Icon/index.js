import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin: 2px 8px;
    cursor: pointer;
`
const Icon = ({ children, ...props }) => {
    return (
        <Container  {...props}>
            {children}
        </Container>
    )
}

export default Icon;