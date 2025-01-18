import { useParams } from 'react-router-dom';

import BoldBtn from "../UiParts/BoldBtn";
import Ochpochcoins from "../UiParts/Ochpochcoins";
import shurale from './shurale.png'
import suanasy from './suanasy.png'
import  plus from "./+.png"
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Fairytail from "../Fairytail";
import GamesLayout from '../GamesLayout';
function MainPage() {
    const navigate = useNavigate()

    const { id } = useParams(); // Получаем параметр `id` из URL

    const data = [
        {name: "Динозавры в космосе", id : 1234},
        {name: "Пивозавры в пиве", id : 1234},
        {name: "Алан в кофе", id : 1234},
        {name: "Мурат в фигме", id : 1234},
        
        

    ]
    return ( 
        <>

        <GamesLayout>





            <BoldBtn className=" mt-[20px]">

                <div>
                    Продолжить:
                </div>

                <div className=" text-[25px]"> 
                    Татар тормышы
                </div>

            </BoldBtn>



            <div className="mt-[20px] justify-between gap-[20px] text-[19px] flex">

                <div className="flex flex-col items-center">

                    <img className="w-[80px] h-auto" src={shurale} alt="" />
                    <BoldBtn accent>
                        Шуралага булыш!
                    </BoldBtn>
                </div>

                <div className="flex flex-col items-center">
                    <img className="w-[80px] h-auto" src={suanasy} alt="" />

                    <BoldBtn accent>
                        Кайда тарак су анасы?
                    </BoldBtn>

                </div>

            </div>

            <div className=" mt-[31px] text-[white] text-[30px]">
                Ваши сказки:
            </div>



            <div className="flex flex-col w-full gap-[20px]">


                <BoldBtn className="w-full flex items-center justify-center">
                    <img src={plus} alt="" />
                </BoldBtn>


                {
                    data.map((value, key) => {
                        return (
                            <BoldBtn onClick={() => {navigate(`fairytail/${value.id}`)}} key={key} accent className="w-full flex items-center justify-center text-[20px]">
                                    {value.name}
                            </BoldBtn>
                        )
                    })

                }

      



            </div>



            </GamesLayout>

        </>
     );
}

export default MainPage;