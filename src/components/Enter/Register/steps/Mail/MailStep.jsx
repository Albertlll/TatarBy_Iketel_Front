import React, { useState } from 'react';
import useRegistrationStore from '../../store/RegStore';
import Button from '../../../../kit/Button/Button';
import Input from '../../../../kit/Input/Input';
import s from "../stepsStyle.module.css"

const EmailScreen = () => {
  const { nextStep, prevStep, updateData } = useRegistrationStore();
  const [email, setEmail] = useState('');
//   const [code, setCode] = useState('');

  const handleNext = () => {
    updateData({ email }); // Сохраняем почту и код
    nextStep(); // Переходим на следующий шаг
  };

  return (
    <div className={s.cont}>
      <h2>Какая у тебя почта?</h2>
      {/* <input
        type="number"
        placeholder="Возраст"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      /> */}

      <Input onChange={(e) => setEmail(e.target.value)} />
      <Button onClick={handleNext} disabled={!email}>
        Дальше!
      </Button>
    </div>
  );
};

export default EmailScreen;