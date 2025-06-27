import "./ToDoApp.css"

import { useState } from 'react'

const ToDoApp = () => {

    // Lista de tarefas
    const [ToDos, setToDos] = useState([])

    // Estado de texto da tarefa
    const [inputValue, setInputValue] = useState("")

    // Adicionar tarefas
    const handleSubmit = (e) => {
      e.preventDefault
    }
  return (
    <div className="app_container">
        <h1 className='title'>Lista de Tarefas</h1>

        {/* Formulário para adicionqr tarefas */}
        <form onSubmit={handleSubmit} className="form_container">
          <input type="text" className="input_field" placeholder="Adicione uma tarefa..." value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
          <button type="submit" className="add_button">Adicionar</button>
        </form>

        {/* Lista de Tarefas */}
        {ToDos.length === 0 && <p className="empty">Não há tarefas</p> }
    </div>
  )
}

export default ToDoApp