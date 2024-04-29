import React, { useState } from 'react';

const InputSample = () => {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    const { name, nickname } = inputs;

    const onChange = (e) => {
        console.log(e.target); // html 태그
        console.log(e.target.name); // name 속성
        
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value // name키
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        });
    };

    return (
        <div>
            <input name="name" onChange={onChange} placeholder="이름" value={name}/>
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;