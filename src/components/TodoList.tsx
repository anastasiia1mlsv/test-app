import React from 'react';
import { Pane } from 'evergreen-ui';
import TodoItem from './TodoItem';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoListProps {
    todos: Todo[];
    toggleTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => (
    <Pane marginTop={20}>
        {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        ))}
    </Pane>
);

export default TodoList;
