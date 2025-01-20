import { useState } from "react";
import Button from "../../../../kit/Button/Button";
import Target from "../../../UiParts/Target";
import CharacterBlock from "../../CharacterBlock";
import cloud from "./MessageCloud.svg"
import { cn } from "../../../../../lib/utils";

function GiveAnswerLayout({children, handleNext}) {



    return ( 
        <>
            {/* <Target percent={50} title={
                {"rus" : "Бабушка купила молоко",
                 "tat" : "Эбиге сот сатып аларга"
                }
            }/> */}
            <div className=" h-full flex flex-col justify-between">


            <div className="flex w-full h-full items-center justify-center">

                <div className=" flex w-full flex-col gap-2">

                    <CharacterBlock
                    image={"https://img.freepik.com/free-vector/hand-drawn-old-lady-cartoon-cartoon-illustration_52683-115975.jpg"}
                    replica={"Миңа бераз ярдәм кирәк, бакчада җиләк утыртканда"}/>


                    <img src={cloud} className=" self-end w-[150px] mt-[10px]" alt="" />

                </div>
            </div>



                <div className="w-full flex flex-col justify-center mt-4 gap-[10px]">





                    {children}


                </div>

            </div>

        </>
     );
}

export default GiveAnswerLayout;