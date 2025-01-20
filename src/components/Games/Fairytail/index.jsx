import { useParams } from 'react-router-dom';
import GamesLayout from '../GamesLayout';
import Mission from './Info/Mission';
import ReadStory from './Tasks/ReadStory';
import InputTextTask from './Tasks/Answer/InputTextTask';
import SelectVariant from './Tasks/Answer/SelectVariant';
import MissionComlete from './Info/MissionComplete';
import useFairytailStore from './store';
import Target from '../UiParts/Target';
import Button from '../../kit/Button/Button';
import { AnimatePresence } from 'motion/react';
// import { motion } from "motion/react";

function Fairytail() {

    const { id } = useParams(); // Получаем параметр `id` из URL


    const { currentStepData, sendCurrentStep, updateCurrentStepData } = useFairytailStore();

    const handleNext = () => {

        console.log(currentStepData.type)

        switch (currentStepData.type) {
            case "mission":
                updateCurrentStepData({ type: "answerInput" });
                break;
            case "answerInput":
                updateCurrentStepData({ type: "answerSelect" });
                break;
            case "answerSelect":
                updateCurrentStepData({ type: "mission" });
                break;
            case "missionComplete":
                updateCurrentStepData({ type: "mission" });
                break;
        }
    }


    const closeTargetDescription = currentStepData.type === "missionComplete" || currentStepData.type === "mission"
    console.log(closeTargetDescription, currentStepData.type)


    return ( 
        <GamesLayout>

            <AnimatePresence/>



        

            <Target closeTargetDescription={closeTargetDescription} percent={50} title={
                {"rus" : "Бабушка купила молоко",
                 "tat" : "Эбиге сот сатып аларга"
                }
                } />


            {
                currentStepData.type == "mission" ?
                
                <Mission/>

                :

                currentStepData.type == "missionComplete" ?

                <MissionComlete/>
                
                :
                
                currentStepData.type == "answerInput" ?

                <InputTextTask/>

                :

                currentStepData.type == "answerSelect" &&

                <SelectVariant/>

            }



            {/* <Mission/> */}

                <Button onClick={handleNext} className=" mt-4 text-[25px]">
                    Далее
                </Button>



        </GamesLayout>
     );
}

export default Fairytail;