import React, {useState} from 'react'
import '../App.css';

const Form = ({addTask, tasks, setTasks, sortTasks}) => {
    const [name, setName] = useState('')
    const [error, setError] = useState('')

    const handleChange = e => {
        setName(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(name === ''){
            setError('Please enter something!')
            setTimeout(() => {
                setError('')
            }, 2000);
        }else{
        
        addTask(name)
        setName('')
        }
    }
    const handleClear = () => {
        localStorage.clear()
        setTasks([])
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
            maxLength='25'
        />
        <button>Add Task</button>
    </form>
    <div className="error-btn-container">
        <span className='error'>{error}</span>
        <div className="sort-clear-btn-container">
            <button 
                onClick={handleSort}
                className='sort-btn'
                >Sort
            </button>
            <button
                onClick={handleClear}
                className='clear-btn'
                >clear
            </button>
        </div>
    </div>
    </>
  )
}

export default Form