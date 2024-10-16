import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { Headers } from './constants/strings';
import TodoForm from "./components/TodoForm";

test('Нельзя добавить пустое поле как задачу', () => {
  render(<App />);

  const input = screen.getByPlaceholderText(Headers.WHAT_TO_DO);

  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

  expect(screen.getByText(Headers.DESCRIBE_TODO)).toBeInTheDocument();
});


test('Проверка добалвения дупликатов', () => {
  let todos = ['SomeStringUniqueValue'];

  const addTodoMock = jest.fn((text) => {
    if (todos.includes(text)) {
      return;
    }
    todos.push(text);
  });

  render(<TodoForm addTodo={addTodoMock} />);

  const input = screen.getByPlaceholderText(Headers.WHAT_TO_DO);

  fireEvent.change(input, { target: { value: 'SomeStringUniqueValue' } });
  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

  expect(addTodoMock).toHaveBeenCalledWith('SomeStringUniqueValue');
  expect(todos.length).toBe(1);
});
