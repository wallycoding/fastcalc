import styled from "styled-components";
import colors from "../../colors";

export const Container = styled.section`
    display: flex;
    flex: 1;
    background-color: ${colors.primary};
    justify-content: center;
    align-items: center;
`;

export const Button = styled.button`
    min-width: 350px;
    padding: 20px;
    background: none;
    border-radius: 10px;
    border: solid 2px ${colors.green};
    color: ${colors.white};
    font-weight: 600;
    font-size: 1rem;
    font-family: "Roboto";
    transition: 0.3s;
    text-transform: uppercase;
    :hover {
        color: ${colors.black};
        background-color: ${colors.green};
    }
`;
