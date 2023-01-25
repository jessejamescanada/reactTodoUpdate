import React, {useState} from 'react'
import '../App.css';

const Form = ({addTask, tasks, sortTasks}) => {
    const [name, setName] = useState('')

    const handleChange = e => {
        setName(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        addTask(name)
        setName('')
    }

    // To sort we destructure tasks array and handlesort function from App.js. We create a copy of the array (sortArray) then sort it. Then call the sortTasks function sent from App.js and pass through the sortArray
    const handleSort = () => {
        const sortArray = [...tasks].sort((a,b) => b.priority - a.priority)
        console.log(sortArray)
        sortTasks(sortArray)
    }

  return (
    <>
    <form onSubmit={handleSubmit} className='search-form'>
        <input 
            type="text" 
            value={name}
            onChange={handleChange}
        />
        <button>Add Task</button>
    </form>
    <button 
        onClick={handleSort}
        className='sort-btn'
        >Sort
    </button>
    </>
  )
}

export default Form