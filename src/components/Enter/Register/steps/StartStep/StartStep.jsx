import s from "../stepsStyle.module.css"
import batyr from "./batyr.png"
import { Link } from "react-router-dom";
import Button from "../../../../kit/Button/Button";
import useRegistrationStore from "../../store/RegStore";
function StartStep() {

    const { nextStep } = useRegistrationStore();

    return (
        <div className={s.cont}>



        <img className={s.batyr} src={batyr}/>
      <h2 className={s.label}>Селем, похоже у тебя нет аккаунта, давай создадим его</h2>
      {/* <input
        type="number"
        placeholder="Возраст"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      /> */}

        <Button onClick={() => {nextStep()}}>

            Давай

            </Button>


        <Link to="/auth">
        <Button>

            Уже есть

            </Button>

        </Link>
    </div>
    );
}

export default StartStep;