import React, { useState } from 'react';

const IterationSample = () => {

    const inputStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        width: 220
    };

    const [names, setNames] = useState([
        { id: 1, text: '눈사람' },
        { id: 2, text: '얼음' },
        { id: 3, text: '눈' },
        { id: 4, text: '바람' }
    ]);

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = e => setInputText(e.target.value);

    const onAdd = () => {
        const nextNames = [...names, { id: nextId, text: inputText }];
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    };

    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    };

    const onKeyUp = e => {
        if (e.key === 'Enter') {
            onAdd();
        }
    };

    const nameList = names.map((name) => <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>);

    return (
        <>
            <div style={inputStyle}>
                <input value={inputText} onChange={onChange} onKeyUp={onKeyUp} />
                <button onClick={onAdd}>추가</button>
            </div>
            <ul>{nameList}</ul>
        </>
    );
};

export default IterationSample;