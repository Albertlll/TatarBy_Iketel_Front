import React, { useState } from 'react';
import useRegistrationStore from '../../store/RegStore';
import Button from '../../../../kit/Button/Button';
import Input from '../../../../kit/Input/Input';
import s from "../stepsStyle.module.css"

const PasswordScreen = () => {
  const { nextStep, prevStep, updateData } = useRegistrationStore();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNext = () => {
    if (password === confirmPassword) {
      updateData({ password }); // Сохраняем пароль
      nextStep(); // Переходим на следующий шаг
    }
  };

  return (
    <div className={s.cont}>
      <h2>Придумай пароль!</h2>
      {/* <input
        type="number"
        placeholder="Возраст"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      /> */}

      <Input placeholder="Пароль" onChange={(e) => setPassword(e.target.value)} />
      <Input placeholder="Повторите пароль" onChange={(e) => setConfirmPassword(e.target.value)} />

      <Button onClick={handleNext} disabled={!password}>
        Дальше!
      </Button>
    </div>
  );
};

export default PasswordScreen;