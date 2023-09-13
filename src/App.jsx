import { useState } from 'react'


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
          <div className="todo">
            <div className="content">
              <p>{todo.text}</p>
              
              <p className="categry">
                {todo.categoria}
              </p>
              <div>
                <button> Completar</button>
                <button>x</button>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default App
