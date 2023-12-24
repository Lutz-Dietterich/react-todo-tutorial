import React from 'react'
import styled from 'styled-components'
import { Todo } from '../model';

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<string>>;
};

export default function SingleTodo({ todo, todos, setTodos}: Props) {
  return (
    <StyledTodo>
        
    </StyledTodo>
  )
}

const StyledTodo = styled.div`


`
;