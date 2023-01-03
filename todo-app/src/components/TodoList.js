import TodoListItem from "./TodoListItem";
import './TodoList.scss';
import React from 'react';

const TodoList = ({todos, onRemove, onToggle}) => {

    return (
        <div className="TodoList">
            {todos.map(todo => <TodoListItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle}/>)}
        </div>
    );
};

export default TodoList;