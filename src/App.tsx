import React, { useState } from 'react';
import {Alert, Heading, Pane} from 'evergreen-ui';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import { Headers} from "./constants/strings";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
    const [showDuplicateAlert, setShowDuplicateAlert] = useState(false);

    const addTodo = (text: string) => {
        const taskExists = todos.some(todo => todo.text.toLowerCase() === text.toLowerCase());
        if (taskExists) {
            setShowDuplicateAlert(true);
            return;
        }
        if (text.trim()) {
            setTodos([{ id: Date.now(), text, completed: false }, ...todos]);
        }
        setShowDuplicateAlert(false);
    };

    const toggleTodo = (id: number) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const clearCompleted = () => {
        setTodos(todos.filter(todo => !todo.completed));
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });

    return (
        <Pane width={400} margin="auto" marginTop={50} padding={20} elevation={2} background="tint2" borderRadius={5}>
            <Pane display="flex" justifyContent="center" marginBottom={20}>
                <Heading>{Headers.TODO_LIST}</Heading>
            </Pane>
            {showDuplicateAlert && (
                <Alert intent="danger" title={Headers.DUPLICATED_TODO} marginBottom={16} />
            )}
            <TodoForm addTodo={addTodo} />
            <TodoList todos={filteredTodos} toggleTodo={toggleTodo} />
            <Footer
                remainingCount={todos.filter(todo => !todo.completed).length}
                filter={filter}
                setFilter={setFilter}
                clearCompleted={clearCompleted}
            />
        </Pane>
    );
};

export default App;
