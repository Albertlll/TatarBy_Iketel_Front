import { useState } from "react";
import Button from "../../../../kit/Button/Button";
import Target from "../../../UiParts/Target";
import CharacterBlock from "../../CharacterBlock";
import cloud from "./MessageCloud.svg"
import { cn } from "../../../../../lib/utils";

function GiveAnswerLayout({children}) {



    return ( 
        <div>
            <Target percent={50} title={
                {"rus" : "Бабушка купила молоко",
                 "tat" : "Эбиге сот сатып аларга"
                }
            }/>
            <div className="mt-[100px] flex flex-col">

            <CharacterBlock
            image={"https://img.freepik.com/free-vector/hand-drawn-old-lady-cartoon-cartoon-illustration_52683-115975.jpg"}
            replica={"Миңа бераз ярдәм кирәк, бакчада җиләк утыртканда"}/>


            <img src={cloud} className=" self-end w-[150px] mt-[10px]" alt="" />




                <div className="w-full flex flex-col justify-center mt-4 gap-[10px]">





                    {children}

                

                <Button className=" text-[25px] mt-[20px]">
                    Далее
                </Button>

                </div>

            </div>

        </div>
     );
}

export default GiveAnswerLayout;