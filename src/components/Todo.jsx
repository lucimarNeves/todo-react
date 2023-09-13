import React from 'react'

const todo = ({ todo }) => {
  return (
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
  )
}

export default todo
