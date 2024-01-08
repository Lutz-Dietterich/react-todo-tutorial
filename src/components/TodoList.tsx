import React from "react";
import { Todo } from "../model";
import styled from "styled-components";
import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function TodoList({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}: Props) {
  return (
    <StyledContainer>
      <Droppable droppableId="TodoList">
        {(provided) => (
          <StyledTodos ref={provided.innerRef} {...provided.droppableProps}>
            <StyledTodosHeading>Active Tasks</StyledTodosHeading>
            {todos.map((todo, index) => (
              <SingleTodo
                index={index}
                todo={todo}
                key={todo.id}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </StyledTodos>
        )}
      </Droppable>

      {/* <Droppable droppableId='TodoInProcessList'>
        {provided => (
        <StyledInProcessTodos
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <StyledTodosHeading>
          In Process
          </StyledTodosHeading>
            {completedTodos.map((todo, index) => (
                  <SingleTodo 
                    index={index}
                    todo={todo}
                    key={todo.id}
                    todos={completedTodos}
                    setTodos={setCompletedTodos}
                  />
              ))}
              {provided.placeholder}
        </StyledInProcessTodos>
        )}
      </Droppable> */}

      <Droppable droppableId="TodoCompleteList">
        {(provided) => (
          <StyledCompleteTodos
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <StyledTodosHeading>Completed Tasks</StyledTodosHeading>
            {completedTodos.map((todo, index) => (
              <SingleTodo
                index={index}
                todo={todo}
                key={todo.id}
                todos={completedTodos}
                setTodos={setCompletedTodos}
              />
            ))}
            {provided.placeholder}
          </StyledCompleteTodos>
        )}
      </Droppable>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 85%;
  margin-top: 10px;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const StyledTodos = styled.div`
  display: flex;
  flex-direction: column;
  width: 49%;
  background-color: rgb(50, 195, 205);
  border-radius: 5px;
  padding: 15px;

  @media (max-width: 700px) {
    width: 95%;
    margin-bottom: 10px;
  }
`;

const StyledInProcessTodos = styled.div`
  display: flex;
  flex-direction: column;
  width: 49%;
  background-color: rgb(102, 255, 178);
  border-radius: 5px;
  padding: 15px;

  @media (max-width: 700px) {
    width: 95%;
    margin-bottom: 10px;
  }
`;

const StyledCompleteTodos = styled.div`
  display: flex;
  flex-direction: column;
  width: 49%;
  background-color: rgb(235, 103, 80);
  border-radius: 5px;
  padding: 15px;

  @media (max-width: 700px) {
    width: 95%;
    margin-bottom: 10px;
  }
`;

const StyledTodosHeading = styled.span`
  font-size: 30px;
  color: white;
`;
