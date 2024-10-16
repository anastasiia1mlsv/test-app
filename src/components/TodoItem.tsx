import React from 'react';
import { Pane, Checkbox, Text } from 'evergreen-ui';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoItemProps {
    todo: Todo;
    toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => (
    <Pane display="flex" alignItems="center" marginBottom={10}>
        <Checkbox
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            marginRight={16}
        />
        <Text
            size={500}
            textDecoration={todo.completed ? 'line-through' : 'none'}
            color={todo.completed ? 'muted' : 'default'}
        >
            {todo.text}
        </Text>
    </Pane>
);

export default TodoItem;
