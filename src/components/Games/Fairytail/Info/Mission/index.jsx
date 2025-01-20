import Button from '../../../../kit/Button/Button';
import Ochpochcoins from '../../../UiParts/Ochpochcoins';
import MissionSticker from './MissionSticker.png';
import { AnimatePresence, motion } from 'motion/react';

function Mission() {
    return (

        <AnimatePresence>

        <motion.div  initial={{ scale: 0.1}} animate={{scale : 1}} transition={{ type : "spring",                     stiffness: 150,      // Жесткость пружины (чем больше, тем "жестче" пружина)
            damping: 10,         // Затухание (чем меньше, тем больше "пружинистость")
            mass: 0.5,  }} className=' w-full h-full flex items-center justify-center'>

            <div className='flex gap-3 flex-col'>

            <div className=' h-fit w-fit'>
                <div className=' flex justify-end  flex-col absolute mt-[80px] ml-[25px] w-[200px] h-[50px]'>

                    <div className='font-write text-[32px] leading-4'>
                        Пойти спать
                    </div>
                </div>
                <img src={MissionSticker} alt="" />
            </div>


            </div>

        </motion.div>

        </AnimatePresence>

     );
}

export default Mission;