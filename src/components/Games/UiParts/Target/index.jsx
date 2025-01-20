import { useState } from "react";
import { cn } from "../../../../lib/utils";
import ProgressBar from "../../../kit/ProgressBar";
import Ochpochcoins from "../Ochpochcoins";
import s from "./Target.module.css"
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";

function Target({ percent, className, title, closeTargetDescription=false}) {
    const [isTat, setIsTat] = useState(true);

    const toggleText = () => {
        setIsTat(!isTat);
    };

    return (
        <div className={cn("flex flex-col gap-2", className)}>
            <Ochpochcoins />

            

            {!closeTargetDescription &&
            <>
            <div className="text-[white] text-[20px]">
                {percent}% к цели
            </div>
            <ProgressBar step={percent} max={100} />

            <button className="text-[white] flex items-start flex-col gap-1 w-fit" onClick={toggleText}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={isTat ? 'tat' : 'rus'}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                    >
                        {isTat ? title.tat : title.rus}
                    </motion.div>
                </AnimatePresence>
                <div className={s.dotline}></div>
            </button>

            </>
            }
            
        </div>
    );
}

export default Target;