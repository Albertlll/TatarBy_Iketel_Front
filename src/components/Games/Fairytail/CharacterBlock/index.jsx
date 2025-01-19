function CharacterBlock({ replica, image}) {
    return ( 
        
        <div className="flex justify-between gap-5">
        <img src={image} className=" rounded-full w-[64px] h-[64px]" alt="" />

        <div className=" p-[10px] border-solid rounded-[10px] border-[3px] border-notAccent w-full text-[white]">

            {replica}

        </div>

        </div>


     );
}

export default CharacterBlock;