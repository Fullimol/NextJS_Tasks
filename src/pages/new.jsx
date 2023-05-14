import React, { useContext, useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { AiOutlinePlus } from "react-icons/ai";
import { TaskContext } from '../context/ContextProvider';
import { useRouter } from 'next/router';

const TaskFormPage = () => {
  const [task, setTask] = useState({
    title: "",
    description: ""
  })

  const { createTask, updateTask, tasks } = useContext(TaskContext)
  const { push, query } = useRouter()


  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
    console.log(task)
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!query.id) {
      createTask(task.title, task.description)
      alert("Add new task")
    } else {
      updateTask(query.id, task)
      alert("Task updated")
      push("/")
    }
  }

  useEffect(() => {
    if (query.id) { //si existe el id en la URL entonces...
      // busca en la lista de "tasks" (viene del context) si algun ID de esta coincide con el id del query.
      const taskFound = tasks.find(task => task.id === query.id)
      setTask({ ...taskFound })
    }
  }, [])

  return (
    <Layout show_cancel>
      <form onSubmit={handleSubmit}>
        <h1 className='text-center m-5 text-xl'>{query.id ? "Update a Task" : "Create a Task"}</h1>

        <h2 className='mb-3'>Tittle: </h2>
        <input type="text" value={task.title} name='title' placeholder='Write a tittle...' className='text-gray-300 bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5' onChange={handleChange} />

        <h2 className='mb-3'>Description: </h2>
        <textarea rows={2} value={task.description} name='description' placeholder='Write a description...' className='w-full h-40  text-gray-300 bg-gray-800 focus:text-gray-100 focus:outline-none resize-none py-3 px-4' onChange={handleChange}></textarea>

        <div className='flex justify-center m-5'>
          <button disabled={!task.title.length > 0} className='transition hover:scale-110 hover:bg-green-500 bg-green-700 px-3 py-2 rounded-xl inline-flex items-center disabled:opacity-50' >
            <AiOutlinePlus className='mr-2' />
            {query.id ? "Save changes" : "Add task"}
          </button>
        </div>

      </form>
    </Layout>
  )
}

export default TaskFormPage


// TUTORIAL: https://www.youtube.com/watch?v=ngOwT3BPIvU
// seguir minuto 43:32 - boton disable