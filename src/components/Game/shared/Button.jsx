import styled from "styled-components"

const NextBtn = styled.button`
    width: 280px;
    height: 85px;
    border-radius: 20px;
    font-family: Blazma;
    border: solid 4px var(--${props => props.color});
    background-color: transparent;
        font-size: 40px;
    
    color: var(--${props => props.color});
    cursor: pointer;


    @media (max-width: 1111px) {

        font-size: 24px;

    }

`

export default NextBtn