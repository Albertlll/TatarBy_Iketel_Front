import { Link } from "react-router-dom";
import Button from "../../kit/Button/Button";
import Input from "../../kit/Input/Input";
import s from "./Auth.module.css"
function Auth(props) {
    return ( 
        <div className={s.cont}>

            <h1>Икетель</h1>
            
            <h2>Рәхим итегез! </h2>

            <div className={s.inpForm}>
                <Input placeholder="имя пользователя или почта"/>
                <Input placeholder="пароль"/>
                <Button>Войти</Button> 


                <div className={s.linksCont}>

                    <Link to="/register" className={s.link}>Создать аккаунт</Link>

                    <Link className={s.link}>Забыли пароль</Link>


                </div>
                
            </div>
    
        </div>
     );
}

export default Auth;