import React,{useState} from 'react'

function TodoForm(props) {
    const [input , setinput] = useState('');

    const handleSubmit = e =>{
        e.preventDefault();

        props.onSubmit({
            id: Math.random(Math.floor() * 10000),
            text: input
        });        
    }

    const handleChange = e =>{
        setinput(e.target.value)
    }

    

    return (
        <form  className="todo-form" onSubmit={handleSubmit}>
            <input type="text" name="text" placeholder="Add a todo" onChange={handleChange} />
            <button className="todo-button">Add todo</button>
        </form>
    )
}

export default TodoForm
