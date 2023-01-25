import React, {useState} from 'react'
import '../App.css';

const Todo = ({name, completed, id, deleteTask, editTask}) => {
    const [isEditing, setIsEditing] = useState(false)
    const [newName, setNewName] = useState('')

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
  return (
    <>{isEditing ? (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder='Edit'
                value={newName}
                onChange={handleChange}
            />
            <div className="btn-group">
                <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
                <button type="submit">Save</button>
            </div>
        </form>
    ) : ( 
        <div className="view">
        {/* <input 
            type="text" 
        /> */}
        <div className="todo-and-btn-container">
            <label>{name}</label>
        
            <div className="btn-group">
                <button onClick={() => setIsEditing(true)}>Edit</button>
                <button onClick={() => deleteTask(id)}>Delete</button>
            </div>
        </div>
    </div>
    )}


    </>
  )
}

export default Todo