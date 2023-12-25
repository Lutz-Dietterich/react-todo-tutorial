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
    <StyledContainer>
      <StyledTodos>
        <StyledTodosHeading>
          Active Tasks
        </StyledTodosHeading>
          {todos.map((todo) => (
            <SingleTodo 
              todo={todo}
              key={todo.id}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
      </StyledTodos>
      <StyledCompleteTodos>
        <StyledTodosHeading>
          
        </StyledTodosHeading>
      </StyledCompleteTodos>
    </StyledContainer>
  )
};







const StyledContainer = styled.div`

`;

const StyledTodos = styled.div`

`;

const StyledCompleteTodos = styled.div`

`;

const StyledTodosHeading = styled.span`

`;








const StyledTodoList =styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 90%;
    flex-wrap: wrap;

    @media (max-width: 700px) {
        width: 95%;
    }
`;















//     <StyledTodoList>
//         {todos.map((todo) => (
//       <SingleTodo 
//          todo={todo}
//          key={todo.id}
//          todos={todos}
//          setTodos={setTodos}
//          />
//       ))}
//     </StyledTodoList>
//   )
// }


