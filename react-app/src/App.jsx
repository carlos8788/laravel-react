import { UserIcon } from '@heroicons/react/24/solid'
import './App.css'
import Form from './form'

function App() {


  return (
    <div className='bg-dark-500'>
      <div className="flex justify-around my-6">
        <h1 className='text-4xl'>App.jsx</h1>
        <UserIcon className='w-16' />
      </div>
      <Form/>
    </div>
  )
}

export default App
