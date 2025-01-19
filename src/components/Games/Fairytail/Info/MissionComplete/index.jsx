import Button from '../../../../kit/Button/Button';
import MissionSticker from './MissionCompleteSticker.png'

function MissionComlete() {
    return ( 
        <div className=' w-full h-full flex items-center justify-center'>

        <div className='flex gap-3 flex-col'>

        <div className=' h-fit w-fit'>
            <div className=' flex justify-end  flex-col absolute mt-[190px] ml-[60px] w-[180px] h-[40px]'>

                <div className='font-write text-[32px] leading-4 line-through'>
                    Купить молоко
                </div>
            </div>
            <img src={MissionSticker} alt="" />
        </div>

        <Button className=" w-full" >
            Вперед!
        </Button>



        </div>

    </div>
     );
}

export default MissionComlete;