import styled from "styled-components";
import CharacterCard from "./components/CharacterCard";

export const TextAreaWrapper = styled.div`
    height: 100%;
    border: 3px solid var(--fg_color);;
    border-radius: 25px;
    width: 100%;    
`

const PromptInputContainerElem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    `
const PromptInputElemWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`


export const TextareaElem = styled.textarea`
    font-family: Blazma;
    height: calc(100% - 30px);
    width: 80%;
    left: 30px;
    position: relative;
    top: 30px;

    border-radius: 25px;
    color: var(--fg_color);
    background-color: transparent;
    font-weight: 700;
    font-size: 25px;
    // overflow: hidden;
    resize: none;
    border: none;
    outline: none;
`

const GridElem = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(3, 400px);
    grid-template-rows: repeat(3, 200px) 60px;
    gap: 30px;
    align-content: center;

    justify-content: space-around;
`

const InsideGridElem = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column: span 3;
    grid-row: span 4;
    width: 100%;
    height: 100%;
    gap: 50px;

`
const SendPromptBtn = styled.button`
    border-radius: 25px;
    height: 100%;
    width: 100%;
    outline: none;
    border: none;
    background-color: var(--fg_color);
    color: var(--bg_color);
    font-size: 25px;
    cursor: pointer;
    font-family: 'Blazma';
`

function PromptInput() {
    return (
        <PromptInputContainerElem>

        <GridElem>
                <TextAreaWrapper>
                    <TextareaElem placeholder="Концепт"></TextareaElem>
                </TextAreaWrapper>

                <TextAreaWrapper>
                    <TextareaElem placeholder="Темы через точку с запятой"></TextareaElem>
                </TextAreaWrapper>

                <TextAreaWrapper>
                    <TextareaElem placeholder="Дополнительные требования"></TextareaElem>
                </TextAreaWrapper>

                <SendPromptBtn>Создать сказку!</SendPromptBtn>    

                <InsideGridElem>
                <CharacterCard></CharacterCard>
                <CharacterCard></CharacterCard>
                <CharacterCard></CharacterCard>
                <CharacterCard></CharacterCard>

                </InsideGridElem>                
        </GridElem>

        </PromptInputContainerElem>
    );
}

export default PromptInput;