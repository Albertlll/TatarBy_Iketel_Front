import Button from "../../../../kit/Button/Button";
import ProgressBar from "../../../../kit/ProgressBar";
import Target from "../../../UiParts/Target";
import CharacterBlock from "../../CharacterBlock";
import useFairytailStore from "../../store";
import s from "./SelectAnswer.module.css"
function ReadStory() {


    // const  { sendCurrentStep } = useFairytailStore()


    // const nextStep = () => {
    //     sendCurrentStep({type: "answerSelect"})
    // }



    return ( 
        <div className=" w-full h-full">


            
            <div className="mt-[100px] flex flex-col">


            
            <CharacterBlock image={"https://img.freepik.com/free-vector/hand-drawn-old-lady-cartoon-cartoon-illustration_52683-115975.jpg"}
            replica={"Миңа бераз ярдәм кирәк, бакчада җиләк утыртканда, алтын таракны югалттым. Проблема шунда ки, шәһәргә барып җитү җиңел түгел, тылсымлы сынауларны җиңәргә кирәк. Ярдәм итә аласыңмы?"}/>


            </div>



        </div>
     );
}

export default ReadStory;