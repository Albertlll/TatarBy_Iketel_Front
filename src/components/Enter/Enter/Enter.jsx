import Button from "../../kit/Button/Button";
import s from "./Enter.module.css"
function Enter() {
    return (
        <div className={s.cont}>

            <h1>Икетель</h1>

            <Button content="Войти" className={s.enterBtn}/>
            <Button content="Ввести код" className={s.enterBtn}/>
        </div>
    );
}

export default Enter;