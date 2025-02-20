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

    return(
        <div className="container">
            <h1>{title}</h1>
            <div className="board">
                <ul>
                    {
                        todos.map((todo, index)=>(
                            <li key={index}>{todo.text}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default TodoList;