import BoldBtn from "./UiParts/BoldBtn";
import Ochpochcoins from "./UiParts/Ochpochcoins";

import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Fairytail from "./Fairytail";
import MainPage from "./MainPage";

function GamesLayout({children}) {


    useEffect(() => {

    }, [])







    return ( 
        <div className="w-full h-full p-[50px]  box-border ">

            <Ochpochcoins/>


            {
                children
            }


            {/* <MainPage/> */}


            

        </div>
     );
}

export default GamesLayout;