import React, {useState} from 'react';
const styles = require('./todolist.module.css');
import ITodoItem from "@/types/ITodoItem";

const TodoList: React.FC<ComponentPropsTypes> = ({todos, onRemove, onToggle}) => {

    const removeHandler = (event: React.MouseEvent, id: number) => {
        event.stopPropagation();
        onRemove(id);
    }

    return (
        <>
            {todos.map(todo =>
                <div key={todo.id}>
                    <input type="checkbox" checked={todo.completed} onChange={onToggle.bind(null, todo.id)}/>
                    <span>{todo.title}</span>
                    <div onClick={(event) => removeHandler(event, todo.id)}>delete</div>
                </div>
            )}
        </>
    );
};

interface ComponentPropsTypes {
    todos: ITodoItem[],
    onToggle(id: number): void,
    onRemove: (id: number) => void
}

export default TodoList;