import { useState } from "react";
import httoClient from "../../../httoClient";
import s from './Login.module.css'
import { NavLink } from "react-router-dom";
function Login() {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const logInUser = async () => {
        const response = await httoClient.post("/login",
        {
            username,
            password,
        });
        window.location.href = '/main';
        
        console.log(response.data);
    }
    return (
        <>
        <form>

            <h1 id={s.proj_name}>
                ИкеТель
            </h1>
            <div id={s.enter_block}>
                <div id={s.enter_block_content_wrapper}>
                    <h1 id={s.enter_lbl}>
                        Вход
                    </h1>

                    <div id={s.name_wrapper} className={s.inp_wrapper}>
                    <input className={s.enter_input} type="username" placeholder="Логин" onChange={(e) => setUsername(e.target.value)}/>
                    </div>

                    <div id={s.username_wrapper} className={s.inp_wrapper}>
                    <input className={s.enter_input} type="password" placeholder="Пароль" onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <button  className={s.enter_btn} type="button" onClick={() => logInUser()}>Войти</button>
                    <ul className={s.enter_help_links}>
                        <li><NavLink to="/">Пройти квест</NavLink></li>
                        <li><NavLink to="/registration">Нет аккаунта?</NavLink></li>
                    </ul>
                </div>
            </div>
            </form>

        </>


    );
}

export default Login;
