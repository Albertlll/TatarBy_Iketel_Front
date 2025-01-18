import Button from "../../kit/Button/Button";
import Input from "../../kit/Input/Input";
import s from "./Auth.module.css"
function Auth(props) {
    return ( 
        <div className={s.cont}>

            <h1>Икетель</h1>
            
            <h2>Регистрация</h2>
            <form>
                <Input placeholder="имя пользователя или почта"/>
                <Input/>
                <Button type="submit">Авторизоваться</Button>
            </form>
        
        </div>
     );
}

export default Auth;