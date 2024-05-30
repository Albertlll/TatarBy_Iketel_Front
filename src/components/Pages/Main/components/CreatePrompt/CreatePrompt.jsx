import s from './CreatePrompt.module.css'
import Menu from '../../../../Shared/Menu/Menu';
import Navbar from '../../../../Shared/Navbar/Navbar';
import { useState } from "react";
function CreatePrompt() {

    const [key, setKey] = useState(null);

    const PostPrompt = async () => {
        const response = await httoClient.post("/lesson",
        {
            'description': prompt_main,
            'additional_requirements': additional,
            'themes': themes.split(';'),
            'npcs_list': [ch1, ch2, ch3, ch4]

        });
        
        setKey(response.data.code)
    }




    const [prompt_main, setPromptmain] = useState(null);
    const [themes, setThemes] = useState(null);
    const [additional, setAdditional] = useState(null);

    const [ch1, setCh1] = useState({'name': '', 'character_description': '', 'look_description':''});
    const [ch2, setCh2] = useState({'name': '', 'character_description': '', 'look_description':''});
    const [ch3, setCh3] = useState({'name': '', 'character_description': '', 'look_description':''});
    const [ch4, setCh4] = useState({'name': '', 'character_description': '', 'look_description':''});


    return (
        <div>
            <Navbar/>
            <Menu/>
            <div className={s.main}>



                <div className={s.left_block}>
                    <div className={s.textarea_input_wrapper}>
                    <textarea className={s.textarea_input} type="text" placeholder="Концепт" onChange={(e) => setPromptmain(e.target.value)}/>
                    </div>
                    
                    <div className={s.inp_wrapper}>
                        <input className={s.enter_input} type="username" placeholder="Темы (через точку с запятой)" onChange={(e) => setThemes(e.target.value)}/>
                    </div>

                    <div className={s.inp_wrapper}>
                        <input className={s.enter_input} type="username" placeholder="Дополнительные требования" onChange={(e) => setAdditional(e.target.value)}/>
                    </div>

                    <button  className={s.enter_btn} type="button" onClick={() => PostPrompt()}>Создать</button>

                </div>


                <div className={s.right_block}>

                    <div>
                        <div className={s.inp_wrapper + " " + s.ch}>
                            <input className={s.enter_input} type="username" placeholder="Имя персонажа 1" onChange={(e) => setCh1(
                                {'name': e.target.value, 'character_description': ch1.character_description, 'look_description': ch1.look_description})}/>
                        </div>

                        <div className={s.textarea_input_wrapper + " " + s.ch + " " + s.ch_area}>
                            <textarea className={s.textarea_input} type="text" placeholder="Внешность 1" onChange={(e) => setCh1(
                                {'name': ch1.name, 'character_description': ch1.character_description, 'look_description': e.target.value}
                            )}/>
                        </div>
                        
                        <div className={s.textarea_input_wrapper+ " " + s.ch + " " + s.ch_area}>
                            <textarea className={s.textarea_input} type="text" placeholder="Характер 1" onChange={(e) => setCh1(
                                {'name': ch1.name, 'character_description': e.target.value, 'look_description': ch1.look_description}
                            )}/>
                        </div>

                    </div>

                    <div>
                        <div className={s.inp_wrapper + " " + s.ch}>
                            <input className={s.enter_input} type="username" placeholder="Имя персонажа 2" onChange={(e) => setCh2(
                                {'name': e.target.value, 'character_description': ch2.character_description, 'look_description': ch2.look_description})}/>
                        </div>

                        <div className={s.textarea_input_wrapper + " " + s.ch + " " + s.ch_area}>
                            <textarea className={s.textarea_input} type="text" placeholder="Внешность 2" onChange={(e) => setCh2(
                                {'name': ch2.name, 'character_description': ch2.character_description, 'look_description': e.target.value}
                            )}/>
                        </div>
                        
                        <div className={s.textarea_input_wrapper+ " " + s.ch + " " + s.ch_area}>
                            <textarea className={s.textarea_input} type="text" placeholder="Характер 2" onChange={(e) => setCh2(
                                {'name': ch2.name, 'character_description': e.target.value, 'look_description': ch2.look_description}

                            )}/>
                        </div>

                    </div>

                    <div>
                        <div className={s.inp_wrapper + " " + s.ch}>
                            <input className={s.enter_input} type="username" placeholder="Имя персонажа 3" onChange={(e) => setCh3(
                                {'name': e.target.value, 'character_description': ch3.character_description, 'look_description': ch3.look_description})}/>
                        </div>

                        <div className={s.textarea_input_wrapper + " " + s.ch + " " + s.ch_area}>
                            <textarea className={s.textarea_input} type="text" placeholder="Внешность 1" onChange={(e) => setCh3(
                                {'name': ch3.name, 'character_description': ch3.character_description, 'look_description': e.target.value}
                            )}/>
                        </div>
                        
                        <div className={s.textarea_input_wrapper+ " " + s.ch + " " + s.ch_area}>
                            <textarea className={s.textarea_input} type="text" placeholder="Характер 1" onChange={(e) => setCh3(
                                {'name': ch3.name, 'character_description': e.target.value, 'look_description': ch3.look_description}

                            )}/>
                        </div>

                    </div>



                    <div>
                        <div className={s.inp_wrapper + " " + s.ch}>
                            <input className={s.enter_input} type="username" placeholder="Имя персонажа 4" onChange={(e) => setCh4(
                                {'name': e.target.value, 'character_description': ch4.character_description, 'look_description': ch4.look_description})}/>
                        </div>

                        <div className={s.textarea_input_wrapper + " " + s.ch + " " + s.ch_area}>
                            <textarea className={s.textarea_input} type="text" placeholder="Внешность 4" onChange={(e) => setCh4(
                                {'name': ch4.name, 'character_description': ch4.character_description, 'look_description': e.target.value}
                            )}/>
                        </div>
                        
                        <div className={s.textarea_input_wrapper+ " " + s.ch + " " + s.ch_area}>
                            <textarea className={s.textarea_input} type="text" placeholder="Характер 4" onChange={(e) => setCh4(
                                {'name': ch4.name, 'character_description': e.target.value, 'look_description': ch4.look_description}

                            )}/>
                        </div>

                    </div>


                    <h2 className={s.key}>{key}</h2>
                </div>


        </div>
        </div>
        );
}

export default CreatePrompt;