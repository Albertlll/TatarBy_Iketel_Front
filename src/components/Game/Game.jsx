import { useState, useEffect } from "react";
import {styled} from "styled-components"
import { useLocation } from "react-router-dom";
import Progress from "./Progress";
import OKSANA from "./OKSANA.json";
import CharacterBlock from "./CharacterBlock";
import Variants from "./Variants";

const GameElem = styled.div`
    position: relative;
    margin-left: auto;
    margin-right: auto;
    width: 1072px;
    top: 69px;
`

const NextBtnCont = styled.div`
    display: flex;
    width: 100%;
    justify-content: end;
    margin-top: 36px;
`

const NextBtn = styled.button`
    width: 280px;
    height: 85px;
    border-radius: 20px;
    font-family: Blazma;
    border: solid 4px var(--${props => props.color});
    background-color: transparent;
        font-size: 40px;
    
    color: var(--${props => props.color});

`

function Game(props) {

    const locate = useLocation()

    // const [gameData, setGameData] = useState(locate.state);
    const [gameData, setGameData] = useState(OKSANA);

    const [qIndex, setQindex] = useState(0);

    const quest = gameData[qIndex]
    const [step, setStep] = useState(0);

    const task = quest.tasks[step];
    const character = quest.image_url;

    // const [tasksData, setTasksData] = useState(quest.tasks);
    // const [tasks_data, setTasks] = useState();

    const [selected, setSelected] = useState();
    const [taskType, setTaskType] = useState('default');

    const [results, setResults] = useState(Array(8).fill(0));

    console.log(task.title)

    const handleNext = () => {
        setTaskType('default')
        setSelected(0)
        setStep(prev => prev + 1)

        if (step == results.length - 1) {
            setQindex(prev => prev + 1)
            setStep(0)
            // setTasks(quest.tasks)
            setResults(Array(8).fill(0))
            
        }
    }
    const handleCheck = () => {
        const updatedResults = results.map((result, index) => {
          if (index == step) {
            return selected == task.answer ? 2 : 1;
          }
          return result;
        });
      
        setResults(updatedResults);
        setTaskType(selected == task.answer ? 'correct' : 'uncorrect');
        // setSelected(null);
      };

    // const handleCheck = () => {
    //     const updatedResults = results.map((result, index) => {
    //         if (index === step) {
    //           return selected === task.answer ? 1 : 2;
    //         }
    //         return result;
    //       });
          

    //     if (selected == task.answer){
    //         console.log(step)
    //         console.log(results)

            

    //         setResults(prev => [...prev.splice(step, 1, 1)])
    //         setTaskType('correct')
            
    //     }else{
    //         console.log(step)
    //         console.log(results)

    //         setResults(prev => [...prev.splice(step, 1, 2)])
    //         setTaskType('uncorrect')
    //     }

    //     setStep(prev => prev + 1)


    // }

    return (
        <GameElem>
            <Progress tasks={results}/>
            <CharacterBlock character={character} question={task.title}/>
            <Variants selected={selected} setSelected={setSelected} variants={task.variants} answer={task.answer} taskType={taskType}/>
            <NextBtnCont>
                { taskType == 'default' ?
                <NextBtn onClick={handleCheck} color="fg_color">Проверить</NextBtn>
                :
                taskType == 'correct' ?
                <NextBtn onClick={handleNext} color="fg_color">Далее</NextBtn>
                :
                <NextBtn onClick={handleNext} color="fail_color">Далее</NextBtn>
                }
                
            </NextBtnCont>

        </GameElem>
    );
}

export default Game;