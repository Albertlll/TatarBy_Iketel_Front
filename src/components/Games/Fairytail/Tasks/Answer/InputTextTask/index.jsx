import Input from "../../../../../kit/Input/Input";
import GiveAnswerLayout from "../GiveAnswerLayout";

function InputTextTask() {


    const handleNext = () => {
        // TODO: Add your code here
        console.log("Next button clicked");
    }


    return ( 
        <GiveAnswerLayout handleNext={handleNext}>
            <Input placeholder="ответ"/>
        </GiveAnswerLayout>
     );
}

export default InputTextTask;