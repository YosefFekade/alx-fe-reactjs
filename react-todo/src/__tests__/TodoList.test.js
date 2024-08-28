import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../components/TodoList';

test('renders TodoList component', () => {
  render(<TodoList />);
  expect(screen.getByText('Todo List')).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText('Add a new todo');
  const button = screen.getByText('Add');

  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(button);

  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test('toggles todo completion', () => {
  render(<TodoList />);
  const todo = screen.getByText('Learn React');

  fireEvent.click(todo);
  expect(todo).toHaveStyle('text-decoration: line-through');

  fireEvent.click(todo);
  expect(todo).toHaveStyle('text-decoration: none');
});

test('deletes a todo', () => {
  render(<TodoList />);
  const todo = screen.getByText('Learn React');
  const deleteButton = screen.getAllByText('Delete')[0];

  fireEvent.click(deleteButton);
  expect(todo).not.toBeInTheDocument();
});
