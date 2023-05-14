import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { MdCancel } from 'react-icons/md'
import { TaskContext } from '../context/ContextProvider';


const Layout = (props) => {
    const { show_cancel, children } = props
    const { tasks } = useContext(TaskContext)
    const router = useRouter() //agrego esto para darla función al boton y que me redirija.

    return (
        <div className='h-screen bg-gray-900 text-white'>
            <header className='items-center bg-gray-800 flex px-28 py-5'>
                <Link href="/">
                    <h1 className='font-black text-lg'>Task App</h1>
                </Link>

                <span className='m-2 text-gray-400'>
                    {tasks.length} Tasks
                </span>

                <div className='flex-grow text-right'>
                    {show_cancel ? (
                        <button className='transition hover:scale-110 hover:bg-red-500 bg-red-700 px-3 py-2 rounded-xl inline-flex items-center' onClick={() => router.push("/")}>
                            <MdCancel className='mr-2' />
                            Cancel task
                        </button>
                    ) : (
                        <button className='transition hover:scale-110 hover:bg-green-500 bg-green-700 px-3 py-2 rounded-xl inline-flex items-center' onClick={() => router.push("/new")}>
                            <AiOutlinePlus className='mr-2' />
                            {"New Task"}
                        </button>
                    )}

                </div>

            </header>
            <main className='px-28'>
                {children}
            </main>
        </div>
    )
}

export default Layout
