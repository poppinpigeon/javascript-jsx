import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TodoModal from "./TodoModal";

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

    const [showDetail, setShowDetail] = useState<boolean>(false);

    const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

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

    const removeTodo = (id : number) => {
        setTodos(todos.filter((todo)=> todo.id !== id))
    }

    const handleTodoClick = (todo : Todo) => {
        setShowDetail(true);
        setSelectedTodo(todo);
    }

    const handleCloseDetail = () => {
        setShowDetail(false);
    }

    return(
        <div>
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
                                    <span onClick={()=>handleTodoClick(todo)}>
                                        {
                                            todo.isChecked ?
                                            <del>{todo.text}</del>
                                            : <span>{todo.text}</span>
                                        }
                                    </span>
                                    <button 
                                        className="delete-button" 
                                        onClick={()=>removeTodo(todo.id)}
                                    >Delete</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <TodoModal show={showDetail} todo={selectedTodo} handleClose={handleCloseDetail}></TodoModal>
        </div>
    )
}

export default TodoList;