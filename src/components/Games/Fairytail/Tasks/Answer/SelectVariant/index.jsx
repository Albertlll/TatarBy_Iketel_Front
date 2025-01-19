import { useState } from "react";
import GiveAnswerLayout from "../GiveAnswerLayout";
import Button from "../../../../../kit/Button/Button";
import { cn } from "../../../../../../lib/utils";

function SelectVariant() {
    const variants = [
        {title : "Привет"},
        {title : "Привет"},
        {title : "Привет"},
        {title : "Привет"},
        {title : "Привет"},
    ]

    const [selected, setSelected] = useState(0);

    return ( 
        <GiveAnswerLayout>
                            
                {
                    variants.map((value, key) => {
                        return (
                            <Button key={key} className={cn(" text-notAccent bg-opacity-0 border-[3px] border-notAccent rounded-[10px] w-full", selected == key && "text-fgСolor border-fgСolor")} onClick={() => setSelected(key)}>
                                {value.title}
                            </Button>
                        )
                    })
                }


        </GiveAnswerLayout>
     );
}

export default SelectVariant;