import { cn } from '../../../../lib/utils';
import ochpoch from './ochpochmac.png'
function Ochpochcoins({classname}) {
    return (
        <div className={cn('flex gap-[10px] items-center text-[30px] text-[white] ', classname)} >

            <img src={ochpoch} alt="" />

            <div>
                100
            </div>

        </div>
    );
}

export default Ochpochcoins;