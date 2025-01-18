import React, { useEffect, useState } from 'react';
import useRegistrationStore from '../../store/RegStore';
import Button from '../../../../kit/Button/Button';
import Input from '../../../../kit/Input/Input';
import s from "../stepsStyle.module.css"
import { Link } from 'react-router-dom';
import batyr from './batyr.png'
import useAuthStore from '../../../stores/authStore';


function FinalStep() {
    const { nextStep, prevStep, updateData } = useRegistrationStore();
    const { register } = useAuthStore();

    const { email, password } = useRegistrationStore();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const regReq = async () => {
      setIsLoading(true);
      setError(null);
      try {
        await register(email, password);
        alert('Registration successful!');
      } catch (error) {
        setError(error.message || 'Registration failed');
        alert('Registration failed: ' + error.message);
      } finally {
        setIsLoading(false);
      }
    };

    useEffect(() => {
      if (email && password) {
        regReq();
      }
    }, [email, password]);
    
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