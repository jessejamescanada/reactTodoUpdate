import './App.css';
import {useState} from 'react'
import Form from './components/Form';
import Todo from './components/Todo';

function App() {
  const [tasks, setTasks] = useState([])

  // add task
  const addTask = (name) => {
    const newTask = {
      id: Math.floor(Math.random() * 10000 +1),
      name,
      completed: false,
    }
    setTasks([...tasks, newTask])
  }
  // delete task
  const deleteTask = id => {
    const remainingTasks = tasks.filter((item) => id !== item.id)
    setTasks(remainingTasks)
  }
  // edit task
  const editTask = (id, newName) => {
    const editedTaskList = tasks.map((item) => {
      if(id === item.id) {
        return {...item, name: newName}
      }
      return item
    })
    setTasks(editedTaskList)
  }
  // create function to display Todo component and pass its props
  const taskList = tasks.map((item) => (
    <Todo 
        id={item.id}
        name={item.name}
        completed={item.completed}
        key={item.id}
        deleteTask={deleteTask}
        editTask={editTask}
    />
  ))
  return (
    <div className="App">
      <h1>Todos</h1>
      <Form addTask={addTask}/>
      <div></div>
      <ul>
        {taskList}
      </ul>

    </div>
  );
}

export default App;
