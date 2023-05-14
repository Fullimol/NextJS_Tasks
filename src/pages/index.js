import { useContext } from 'react'
import { TaskContext } from '../context/ContextProvider'
import Layout from '../components/Layout'

const Home = () => {
  const { tasks } = useContext(TaskContext)

  console.log(tasks)

  return (
    <Layout>
      <div className='flex justify-center items-center bg-red-400'>
        Aca va el home
      </div>
    </Layout>
  )
}

export default Home