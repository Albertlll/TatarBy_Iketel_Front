import React, { useState } from 'react';
import useRegistrationStore from '../../store/RegStore';
import Button from '../../../../kit/Button/Button';
import Input from '../../../../kit/Input/Input';
import s from "../stepsStyle.module.css"
import { Link } from 'react-router-dom';
import batyr from './batyr.png'

function FinalStep() {
    const { nextStep, prevStep, updateData } = useRegistrationStore();
//   const [code, setCode] = useState('');

  return (
    <div className={s.cont}>



        <img className={s.batyr} src={batyr}/>
      <h2>Поздравляю! Вы создали аккаунт!</h2>
      {/* <input
        type="number"
        placeholder="Возраст"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      /> */}

        <Link to="/">
        <Button>

            В меню

            </Button>

        </Link>
    </div>
  );
}

export default FinalStep;