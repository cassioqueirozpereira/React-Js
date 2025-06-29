import "./ToDoApp.css"

import { useState } from 'react'

const ToDoApp = () => {

    // Lista de tarefas
    const [ToDos, setToDos] = useState([])

    // Estado de texto da tarefa
    const [inputValue, setInputValue] = useState("")

    // Adicionar tarefas
    const handleSubmit = (e) => {
      e.preventDefault()
      if  (inputValue.trim() !== "") {
        const newToDo = {
          id: Date.now(), // Gera um ID único baseado no timestamp atual
          text: inputValue, // Texto da tarefa
          completed: false // Estado de conclusão da tarefa
        }
        setToDos(((prevTodos) => [...prevTodos, newToDo]))

        setInputValue("") // Limpa o campo de entrada após adicionar a tarefa
      }
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

        <ul className="todo_list">
          {ToDos.map((ToDo) => (
            <li key={ToDo.id} className="todo_item">
              {ToDo.text}
              {/* <input type="checkbox" checked={ToDo.completed} onChange={() => {
                setToDos(ToDos.map(t => t.id === ToDo.id ? { ...t, completed: !t.completed } : t))
              }} />
              <span className={ToDo.completed ? "completed" : ""}>{ToDo.text}</span> */}
              <button className="delete_button" onClick={() => {
                setToDos(ToDos.filter(t => t.id !== ToDo.id))
              }}>Excluir</button>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default ToDoApp