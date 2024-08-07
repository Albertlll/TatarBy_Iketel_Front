import { useState, useEffect } from "react";
import {styled} from "styled-components"
import { useLocation } from "react-router-dom";
import Progress from "./Progress";
import OKSANA from "./OKSANA.json";
import CharacterBlock from "./CharacterBlock";
import Variants from "./Variants";
import Result from "./Results";
import Replica from "./Replica";
import NextBtn from "./shared/Button";


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

function GameCreated(props) {

    const locate = useLocation()

    const [count, setCount] = useState(0)

    const [showReplica, setShowReplica] = useState(true);
    const [showResult, setResultShow] = useState(false);
    // const [gameData, setGameData] = useState(locate.state);
    const [gameData, setGameData] = useState(OKSANA);

    const [qIndex, setQindex] = useState(0);

    const quest = gameData[qIndex]
    const [step, setStep] = useState(0);

    const task = quest.tasks[step];
    // const character = 'data:image/png;base64, ' + quest.image_url;
    const character = quest.image_url;

    // const [tasksData, setTasksData] = useState(quest.tasks);
    // const [tasks_data, setTasks] = useState();

    const [selected, setSelected] = useState(0);
    const [taskType, setTaskType] = useState('default');

    const [results, setResults] = useState(Array(8).fill(0));

    console.log(task.title)

    const handleNext = () => {

        if (step == results.length - 1 &&
            qIndex == gameData.length - 1
        ) {
            setResultShow(true)
            return;
        }


        if (step == results.length - 1) {
            setShowReplica(true)
        }

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
            if (selected == task.answer){
                setCount(prev => prev + 1);
                return 2;
            }
            return 1;
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


        showReplica ? 
        
        <Replica setShowReplica={setShowReplica} replica={quest.replika} character={character}/>
        :
        showResult ?   
        <Result count={count}/>
        :
        <GameElem>
            <Progress tasks={results} step={step}/>
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

export default GameCreated;