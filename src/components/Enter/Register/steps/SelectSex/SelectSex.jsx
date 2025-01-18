import Button from "../../../../kit/Button/Button";
import useRegistrationStore from "../../store/RegStore";
import s from "./SelectSex.module.css"
import batyr from "./batyr.png"
import suanasy from "./suanasy.png"

function SelectSex() {
    const { updateData, nextStep } = useRegistrationStore();




    const handleBoyNext = () => {
        updateData({ isMan : true }); // Сохраняем пароль
        nextStep(); // Переходим на следующий шаг
        
    };

    const handleGirlNext = () => {
        updateData({ isMan : false }); // Сохраняем пароль
        nextStep(); // Переходим на следующий шаг
        
    };


    return (
        <div className={s.gendersCont}>

            <div className={s.genderCard}>

                <img className={s.genderImg} src={batyr}/>


                <Button onClick={handleBoyNext}>
                    Мужской
                </Button>

            </div>



            <div className={s.genderCard}>

                <img className={s.genderImg} src={suanasy}/>


                <Button onClick={handleGirlNext}>
                    Женский
                </Button>

            </div>


        </div>
    );
}

export default SelectSex;