import React, {useState} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('');

    const handleSubmit = e =>{
        e.preventDefault();

        props.onSubmit({
            id:Math.floor(Math.random() * 10000),
            text: input
        })
    }

    const handleChange = e =>{
        setInput(e.target.value);
    }
    return (
        <form  className="todo-form" onSubmit={handleSubmit}>
            <input type="text" name="text" placeholder="Add a todo" className="todo-input" onChange={handleChange}/>
            <button className="todo-button">Add todo</button>
        </form>
    )
}

export default TodoForm
