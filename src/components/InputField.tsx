import React, {useRef} from 'react'
import styled from 'styled-components'

interface Props{
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}



export default function Inputfield({todo, setTodo, handleAdd}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <StyledForm 
    className='input' 
    onSubmit={(e) => {
      handleAdd(e);
      inputRef.current?.blur();
      }}
    >
      <StyledInput 
        ref={inputRef}
        type="input" 
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder='Enter a task' 
      />
      <StyledButton type='submit'>
        Go
      </StyledButton>
    </StyledForm>
  )
}


const StyledForm = styled.form`
  display: flex;
  width: 90%;
  position: relative;
  align-items: center;
`;


const StyledInput = styled.input`
  width: 100%;
  border-radius: 50px;
  padding: 20px 30px;
  font-size: 25px;
  border: none;
  transition: 0.2s;
  box-shadow: inset 0 0 5px black;

    &:focus {
      box-shadow: 0 0 10px 1000px rgba(0, 0, 0, 0.1);
      outline: none;
    }
`;

const StyledButton = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  margin: 12px;
  border-radius: 50px;
  right: 0;
  border: none;
  font-size: 15px;
  background-color: #2f74c0;
  color: white;
  transition: 0.2s all;
  box-shadow: 0 0 10px black;
  z-index: 1000;
  cursor: pointer;

    
  &:hover {
    background-color: #388ae2;
  }

  &:active {
    transform: scale(0.8);
    box-shadow: 0 0 5px black;
`;

