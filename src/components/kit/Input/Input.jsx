import s from "./Input.module.css"

function Input({value, placeholder, onChange}) {
    return ( 

            <input value={value} placeholder={placeholder} onChange={onChange}>  

            </input>
     );
}

export default Input;