import s from './CreatePrompt.module.css'
import Menu from '../../../../Shared/Menu/Menu';
import Navbar from '../../../../Shared/Navbar/Navbar';
function CreatePrompt() {
    return (
        <div>
            <Navbar/>
            <Menu/>
            <div className={s.main}>

            <div className={s.textarea_input_wrapper}>
                <textarea className={s.textarea_input} type="text" placeholder="Введите фио" onChange={(e) => setUsername(e.target.value)}/>
            </div>
            
            <div className={s.inp_wrapper}>
                <input className={s.enter_input} type="username" placeholder="Код теста" onChange={(e) => setUsername(e.target.value)}/>
            </div>

            <button  className={s.enter_btn} type="button" onClick={() => StartTest()}>Начать тест</button>

        </div>
        </div>
        );
}

export default CreatePrompt;