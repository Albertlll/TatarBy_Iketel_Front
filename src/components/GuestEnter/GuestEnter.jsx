import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../kit/Input/Input";
import Button from "../kit/Button/Button";
import s from "../Enter/Register/steps/stepsStyle.module.css"
function GuestEnter() {
    const [code, setCode] = useState('');

    return (
        <div className={s.cont}>
        <h2>Введи код!</h2>
        {/* <input
          type="number"
          placeholder="Возраст"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        /> */}
  
        <Input placeholder="Код" onChange={(e) => setCode(e.target.value)} />

        <Link>
        <Button disabled={!code}>
          Дальше!
        </Button>
        </Link>
      </div>
    );
}

export default GuestEnter;