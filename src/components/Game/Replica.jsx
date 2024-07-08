import styled from "styled-components";
import cloud from "./assets/img/cloud_replica.svg";
import CharacterElement from "./shared/CloudImgElement";
import NextBtn from "./shared/Button";


const ReplicaCharacterElement = styled(CharacterElement)`
    position: absolute;
    margin-left: 91px;
`


const ReplicaNextBtn = styled(NextBtn)`
    margin-left: auto;
    margin-top: 28px;
    background-color: var(--fg_color);
    color: var(--bg_color);
    
`

const ReplicaElem = styled.div`

`

const CloudImg = styled.img`
    position: relative;
`

const CloudContainer = styled.div`
    position: relative;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;

    // transform: translateX(-46.5px);
    width: 1284.5px;
    height: 793px;

`

const ReplicaText = styled.div`
    font-family: Blazma;
    font-size: 30px;
    color: var(--lesson_color);
    position: absolute;
    width: 1089px;
    height: 736px;
    word-wrap: break-word;
    margin-left: 104px;
    margin-top: 26px;
    text-align: justify;
`


const ReplicaNextBtnContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
`





function Replica(props) {

    const handleContinue = () => {
        props.setShowReplica(false)
    }
    return (
        <ReplicaElem>
        
        <ReplicaCharacterElement src={props.character}/>

        <CloudContainer>

            <ReplicaText>
                {props.replica}
            </ReplicaText>   

            <CloudImg src={cloud}/>

            <ReplicaNextBtnContainer>
                <ReplicaNextBtn onClick={handleContinue} color="fg_color">Понятно!</ReplicaNextBtn>
            </ReplicaNextBtnContainer>
         
        </CloudContainer>


            
        </ReplicaElem>
    );
}

export default Replica;