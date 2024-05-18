import s from './Variants.module.css'

function Variants(props) {
    const handleSelect = (index) => {
        console.log(props.statetype.type);
        if (props.statetype.type === 0 ){
            props.setStatetype({'type': 0, 'answer': index})
            console.log('fvdf');
        };
    }
    
    return (

    <div className={s.variants_cont}>
        {
        props.task.variants.map((variant, index) => {
        //             (selected === index ? s.selected : '')}>

        return(
        <div key={index} onClick={() => handleSelect(index)} className={s.variant_btn + ' ' +
        (props.statetype.answer == index ? props.specialclass : '')}>
            <div className={s.variant_wrapper}>
                {variant}
            </div>
        </div>)})}
    </div>
    );
}

export default Variants;