import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";





function CharacterBlock({ replica, image}) {

    return ( 


        <AnimatePresence>


        
        <motion.div initial={{opacity : 0, y : 50}} animate={{ opacity : 1, y : 0}} transition={ {duration : 0.4, ease : "easeOut"}} className="flex gap-5">
                <img src={image} className=" rounded-full w-[64px] h-[64px]" alt="" />


                <div className="">

            

                </div>


                

                <motion.div className=" p-[10px] border-solid rounded-[10px] border-[3px] border-notAccent w-full text-[white]">

                    {replica}

                </motion.div>

        </motion.div>

        </AnimatePresence>


     );
}

export default CharacterBlock;