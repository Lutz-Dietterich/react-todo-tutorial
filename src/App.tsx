import React, {useState, ReactNode} from 'react';
import './App.css';
import InputField from './components/InputField';

interface AppProps {
  children?: ReactNode;
}


export default function App({ children }: AppProps) {

    const [todo, setTodo] = useState<string>("");

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField />
    </div>
  );
}





