import { useState, useEffect, useContext } from "react";
import httoClient from "../../../httoClient";
import Menu from "../../Shared/Menu/Menu";
import Navbar from "../../Shared/Navbar/Navbar";
import s from './Main.module.css'
import { UserContext } from '../../../../contexts/CotextProviderUser';
import EnterToQuest from "./components/EnterToQuest/EnterToQuest";
import Lesson from "./components/Lesson/Lesson";
import { Route, Routes } from "react-router-dom";
function  Main() {
    const {user, setUser} = useContext(UserContext)
    // useEffect(() => {
    //     (async () => {
    //     try {
    //         const resp = await httoClient.get('./@me')
    //         setUser(resp.data);
    //         console.log(resp.data);
    //     }catch{
    //         console.log('error');
    //     }
    // })}, [])

    useEffect(() => {
        (async () => {
        //   try {
            const resp = await httoClient.get("/@me");
            setUser(resp.data);
            console.log(resp.data);
        //   } catch (error) {
        //     console.log("Not authenticated");
        //   }
        })();
      }, []);

    return (
    <div id={s.Main_cont}>

            <Routes>
                <Route path="/" element={<EnterToQuest />} />
                <Route path="lesson" element={<Lesson />} />
            </Routes>
            {/* <h1>
                { user ? user.username : 'Anonymous'}
            </h1> */}
    </div>);
}

export default Main;