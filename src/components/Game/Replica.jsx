import styled from "styled-components";
import CharacterElement from "./shared/CloudImgElement";
import NextBtn from "./shared/Button";


const ReplicaCharacterElement = styled(CharacterElement)`

`


const ReplicaNextBtn = styled(NextBtn)`

    
`

const ReplicaElem = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;

    gap: 30px;
    width: 100vw;
    height: 100vh;

    box-sizing: border-box;

    padding: 50px;

    @media (max-width: 650px) {
        flex-direction: column;
        align-items: center;
        padding: 15px;

  }

`


const CloudContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: end;
    gap: 30px;
    align-self: stretch;
    box-sizing: border-box;

    @media (max-width: 650px) {
        flex-direction: column;
        align-items: center;


        height: 0;

        /* max-height: min-content; */
        box-sizing: border-box;

    flex: 1;

  }

`

const ReplicaText = styled.div`
    font-family: Blazma;

    font-size: 30px;
    height: 100%;
    text-align: justify;
    color: var(--lesson_color);
    padding: 31px;
    border: 3px solid var(--fg_color);
    border-radius: 25px;
    overflow: scroll;

    
    
`


const ReplicaNextBtnContainer = styled.div`
    justify-self: center;


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


            <ReplicaNextBtnContainer>
                <ReplicaNextBtn onClick={handleContinue} color="fg_color">Понятно!</ReplicaNextBtn>
            </ReplicaNextBtnContainer>
         
        </CloudContainer>


            
        </ReplicaElem>
    );
}

export default Replica;