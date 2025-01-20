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

    const handleNext = () => {
        // TODO: Add your code here
        console.log("Next button clicked");
    }

    return ( 
        <GiveAnswerLayout handleNext={handleNext}>
                            
                {
                    variants.map((value, key) => {
                        return (
                            <Button key={key} className={cn(" hover:bg-bgСolor hover:text-notAccent text-notAccent bg-opacity-0 border-[3px] border-notAccent rounded-[10px] w-full",
                                                                selected == key && "text-fgСolor border-fgСolor hover:text-fgСolor",
                                                              )} onClick={() => {

                                                                     setSelected(key); 
                                                                
                                                                }}>
                                {value.title}
                            </Button>
                        )
                    })
                }


        </GiveAnswerLayout>
     );
}

export default SelectVariant;