import styled from "styled-components";
import CloudImgElement from "./shared/CloudImgElement"


const CharacterBlockElement = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 30px;


    gap: 30px;
`

const CloudElement = styled.div`
    align-self: stretch;

    /* width: 100%; */
    
    display: flex;
    align-items: center;
    justify-content: center;

    border: 4px solid var(--lesson_color);
    border-radius: 30px;
    box-sizing: content-box;

    padding: 20px;


`

const ReplicaTextElement = styled.div`

    font-weight: 700;
    line-height: 32px;
    font-family: Blazma;
    font-size: 40px;
    color: var(--lesson_color);
    line-height: 45px;  
    
    @media (max-width: 1111px) {
        font-size: 24px;
        line-height: 28px;
    
}

`



function CharacterBlock(props) {
    return (
        <CharacterBlockElement>
            <CloudImgElement src={props.character} alt="" />
            <CloudElement>
                <ReplicaTextElement>{props.question}</ReplicaTextElement>
            </CloudElement>
        </CharacterBlockElement>
    );
}

export default CharacterBlock;