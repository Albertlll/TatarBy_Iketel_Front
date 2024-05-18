import s from './Navbar.module.css';
import burger_icon from './icons/burger.svg'
import cross_icon from './icons/cross.svg'

import { MenuContext } from '../../../../contexts/ContextProviderMenu';
import { UserContext } from '../../../../contexts/CotextProviderUser';
import { useContext } from'react';
import { NavLink } from 'react-router-dom';
function Navbar() {

    const {IsMenuActive, SetMenuActive} = useContext(MenuContext);
    const {user} = useContext(UserContext);
    return (
    <header>
        <div className={s.header_content}>
            <div className={s.left_part}>ИкеТель</div>
            <div className={s.right_part}>
                <ul>
                    <li><NavLink to="/">{user ? user.username : "sd"}</NavLink></li>
                    <li><NavLink to="/login">Настройки</NavLink></li>
                </ul>
            </div>

            <div className={s.right_part_mobile}>
                <img onClick={() => {SetMenuActive(!IsMenuActive)}} src={IsMenuActive ? cross_icon : burger_icon} alt="" />
            </div>

        </div>


    </header>);
}

export default Navbar;