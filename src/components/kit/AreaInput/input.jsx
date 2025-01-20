import React from 'react';

function TextArea({ value, name, placeholder, onChange, }) {
    return (
        <textarea
            className="outline-none border-[3px] border-fgСolor text-fgСolor placeholder:text-fgСolor/50 rounded-[15px] text-[20px] p-[10px] w-full box-border bg-[transparent] resize-none"
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            rows={4} // Количество строк по умолчанию
        />
    );
}

export default TextArea;