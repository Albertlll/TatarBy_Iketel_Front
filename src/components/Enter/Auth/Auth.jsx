import { Link } from "react-router-dom";
import Button from "../../kit/Button/Button";
import Input from "../../kit/Input/Input";
import s from "./Auth.module.css"
function Auth(props) {
    return ( 
        <div className=" w-[100vw] h-[100vh] flex justify-center items-center flex-col">

            <h1 className=" text-[60px]">Икетель</h1>
            
            <h2 className=" text-[20px] text-fgСolor">Рәхим итегез! </h2>

            <div className=" flex w-[400px] mt-[30px] gap-[30px] flex-col">
                <Input placeholder="имя пользователя или почта"/>
                <Input placeholder="пароль"/>
                <Button>Войти</Button> 


                <div className=" w-full flex justify-between">

                    <Link to="/register" className=" hover:text-subFgColor">Создать аккаунт</Link>

                    <Link className=" hover:text-subFgColor">Забыли пароль</Link>


                </div>
                
            </div>
    
        </div>
     );
}

export default Auth;