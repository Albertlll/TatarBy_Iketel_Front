import styled from "styled-components";
import cloud from "./assets/img/cloud.svg"
import CloudImgElement from "./shared/CloudImgElement"


const CharacterBlockElement = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: start;

    margin-top: 30px
    
`

const CloudElement = styled.div`
    width: 820px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ReplicaTextElement = styled.div`
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    position: absolute;
    font-family: Blazma;
    font-size: 40px;
    color: var(--lesson_color);
    margin-left: 100px;
    margin-right: 50px;
    line-height: 45px
    
`



function CharacterBlock(props) {
    return (
        <CharacterBlockElement>
            <CloudImgElement src={props.character} alt="" />
            <CloudElement>
                <img src={cloud} alt=""/>
                <ReplicaTextElement>{props.question}</ReplicaTextElement>
            </CloudElement>
        </CharacterBlockElement>
    );
}

export default CharacterBlock;