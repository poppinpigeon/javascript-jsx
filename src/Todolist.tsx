import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

type Todo = {
    id: number;
    text: string;
    isChecked: boolean;
};

const TodoList : React.FC = ()=>{
    const title : string = "Today's Todos";
    const [todos, setTodos] = useState<Todo[]>([
        {id: 1, text: "study", isChecked: false}, 
        {id: 2, text: "sleep", isChecked: false}, 
        {id: 3, text: "eat", isChecked: false}
    ]);

    const [newTodo, setNewTodo] = useState<string>('');

    const handleCheckedChange = (itemId: number)=>{
        setTodos((items)=>(
            items.map((item)=>(
                item.id === itemId ? {...item, isChecked: !item.isChecked} : item
            ))
        ))
    }

    const addTodo = ()=> {
        if(newTodo.trim() !== ''){
            setTodos([...todos, {id: Date.now(), text: newTodo, isChecked: false}]);
            setNewTodo('');
        }
    }

    return(
        <div className="container">
            <h1>{title}</h1>
            <div style={{display: "flex"}}>
                <Form.Control type="text" placeholder="type your todo here" onChange={(e)=> setNewTodo(e.target.value)}/>
                <Button variant="primary" onClick={()=> addTodo()} style={{marginLeft: "20px"}}>Add</Button>
            </div>
            <p></p>
            <div className="board">
                <ul>
                    {
                        todos.map((todo, index)=>(
                            <li key={todo.id}>
                                <input type="checkbox" onChange={()=>{
                                    handleCheckedChange(todo.id);
                                }}></input>
                                <span>
                                    {
                                        todo.isChecked ?
                                        <del>{todo.text}</del>
                                        : <span>{todo.text}</span>
                                    }
                                </span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default TodoList;