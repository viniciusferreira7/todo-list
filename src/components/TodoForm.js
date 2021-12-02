import React, {useState, useRef, useEffect} from 'react';

function TodoForm(props) {

    const inputEl = useRef(null)

    useEffect(() =>{
        inputEl.current.focus()
    })

    const [input, setInput] = useState(props.edit ? props.edit.value : '')

    const handleSubmit = e =>{
        e.preventDefault();

        props.onSubmit({
            id:Math.floor(Math.random() * 10000),
            text: input
        })
    }

    const handleChange = e =>{
        setInput(e.target.value)
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                <input 
                    className="todo-input" 
                    type="text" 
                    placeholder="Update your item"  
                    onChange={handleChange}
                    ref={inputEl} />
                <button className="todo-button" className="todo-input">Update</button>
                </>
            ):(
                <>
                <input 
                    className="todo-input" 
                    type="text" 
                    placeholder="Add todo"  
                    onChange={handleChange}
                    ref={inputEl} />
                <button className="todo-button">Add a todo</button>
                </>
            )}
        </form>
    )
}

export default TodoForm
