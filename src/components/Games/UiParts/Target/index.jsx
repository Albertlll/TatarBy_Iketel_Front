import { cn } from "../../../../lib/utils";
import ProgressBar from "../../../kit/ProgressBar";
import s from "./Target.module.css"
function Target({percent, className, title}) {







    return ( 
        <div className={cn(" flex flex-col gap-2 ", className)}>
            <div className=" text-[white] text-[20px]">
                 {percent}% к цели
            </div>
            <ProgressBar step={percent} max={100}/>

            <button className="text-[white] flex items-start flex-col gap-1 w-fit">

                <div>
                {
                    title.tat
                }
                </div>


            
            <div className={s.dotline}>

            </div>
            </button>

        </div>
     );
}

export default Target;