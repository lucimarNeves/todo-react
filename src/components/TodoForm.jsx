import {useState} from 'react'

const TodoForm = ({ addTodo } ) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(!value || !category) return;
        console.log(value, category);

        //adicionar todo 
        addTodo(value,category);
        setValue("");
        setCategory("");
        //limpar os campos
    }

  return (
    <div className="todo-form">
      <h2>Criar tarefa</h2>

      <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Digite o título"
         value = {value}
         onChange={(e) => setValue(e.target.value)} />
        
        <select className="options"
         value = {category}
         onChange={(e) => setCategory(e.target.value)}>

            <option value="">Selecione uma categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudos">Estudos</option>
        </select>
        <button type="submit">Enviar Tarefa</button>
      </form>
    </div>
  )
}

export default TodoForm
