import styled from "styled-components";
import { TextareaElem } from "../PromptInput";
import { TextAreaWrapper } from "../PromptInput";
const CharacterCardElem = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* border: 3px solid var(--fg_color); */
    /* border-radius: 25px; */
    gap: 17px;
`

const CharacterTextareaElem = styled.textarea`
    left: 15px;
    top: 15px;

    font-family: Blazma;
    height: calc(100% - 30px);
    width: 80%;
    position: relative;

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

const CharacterTitleElem = styled.h3`
    font-size: 30px;
    color: var(--lesson_color);
    font-family: 'Blazma';
`

function CharacterCard(props) {

    const setCharacterState = (setParametr, setValue) => {
        props.stateSetter((prev) => {return {...prev, [props.number] : {...prev[props.number], [setParametr] : setValue}}})
    }



    return (
    <CharacterCardElem>
        {/* <CharacterTitleElem>Первый</CharacterTitleElem> */}
        <TextAreaWrapper>
            <CharacterTextareaElem onChange={(e) => setCharacterState('name', e.target.value)} placeholder={"Имя персонажа " + (props.number + 1)}></CharacterTextareaElem>
        </TextAreaWrapper>

        <TextAreaWrapper>
            <CharacterTextareaElem onChange={(e) => setCharacterState('look_description', e.target.value)} placeholder={"Внешность персонажа " + (props.number + 1)}></CharacterTextareaElem>
        </TextAreaWrapper>

        <TextAreaWrapper>
            <CharacterTextareaElem onChange={(e) => setCharacterState('character_description', e.target.value)} placeholder={"Характер персонажа " + (props.number + 1)}></CharacterTextareaElem>
        </TextAreaWrapper>
    </CharacterCardElem>
    );
}

export default CharacterCard;