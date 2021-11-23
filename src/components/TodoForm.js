import React, {useState} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) =>{
        e.prevent.Default();

        props.onSubmit({
            id: Math.floor(Math.random * 1000),
            text:input
        })
    }


    return (
        <div>
            <form className="todo-form" onSubmit={handleSubmit}>
                <input type="text" className="todo-input" name="text" value={input} placeholder="Add a todo" />
                <button className="todo-button">Add todo</button>
            </form>
        </div>
    )
}

export default TodoForm
