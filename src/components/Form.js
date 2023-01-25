import React, {useState} from 'react'
import '../App.css';

const Form = ({addTask}) => {
    const [name, setName] = useState('')

    const handleChange = e => {
        setName(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        addTask(name)
        setName('')
    }

  return (
    <form onSubmit={handleSubmit} className='search-form'>
        <input 
            type="text" 
            value={name}
            onChange={handleChange}
        />
        <button>Add Task</button>
    </form>
  )
}

export default Form