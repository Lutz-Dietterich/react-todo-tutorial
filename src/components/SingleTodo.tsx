import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Todo } from '../model';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";



type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export default function SingleTodo({ todo, todos, setTodos}: Props) {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const handleDone = (id: number): void => {
        setTodos(todos.map(todo => todo.id === id ? {...todo,isDone:!todo.isDone} : todo))
    };

    const handleDelete = (id: number): void => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleEdit = (e:React.FormEvent, id: number): void => {
        e.preventDefault();
        setTodos(todos.map((todo) => (
            todo.id === id ? 
            {...todo, todo: editTodo} : 
            todo ))
        )
        setEdit(false)
    };

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);

  return (
    <StyledTodo onSubmit={(e)=>handleEdit(e,todo.id)}>
        {
            edit? (
                <StyledEditForm 
                ref={inputRef}
                type="text" 
                value={editTodo} 
                onChange={(e) => setEditTodo(e.target.value)}/>
            ) : (
                !todo.isDone ? (
                    <StyledText>{todo.todo}</StyledText>
                    ) : (
                    <StyledStrikeText>{todo.todo}</StyledStrikeText>
                    )
            )
        }

        <div>
            <StyledIcon onClick={() =>{
                    if(!edit && !todo.isDone){
                        setEdit(!edit);
                    }
                }}
            >
                <AiFillEdit />
            </StyledIcon>
            <StyledIcon>
                <AiFillDelete onClick={()=>handleDelete(todo.id)}/>
            </StyledIcon>
            <StyledIcon onClick={()=>handleDone(todo.id)}>
                <MdDone />
            </StyledIcon>
        </div>
    </StyledTodo>
  )
}

const StyledTodo = styled.form`
    display: flex;
    width: 29.5%;
    border-radius: 5px;
    padding: 20px;
    margin-top: 15px;
    background-image: url(https://img.freepik.com/fotos-kostenlos/draufsicht-gelbes-zerknittertes-papier_23-2149345142.jpg?w=1800&t=st=1703455616~exp=1703456216~hmac=c26e91438d9b5d6930cce95b3909503e1c0ee279c9128db1cb87026396cc83df);

    @media (max-width: 700px) {
        width: 100%;
    }

    @media (min-width: 1200px) {
        width: 40%;
    }
`;

const StyledText = styled.span`
    flex: 1;
    padding: 5px;
    border: none;
    font-size: 20px;

        &:focus { 
            outline: none;
        }
`;

const StyledStrikeText = styled.span`
    flex: 1;
    padding: 5px;
    border: none;
    font-size: 20px;
    text-decoration: line-through;
    color: rgba(0, 0, 0, 0.5);

        &:focus { 
            outline: none;
        }
`;

const StyledEditForm = styled.input`
    flex: 1;
    padding: 5px;
    border: none;
    font-size: 20px;

        &:focus {
            outline: none;
        }
`;



const StyledIcon = styled.span`
    margin-left: 10px;
    font-size: 25px;
    cursor: pointer;
`;
