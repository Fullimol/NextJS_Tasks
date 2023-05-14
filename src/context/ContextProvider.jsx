import { createContext, useState } from "react"

export const TaskContext = createContext("")

const ContextProvider = ({children}) => {
  const [tasks, setTasks] = useState(["hola", "Chau"])
  
  const prueba = "Hola soy la prueba"

  return (
    <TaskContext.Provider value={{
      tasks,
      prueba
    }}>
      {children}
    </TaskContext.Provider>
  )
}

export default ContextProvider