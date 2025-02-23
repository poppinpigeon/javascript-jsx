import React, { useState } from "react";

type Todo = {
    id: number;
    text: string;
    isChecked: boolean;
};

const TodoList : React.FC = ()=>{
    const title : string = "Today";
    const [todos, setTodos] = useState<Todo[]>([
        {id: 1, text: "study", isChecked: false}, 
        {id: 2, text: "sleep", isChecked: false}, 
        {id: 3, text: "eat", isChecked: false}
    ]);

    const handleCheckedChange = (itemId: number)=>{
        setTodos((items)=>(
            items.map((item)=>(
                item.id === itemId ? {...item, isChecked: !item.isChecked} : item
            ))
        ))
    }

    return(
        <div className="container">
            <h1>{title}</h1>
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