import s from './EnterToQuest.module.css'
import Navbar from '../../../../Shared/Navbar/Navbar';
import Menu from '../../../../Shared/Menu/Menu';
function EnterToQuest() {
    return (
    <div>
        <Navbar/>
        <Menu/>
        <div className={s.main}>
            <div className={s.inp_wrapper}>
                <input className={s.enter_input} type="username" placeholder="Введите фио" onChange={(e) => setUsername(e.target.value)}/>
            </div>
            
            <div className={s.inp_wrapper}>
                <input className={s.enter_input} type="username" placeholder="Код теста" onChange={(e) => setUsername(e.target.value)}/>
            </div>

        </div>


    </div>
);
}

export default EnterToQuest