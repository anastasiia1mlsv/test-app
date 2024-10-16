import React, { useState } from 'react';
import {Pane, Alert, TextInput} from 'evergreen-ui';
import { Headers} from "../constants/strings";

interface TodoFormProps {
    addTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
    const [value, setValue] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = () => {
        if (value.trim() === '') {
            setShowAlert(true);
            return;
        }
        addTodo(value);
        setValue('');
        setShowAlert(false);
    };

    return (
        <Pane>
        {showAlert && (
            <Alert intent="danger" title={Headers.DESCRIBE_TODO} marginBottom={16} />
        )}
        <TextInput
            width="100%"
            placeholder={Headers.WHAT_TO_DO}
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && handleSubmit()}
        />
        </Pane>
    );
};

export default TodoForm;
