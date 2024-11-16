import styled from "styled-components";
import { useState } from "react";
const VariantsCont = styled.div`
    display: grid;
    width: 100%;
    row-gap: 36px;
    column-gap: 69px;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 36px;
    @media (max-width: 1111px) {
        grid-template-columns: repeat(1, 1fr);
    }

`

const VariantElem = styled.div`
 

`
const VariantWrapper = styled.button`
    display:flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    cursor: pointer;


    ${props => props.selected ? 
        `
        background-color: transparent;
        border: solid 4px var(--fg_color);
        color: var(--fg_color);
        `
        : ''
    }

    ${props => props.correct ? 
        `
        background-color: var(--fg_color);
        border: transparent;
        color: var(--bg_color);
        `
        : ''
    }

    ${props => props.uncorrect ? 
        `
        background-color: var(--fail_color);
        border: transparent;
        color: var(--bg_color);
        `
        : ''
    }

        
    ${props => props.default ? 
        `
        background-color: transparent;
        border: solid 4px var(--lesson_color);
        color: var(--lesson_color);
        `
        : ''
    }


    

    // background-color: ${props => props.back};
    // border: solid 4px ${props => props.borderColor};
    // color: ${props => props.fontColor};

    height: 85px;
    border-radius: 20px;
    font-family: Blazma;
    font-size: 40px;
    position: relative;

`

function Variants(props) {


    const handleClick = (index) => {
        if (props.taskType == 'default') {
            props.setSelected(index);
        }
    }


    return (
        <VariantsCont>
        {
        props.variants.map((variant, index) => {

            if (props.taskType == 'correct' && index == props.answer) {
            
                return <VariantWrapper correct key={index}>
                            {variant}
                       </VariantWrapper>
            }

            else if (props.taskType == 'uncorrect' && index == props.selected) {

                return <VariantWrapper uncorrect key={index}>
                            {variant}
                        </VariantWrapper>
            }


            else if (index == props.selected) {
                return <VariantWrapper selected key={index} onClick={() => {handleClick(index)}}>
                            {variant}
                        </VariantWrapper>
            }

            else {
                return <VariantWrapper default key={index} onClick={() => {handleClick(index)}}>
                            {variant}
                        </VariantWrapper>
            }


        })
        }
        </VariantsCont>
    );

}

export default Variants;