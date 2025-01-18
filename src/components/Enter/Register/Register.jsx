import Input from "../../kit/Input/Input";
import AgeScreen from "./steps/Age/AgeStep";
import useRegistrationStore from "./store/RegStore"
import s from "./Register.module.css"
import EmailScreen from "./steps/Mail/MailStep";
import PasswordScreen from "./steps/Password/PasswordStep";
import NameScreen from "./steps/NameSurname/NameSurmameStep";
import SelectSex from "./steps/SelectSex/SelectSex";
import FinalStep from "./steps/FinalStep/FinalStep";

function Register() {
    const { step } = useRegistrationStore();

    console.log(step)

    return (
        <div className={s.cont}>

            <div className={s.infoCont}>

                <h1>
                    Икетель
                </h1>

                <progress value={step} max={6} className={s.progress}/>

            </div>


            {step === 1 && <AgeScreen />}
            {step === 2 && <EmailScreen />}
            {step === 3 && <PasswordScreen />}
            {step === 4 && <NameScreen />}
            {step === 5 && <SelectSex />}

            {step === 6 && <FinalStep/>}


        </div>
        )
}

export default Register;