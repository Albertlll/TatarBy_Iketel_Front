import React, { useState } from 'react';
import useRegistrationStore from '../../store/RegStore';
import Button from '../../../../kit/Button/Button';
import Input from '../../../../kit/Input/Input';

import s from "../stepsStyle.module.css"


const AgeScreen = () => {
  const { nextStep, updateData } = useRegistrationStore();
  const [age, setAge] = useState('');


  const handleNext = () => {
    updateData({ age: parseInt(age) }); // Сохраняем возраст
    nextStep(); // Переходим на следующий шаг
  };

  return (
    <div className={s.cont}>
      <h2>Сколько тебе лет?</h2>
      {/* <input
        type="number"
        placeholder="Возраст"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      /> */}

      <Input value={age} placeholder="Возраст" onChange={(e) => {

        const inputValue = e.target.value;
        // Удаляем всё, кроме цифр
        const numbersOnly = inputValue.replace(/\D/g, '');
        setAge(numbersOnly)
        
        
        }} />
      <Button onClick={handleNext} disabled={!age}>
        Дальше!
      </Button>
    </div>
  );
};

export default AgeScreen;