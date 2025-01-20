import BoldBtn from "./UiParts/BoldBtn";
import Ochpochcoins from "./UiParts/Ochpochcoins";

import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Fairytail from "./Fairytail";
import MainPage from "./MainPage";

function GamesLayout({children}) {


    return ( 
        <div className="w-full h-full p-[50px] flex flex-col justify-between box-border ">

            {
                children
            }
            {/* <MainPage/> */}

        </div>
     );
}

export default GamesLayout;