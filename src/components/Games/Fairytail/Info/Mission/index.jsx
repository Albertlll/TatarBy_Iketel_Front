import Button from '../../../../kit/Button/Button';
import MissionSticker from './MissionSticker.png';

function Mission() {
    return ( 
        <div className=' w-full h-full flex items-center justify-center'>

            <div className='flex gap-3 flex-col'>

            <div className=' h-fit w-fit'>
                <div className=' flex justify-end  flex-col absolute mt-[80px] ml-[25px] w-[200px] h-[50px]'>

                    <div className='font-write text-[32px] leading-4'>
                        Пойти спать
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

export default Mission;