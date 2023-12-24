import React  from 'react';
import { Todo } from '../model';
import styled from 'styled-components';
import SingleTodo from './SingleTodo';

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}


export default function TodoList({ todos, setTodos}: Props) {
  return (
    <StyledTodoList>
        {todos.map(todo => (
      <SingleTodo 
         todo={todo}
         key={todo.id}
         todos={todos}
         setTodos={setTodos}
         />
      ))}
    </StyledTodoList>
  )
}


const StyledTodoList =styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 90%;
    flex-wrap: wrap;

`;
