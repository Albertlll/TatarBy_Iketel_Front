import s from './EnterToQuest.module.css'
import Navbar from '../../../../Shared/Navbar/Navbar';
import Menu from '../../../../Shared/Menu/Menu';
import { useState } from 'react';
function EnterToQuest() {

    const ToQuest = async () => {
        const response = await httoClient.post("/lesson",
        {
            code
        });
        
    }


    const [code, setCode] = useState(null)
    const [username, setUsername] = useState(null)

    return (
    <div>
        <Navbar/>
        <Menu/>
        <div className={s.main}>
            <div className={s.inp_wrapper}>
                <input className={s.enter_input} type="username" placeholder="Введите фио" onChange={(e) => setUsername(e.target.value)}/>
            </div>
            
            <div className={s.inp_wrapper}>
                <input className={s.enter_input} type="username" placeholder="Код теста" onChange={(e) => setCode(e.target.value)}/>
            </div>
 
            <button  className={s.enter_btn} type="button" onClick={() => ToQuest()}>Начать квест</button>

        </div>


    </div>
);
}

export default EnterToQuest