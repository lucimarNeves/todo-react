import { useState } from 'react'

import Todo from "./components/Todo"
import TodoForm from "./components/TodoForm"

import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      categoria: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      categoria: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      categoria: "Estudos",
      isCompleted: true,
    },
  ])

  return (

    <div className="app">
      <h1> Lista de Tarefas</h1>
      <div className="todo-list">
     
        {todos.map((todo) => (
           <Todo  todo={todo}/>
        ))}

      </div>
      <TodoForm />
    </div>
  )
}

export default App
