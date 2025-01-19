import Button from "../../../../kit/Button/Button";
import ProgressBar from "../../../../kit/ProgressBar";
import Target from "../../../UiParts/Target";
import CharacterBlock from "../../CharacterBlock";
import s from "./SelectAnswer.module.css"
function ReadStory() {
    return ( 
        <div className=" w-full h-full">

            <Target percent={50} title={
                {"rus" : "Бабушка купила молоко",
                 "tat" : "Эбиге сот сатып аларга"
                }
                }/>


            
            <div className="mt-[100px] flex flex-col">


            
            <CharacterBlock image={"https://img.freepik.com/free-vector/hand-drawn-old-lady-cartoon-cartoon-illustration_52683-115975.jpg"}
            replica={"Миңа бераз ярдәм кирәк, бакчада җиләк утыртканда, алтын таракны югалттым. Проблема шунда ки, шәһәргә барып җитү җиңел түгел, тылсымлы сынауларны җиңәргә кирәк. Ярдәм итә аласыңмы?"}/>

            <div className="w-full flex justify-center mt-4">

                <Button className=" text-[25px]">
                    Далее
                </Button>

            </div>

            </div>



        </div>
     );
}

export default ReadStory;