import s from './RoadmapBlock.module.css'
import art1 from './images/arts/1.png' 
import wire1  from './images/wires/wire1.svg'
import wire2  from './images/wires/wire2.svg'
import wire3  from './images/wires/wire3.svg'

import completed from './images/stages/completed.png';


const index_art = {
    0 : art1,
    1 : art1,
    2 : art1,
    // 3 : wire4,
}

const index_wire = {
    0 : wire1,
    1 : wire2,
    2 : wire3,
} 
function RoadmapBlock(props) {
    const index = props.index;
    return (
    <div onClick={() => {window.location.href += '/lesson'}} className={s.roadmap_block}>
        <div className={s.main}>
            <img className={s.rmb_image} src={art1} alt="" />
            <img className={s.rmb_point} src={completed} alt="" />
        </div>
        <img className={s.wire} src={index_wire[index]} alt="" />
    </div>
);
}

export default RoadmapBlock;