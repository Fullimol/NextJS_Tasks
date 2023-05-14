import React from 'react'
import Layout from '../components/Layout'
import { AiOutlinePlus } from "react-icons/ai";

const TaskFormPage = () => {
  return (
    <Layout show_cancel>
      <form>
        <h1 className='text-center m-5 text-xl'>Add a task</h1>

        <h2 className='mb-3'>Tittle: </h2>
        <input type="text" placeholder='Write a tittle...' className='text-gray-300 bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5' />

        <h2 className='mb-3'>Description: </h2>
        <textarea rows={2} placeholder='Write a description...' className='w-full h-40  text-gray-300 bg-gray-800 focus:text-gray-100 focus:outline-none resize-none py-3 px-4'></textarea>

        <div className='flex justify-center m-5'>
          <button className='transition hover:scale-110 hover:bg-green-500 bg-green-700 px-3 py-2 rounded-xl inline-flex items-center' onClick={() => router.push("/new")}>
            <AiOutlinePlus className='mr-2' />
            Add task
          </button>
        </div>

      </form>
    </Layout>
  )
}

export default TaskFormPage


// TUTORIAL: https://www.youtube.com/watch?v=ngOwT3BPIvU
// seguir minuto 43:32 - boton disable