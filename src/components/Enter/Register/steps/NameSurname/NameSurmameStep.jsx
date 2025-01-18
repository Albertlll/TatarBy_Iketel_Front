import React, { useState } from 'react';
import useRegistrationStore from '../../store/RegStore';
import Button from '../../../../kit/Button/Button';
import Input from '../../../../kit/Input/Input';
import s from "../stepsStyle.module.css"


const NameScreen = () => {
  const { prevStep, nextStep, updateData, reset } = useRegistrationStore();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = () => {
    updateData({ firstName, lastName }); // Сохраняем имя и фамилию
    console.log('Регистрация завершена!');
    nextStep();

  };

  return (
    <div className={s.cont}>
      <h2>Давай знакомиться!</h2>
      {/* <input
        type="number"
        placeholder="Возраст"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      /> */}

      <Input placeholder="Имя" onChange={(e) => setFirstName(e.target.value)} />
      <Input placeholder="Фамилия" onChange={(e) => setLastName(e.target.value)} />

      <Button onClick={handleSubmit} disabled={!firstName || !lastName}>
        Зарегистрироваться!
      </Button>
    </div>
  );
};

export default NameScreen;