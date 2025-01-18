import { Link } from "react-router-dom";
import Button from "../../kit/Button/Button";
import s from "./Enter.module.css"
function Enter() {
    return (
        <div className={s.cont}>

            <h1>Икетель</h1>
            <Link to="/login">
                <Button className={s.enterBtn}> Войти</Button>
            </Link>

            <Link to="guest-enter">
                <Button className={s.enterBtn}> Ввести код</Button>
            </Link>
        </div>
    );
}

export default Enter;