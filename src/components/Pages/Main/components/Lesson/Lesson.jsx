import { useState } from 'react';
import s from './Lesson.module.css'
import disabled from './img/icons/answers/disabled.svg'

import not_right from './img/icons/answers/not_right.svg'
import right from './img/icons/answers/right.svg'
import cloud from './img/cloud.svg'
import myImage from './img/default.png';
import Progress from './components/Progress/Progress';
import Variants from './components/Variants/Variants';
function Lesson() {

    const tasks = [
        {
            "title": 'Кто лучший программист в CitCode?',
            "variants": ['Булат', 'Алан', 'Дамир', 'Мурат'],
            "answer": 1,
            "state": 0
        },

        {
            "title": "Какой элемент является основой для жизни на Земле?",
            "variants": ["Кислород", "Углерод", "Водород", "Азот"],
            "answer": 1,
            "state": 0

        },
        {
            "title": "В каком году был основан город Казань?",
            "variants": ["1005", "1167", "1221", "1552"],
            "answer": 1,
            "state": 0

        },
        {
            "title": "Какой язык считается одним из самых распространённых в мире?",
            "variants": ["Английский", "Испанский", "Китайский", "Русский"],
            "answer": 2,
            "state": 0

        }
    ]

    const [step, setStep] = useState(0);
    const [statetype, setStatetype] = useState({'type': 0, 'answer': 0});
    const [tasks_data, setTasks] = useState(tasks);

    // const content = isSelected ? 'selected' : '';
    const task = tasks[step];

    const handleCheck = () => {
        if (statetype.answer === task.answer) {
            tasks_data[step].state = 1;
            setTasks(tasks_data);
            setStatetype({'type': 1, 'answer': statetype.answer});
        } else {
            tasks_data[step].state = 2;
            setTasks(tasks_data);
            setStatetype({'type': 2, 'answer': statetype.answer});
        }
        console.log(tasks_data);
    }

    const handleNext = () => {
        setStep(step + 1);
        setStatetype({'type': 0, 'answer': 0});
    }


    var specialclass = s.selected;
    if (statetype.type === 1) {
        specialclass = s.correct
    }
    else if (statetype.type === 2) {
        specialclass = s.uncorrect

    }

    return (
    <div className={s.lesson_card}>
        <Progress tasks={tasks_data}></Progress>

        <h1 className={s.que}>Выбери правильный ответ</h1>

        <div className={s.character_block}>
            <img src={myImage} alt='' />
            <div className={s.cloud_cont}>
                <img src={cloud} className={s.cloud} alt="" />
                <div className={s.task_title}>{task.title}</div>
            </div>
        </div>



        <Variants task={task} statetype={statetype} setStatetype={setStatetype} specialclass={specialclass}></Variants>


        <div className={s.check_btn_cont}>
            <button onClick={() => statetype.type == 0 ? handleCheck() : handleNext()}
            className={s.check_btn + ' ' + (statetype.type == 2 ? s.false_btn : s.true_btn)}>
            {statetype.type != 0 ? 'Дальше' : 'Проверить'}</button>
        </div>

    </div>);
}

export default Lesson;