function Input({value, placeholder, onChange}) {
    return ( 

            <input className="outline-none border-[3px] border-fgСolor text-fgСolor placeholder:text-fgСolor/50 rounded-[15px] text-[20px] p-[10px] w-full box-border bg-[transparent]" 
            value={value} placeholder={placeholder} onChange={onChange}>  

            </input>
     );
}

export default Input;