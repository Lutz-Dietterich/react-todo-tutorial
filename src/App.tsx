import React, {useState, ReactNode} from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

interface AppProps {
  children?: ReactNode;
}





export default function App({ children }: AppProps) {

    const [todo, setTodo] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([]);
    const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);


    const handleAdd =(e: React.FormEvent) => {
      e.preventDefault();

      if (todo) {
        setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
        setTodo("");
      }
    };

    const onDragEnd = (result: DropResult) => {
      const { source, destination} = result;
      console.log(result)
      if (!destination) return;

      if (destination.droppableId === source.droppableId && destination.index === source.index) return;

         let add,
          active = todos, 
          complete = completedTodos;

      if (source.droppableId === "TodoList") {
        add = active[source.index];
        active.splice(source.index, 1);
      } else {
        add = complete[source.index];
        complete.splice(source.index, 1);
      }

      if (destination.droppableId === "TodoList") {
        active.splice(destination.index, 0, add);
      } else {
        complete.splice(destination.index, 0, add);
      }

      setCompletedTodos(complete)
      setTodos(active)
    };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <h1 className="heading">Taskify</h1>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        <TodoList 
        todos={todos} 
        setTodos={setTodos}
        completedTodos={completedTodos}
        setCompletedTodos={setCompletedTodos}
        />
        
      </div>
    </DragDropContext>
  );
}





