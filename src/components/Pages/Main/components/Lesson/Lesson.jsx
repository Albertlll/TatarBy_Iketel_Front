import { useState } from 'react';
import s from './Lesson.module.css'
import disabled from './img/icons/answers/disabled.svg'

import not_right from './img/icons/answers/not_right.svg'
import right from './img/icons/answers/right.svg'
import cloud from './img/cloud.svg'
import unicorn from './img/default.png';
import Progress from './components/Progress/Progress';
import Variants from './components/Variants/Variants';
import data from './knightII.json'
import cloud_replica from './img/cloud_replica.svg'

function Lesson() {
    const [count, setCount] = useState(0)
    const [result_show, setResultShow] = useState(false);

    
    // const quests = [
    //     {
    //         'replika': 'Привет',
    //         'art': '...',
    //         'tasks': [
    //             {
    //                 "title": 'Кто лучший программист в CitCode?',
    //                 "variants": ['Булат', 'Алан', 'Дамир', 'Мурат'],
    //                 "answer": 1,
    //                 "state": 0
    //             },
        
    //             {
    //                 "title": "Какой элемент является основой для жизни на Земле?",
    //                 "variants": ["Кислород", "Углерод", "Водород", "Азот"],
    //                 "answer": 1,
    //                 "state": 0
        
    //             },
    //             {
    //                 "title": "В каком году был основан город Казань?",
    //                 "variants": ["1005", "1167", "1221", "1552"],
    //                 "answer": 1,
    //                 "state": 0
        
    //             },
    //             {
    //                 "title": "Какой язык считается одним из самых распространённых в мире?",
    //                 "variants": ["Английский", "Испанский", "Китайский", "Русский"],
    //                 "answer": 2,
    //                 "state": 0
        
    //             }
    //         ]
    //     },
    //     {
    //         'replika': 'Привет',
    //         'art': '...',
    //         'tasks': [
    //             {
    //                 "title": 'Кто лучший программист в CitCode?',
    //                 "variants": ['Булат', 'Алан', 'Дамир', 'Мурат'],
    //                 "answer": 1,
    //                 "state": 0
    //             },
        
    //             {
    //                 "title": "Какой элемент является основой для жизни на Земле?",
    //                 "variants": ["Кислород", "Углерод", "Водород", "Азот"],
    //                 "answer": 1,
    //                 "state": 0
        
    //             },
    //             {
    //                 "title": "В каком году был основан город Казань?",
    //                 "variants": ["1005", "1167", "1221", "1552"],
    //                 "answer": 1,
    //                 "state": 0
        
    //             },
    //             {
    //                 "title": "Какой язык считается одним из самых распространённых в мире?",
    //                 "variants": ["Английский", "Испанский", "Китайский", "Русский"],
    //                 "answer": 2,
    //                 "state": 0
        
    //             }
    //         ]
    //     },
    //     {
    //         'replika': 'Привет',
    //         'art': '...',
    //         'tasks': [
    //             {
    //                 "title": 'Кто лучший программист в CitCode?',
    //                 "variants": ['Булат', 'Алан', 'Дамир', 'Мурат'],
    //                 "answer": 1,
    //                 "state": 0
    //             },
        
    //             {
    //                 "title": "Какой элемент является основой для жизни на Земле?",
    //                 "variants": ["Кислород", "Углерод", "Водород", "Азот"],
    //                 "answer": 1,
    //                 "state": 0
        
    //             },
    //             {
    //                 "title": "В каком году был основан город Казань?",
    //                 "variants": ["1005", "1167", "1221", "1552"],
    //                 "answer": 1,
    //                 "state": 0
        
    //             },
    //             {
    //                 "title": "Какой язык считается одним из самых распространённых в мире?",
    //                 "variants": ["Английский", "Испанский", "Китайский", "Русский"],
    //                 "answer": 2,
    //                 "state": 0
        
    //             }
    //         ]
    //     }
    // ]

    // console.log(data)

    const [step, setStep] = useState(0);
    const [q_index, setQindex] = useState(0);
    const [message_showed, setMessageShowed] = useState(false);

    
    const [statetype, setStatetype] = useState({'type': 0, 'answer': 0});

    const quest = data[q_index];
    const task = quest.tasks[step];

    const [tasks_data, setTasks] = useState(quest.tasks);
    const [character, setCharacter] = useState(unicorn);
    // const content = isSelected ? 'selected' : '';


    const handleCheck = () => {
        if (statetype.answer === task.answer) {
            tasks_data[step].state = 1;
            setTasks(tasks_data);
            setCount(count + 1);
            setStatetype({'type': 1, 'answer': statetype.answer});
        } else {
            tasks_data[step].state = 2;
            setTasks(tasks_data);
            setStatetype({'type': 2, 'answer': statetype.answer});
        }
        console.log(count);
    }

    const handleNext = () => {
        if (step === 7){
            if (q_index  == data.length  - 1){
                setResultShow(true);
            }


            setMessageShowed(false);
            setStep(0);
            console.log(q_index)

            setQindex(q_index + 1);
            console.log(q_index)

            setStatetype({'type': 0, 'answer': 0});

            console.log(q_index)
            // setCharacter(data[q_index + 1].image_url)

            tasks_data.map((task) => {task.state = 0})
        }else{
            setStep(step + 1);
            setStatetype({'type': 0, 'answer': 0});

        }

    }


    var specialclass = s.selected;
    if (statetype.type === 1) {
        specialclass = s.correct
    }
    else if (statetype.type === 2) {
        specialclass = s.uncorrect

    }

    return (
    <>

    <div className={(!message_showed && step == 0) ? s.replica_visible : s.replica_nonvisible}>
        <img className={s.character} src={character} alt="" />
        <img className={s.cloud_replica} src={cloud_replica} alt="" />


        <div className={s.replica_text}>
            {quest.replika}
        </div>

        <div className={s.check_btn_cont}>
            <button onClick={() => {setMessageShowed(true)}} className={s.check_btn}>Далее</button>
        </div>

    </div>

    <div className={s.result}>{result_show ? 'Ваш результат: ' + count : ''}</div>

    <div className={s.lesson_card}>
        <Progress tasks={tasks_data}></Progress>

        <h1 className={s.que}>Выбери правильный ответ</h1>

        <div className={s.character_block}>
            <img src={character} className={s.task_character} alt='' />
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

    </div>
    
    </>);
}

export default Lesson;