import disabled from '../../img/icons/answers/disabled.svg'

import not_right from '../..//img/icons/answers/not_right.svg'
import right from '../../img/icons/answers/right.svg'

import s from './Progress.module.css'

function Progress(props) {
    return (
        <div className={s.tasks_line}>
        {
        props.tasks.map((val, index) => {
            var type_img = ''
            if (val.state === 1) {
                type_img = right
            } else if (val.state === 2) {
                type_img = not_right
            }else{
                type_img = disabled
            }
            return (
                <img src={type_img} className={s.task_rect}></img>
            )
        })
        }
    </div>
    );
}

export default Progress;