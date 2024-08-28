import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders TodoList component', () => {
    render(<TodoList />);
    // Check if the heading is present in the document
    expect(screen.getByText('Todo List')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const button = screen.getByText('Add');

    // Simulate user input and button click
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);

    // Verify the new todo appears in the list
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles todo completion', () => {
    render(<TodoList />);
    const todo = screen.getByText('Learn React');

    // Simulate click to toggle todo
    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: line-through');

    // Simulate click again to toggle back
    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: none');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const todo = screen.getByText('Learn React');
    const deleteButton = screen.getAllByText('Delete')[0];

    // Simulate click to delete todo
    fireEvent.click(deleteButton);
    expect(todo).not.toBeInTheDocument();
  });
});
