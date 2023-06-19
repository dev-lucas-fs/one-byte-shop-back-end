import styled from "styled-components";




export const Container = styled.div`
    width: 100%;
    min-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.button};
    padding: 10px;

    h1 {
        font-size: 14px;
        font-weight: 500;
        text-align: center;
        color: ${props => props.theme.text};
        font-family: 'Poppins' !important;
        line-height: 20px;
        .brand {
            color: ${props => props.theme.brand};
        }
    }
`