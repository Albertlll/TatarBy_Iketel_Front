import styled from "styled-components";
import ConfettiExplosion from 'react-confetti-explosion';

const ResultElem = styled.div`
    width: 400px;
    height: 400px;
    margin: auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 60px;
    font-family: Blazma;
    margin-top: 200px;
    
    flex-direction: column;
`

const ResultTitle = styled.div`
    font-size: 30px;
    color: var(--lesson_color);
    text-align: center;
`

const ResultCount = styled.div`
    font-size: 60px;
    color: var(--fg_color);
`

function Result(props) {
    return (
        <>

        <ResultElem>
            <ResultTitle>
            Парам парам, ваш результат
            </ResultTitle>

            <ResultCount>
            {props.count}

            </ResultCount>

            <ConfettiExplosion
                force={0.8}
                duration={3000}
                particleCount={250}
                width={1600}/>
        </ResultElem>        
        </>

    );
}

export default Result;