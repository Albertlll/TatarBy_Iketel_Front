import s from './CreatePrompt.module.css'

function CreatePrompt() {
    return (
        <div className={s.main}>
            <div className={s.inp_wrapper}>
                <input className={s.enter_input} type="username" placeholder="Введите фио" onChange={(e) => setUsername(e.target.value)}/>
            </div>
            
            <div className={s.inp_wrapper}>
                <input className={s.enter_input} type="username" placeholder="Код теста" onChange={(e) => setUsername(e.target.value)}/>
            </div>

            <button  className={s.enter_btn} type="button" onClick={() => StartTest()}>Начать тест</button>

        </div>);
}

export default CreatePr<div>pt;