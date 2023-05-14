import { createContext, useState } from "react"
import { v4 as uuid } from "uuid"

export const TaskContext = createContext("")

const ContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])

  const createTask = (title, description) => {
    setTasks([...tasks, { title, description, id: uuid() }])
  }

  const updateTask = (id, updatedTask) => {
    //esta funcion copia todo lo que ya exista en "task", busca si alguna coincide con el id, si es así: Pasa una copia de todos los VALORES de ese objeto, y luego actualiza el valor que se modifica. SI NO COINCIDE EL ID: solo pasa el "task" actual
    setTasks([...tasks.map(task => task.id === id ? { ...task, ...updatedTask } : task)])
  }

  const deleteTask = id => setTasks([...tasks.filter(task => task.id !== id)])

return (
  <TaskContext.Provider value={{
    tasks,
    createTask,
    updateTask,
    deleteTask
  }}>
    {children}
  </TaskContext.Provider>
)
}

export default ContextProvider