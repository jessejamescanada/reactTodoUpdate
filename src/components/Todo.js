import React, {useState, useEffect} from 'react'
import '../App.css';

const Todo = ({name, completed, id, deleteTask, editTask, priority, updatePriority}) => {
    const [isEditing, setIsEditing] = useState(false)
    const [newName, setNewName] = useState('')
    const [priority2, setPriority2] = useState('1')

    const handleChange = e => {
        setNewName(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        editTask(id, newName)
        setNewName('')
        setIsEditing(false)
        console.log('first')
    }
    // handle the change in priority. Set priority2 with e.target.value then call useeffect hook to run only when priority2 value changes
    const handlePriorityChange = e => {
        setPriority2(e.target.value)
    }
    useEffect(() => {
            updatePriority(id, priority2)
    },[priority2])

  return (
    <>{isEditing ? (
        <form onSubmit={handleSubmit} className='edit-form'>
            <input 
                type="text" 
                placeholder='Edit'
                value={newName}
                onChange={handleChange}
                className='edit-input'
                maxLength='25'
            />
            <div className="btn-group">
                <button 
                    type="button" onClick={() => setIsEditing(false)}
                    className='cancel-btn'
                    >Cancel
                </button>
                <button 
                    type="submit"
                    className='save-btn'
                    >Save
                </button>
            </div>
        </form>
    ) : ( 
        <div className="view">
        {/* <input 
            type="text" 
        /> */}
        <div className="todo-and-btn-container">
            <div className='name-label'><p>{name}</p></div>
            <div className="rating-select-container">
                <label className='rating-label'>Priority</label>
                <select 
                    value={priority2}
                    onChange={handlePriorityChange}
                    // {(e) => setPriority(e.target.value)}
                >
                    <option className='s1' value="1">Low</option>
                    <option className='s2' value="2">Med</option>
                    <option className='s3' value="3">High</option>
                </select>
            </div>
            <div className="btn-group">
                <button onClick={() => setIsEditing(true)}
                    className='edit-btn'
                    >Edit
                </button>
                <button onClick={() => deleteTask(id)}
                    className='delete-btn'
                    >Delete
                </button>
            </div>
        </div>
    </div>
    )}


    </>
  )
}

export default Todo