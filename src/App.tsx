import React, {useEffect, useState} from 'react';
import TodoForm from "@/components/TodoForm/TodoForm";
import TodoList from "@/components/TodoList/TodoList";
import ITodoItem from "@/types/ITodoItem";

export const App: React.FC<{}> = () => {

    const [todos, setTodos] = useState<ITodoItem[]>([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodoItem[];
        setTodos(saved);
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addHandler = (title: string) => {
        const newTodo: ITodoItem = {
            title: title,
            id: Date.now(),
            completed: false
        }

        setTodos(prev => [newTodo, ...prev]);
    }

    const toggleHandler = (id: number) => {
        setTodos(prev =>
            prev.map(todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        );
    }

    const removeHandler = (id: number) => {
        setTodos(prev => prev.filter(todo => todo.id != id));
    }

    return <>
        <h1>Hello React !</h1>
        <div className="container">
            <TodoForm onAdd={addHandler}/>
            <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler}/>
        </div>
    </>;
};