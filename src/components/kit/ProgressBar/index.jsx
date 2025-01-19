import { cn } from "../../../lib/utils";
import s from "./ProgressBar.module.css"

function ProgressBar({step, className, max}) {
    return ( 
        <progress value={step} max={max} className={cn(" w-full h-[8px] rounded-[4px] bg-progressBg overflow-hidden", className, s.progress)}/>
     );
}

export default ProgressBar;