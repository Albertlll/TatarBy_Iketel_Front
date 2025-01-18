import { cn } from "../../../../lib/utils";

function BoldBtn({className, children, accent = false}) {

    return (
        <div className={cn(" w-full rounded-[20px] bg-boldBtnColor shadow-[8px_6px_0_0_#598F5B] text-bgСolor px-[24px] py-[15px]", className,
            
                accent &&" bg-fgСolor shadow-[8px_6px_0_0_#108C15]"
            
        )}>
            {children}
        </div>
    );
}

export default BoldBtn;