import React, { useState } from 'react';
import TextArea from '../kit/AreaInput/input';
import Button from '../kit/Button/Button';
import screp from './screp.svg'
import fileIcon from './file.svg'
import x from './x.svg'
import { cn } from '../../lib/utils';

const Prompt = () => {
    const fields = [
        {
          type: 'textarea', // Тип поля
          name: 'name', // Имя поля (ключ в состоянии)
          title: 'Название сказки', // Заголовок поля
          placeholder: 'Например, "Су анасы и потерянный мешок"', // Подсказка
        },
        {
          type: 'textarea', // Тип поля
          name: 'description', // Имя поля
          title: 'Опишите вашу сказку', // Заголовок поля
          placeholder: 'Например, "Су Анасы готовит өчпочмаки..."', // Подсказка
        },
        {
          type: 'textarea', // Тип поля
          name: 'goal', // Имя поля
          title: 'Цель сказки', // Заголовок поля
          placeholder: 'Например, "Найти мешок муки..."', // Подсказка
        },
        {
          type: 'textarea', // Тип поля
          name: 'characters', // Имя поля
          title: 'Персонажи', // Заголовок поля
          placeholder: 'Например, "Су Анасы, бабушка, продавец, лесной, Дарт Вейдер..."', // Подсказка
        },
        {
          type: 'textarea', // Тип поля
          name: 'lesson_theme', // Имя поля
          title: 'Что выучить?', // Заголовок поля
          placeholder: 'Например, "Слова на тему продукты питания..."', // Подсказка
        },
        {
          type: 'file', // Тип поля (файл)
          name: 'file', // Имя поля
          title: 'Полезный файл', // Заголовок поля
          placeholder: 'Загрузите файл', // Подсказка
        },
        {
          type: 'textarea', // Тип поля
          name: 'additional_info', // Имя поля
          title: 'Дополнительная информация', // Заголовок поля
          placeholder: 'Например, "Хочу, чтобы все происходило в деревне..."', // Подсказка
        },
      ];
      // Состояние для хранения данных формы
      const [promptData, setPromptData] = useState(

        fields.reduce((acc, cur) => ({...acc, [cur.name] : ''}), {})

    );
    
      // Обработчик изменения значений в полях
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPromptData({
          ...promptData,
          [name]: value,
        });
      };
    
      // Обработчик изменения файла

    
      // Обработчик отправки формы
      const handleSubmit = () => {
        console.log('Данные формы:', promptData);
        // Здесь можно отправить данные на сервер или выполнить другие действия
      };



      const [file, setFile] = useState(null);

      const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
        setPromptData({
            ...promptData,
            file: file,
          });
      };
    
      const handleRemoveFile = () => {
        setFile(null);
      };
    

  return (

    <form className=' text-fgСolor p-[50px] flex flex-col items-center gap-[20px]'>

        {fields.map((field, index) => (
        <div key={index} className="w-full flex items-center flex-col gap-[5px]">



            <h2 className=' text-center'>{field.title}</h2>
          {field.type === 'textarea' ? (
            <TextArea
              name={field.name}
              value={promptData[field.name]}
              placeholder={field.placeholder}
              onChange={handleInputChange}
            />
          ) : field.type === 'file' ? (
            <div className=' flex w-full gap-[20px]'>

              <label className={cn(" bg-fgСolor text-bgСolor border-progressBg w-full flex rounded-[15px] border-[3px] p-[15px] text-[20px] cursor-pointer items-center gap-[20px] hover:bg-subFgColor",
                                       file && " bg-[#A5A5A5] border-[#4E4E4E] hover:bg-[#A5A5A5]"
              )}>
                <img src={ file ? fileIcon : screp} alt="" />

                <div>
                {field.placeholder}
                </div>

              <input
                type="file"
                name={field.name}
                onChange={handleFileChange}
                className="hidden"
              />

            </label>

            <button onClick={handleRemoveFile} type='button' className=' border-failColor border-[3px] rounded-[15px] bg-lightFail p-[17px]'>
                <img src={x} alt="" />
            </button>

            </div>
          ) : null}
        </div>
      ))}


      <Button type="submit">
        Отправить
      </Button>


        
        

    </form>

        
  );
};

export default Prompt;