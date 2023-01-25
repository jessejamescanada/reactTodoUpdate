import './App.css';
import {useState, useEffect} from 'react'
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
      priority: '1'
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
  // update task with priority
  const updatePriority = (id, newPriority) =>{
    const updatedTaskList = tasks.map((item) => {
      if(id === item.id) {
        return {...item, priority: newPriority}
      }
      return item
    })
    setTasks(updatedTaskList)
  }
  // use effect below is just my test to see if state was updating when console.log on each time the task object was rerendered
  useEffect(() => {
    console.log(tasks)
  },[tasks])

  // sort tasks by priority. Send original task array and this function to notes component. Sort there then send it back here and use the setTasks hook to update array
  const sortTasks = (sortedArray) => {
    setTasks(sortedArray)
  }

  // create function to display Todo component and pass its props
  const taskList = tasks.map((item) => (
    <Todo 
        id={item.id}
        name={item.name}
        completed={item.completed}
        priority={item.priority}
        key={item.id}
        deleteTask={deleteTask}
        editTask={editTask}
        updatePriority={updatePriority}
    />
  ))
  return (
    <div className="App">
      <h1>Todos</h1>
      <Form 
          addTask={addTask}
          tasks={tasks}
          sortTasks={sortTasks}
      />
      <div></div>
      <ul>
        {taskList}
      </ul>

    </div>
  );
}

export default App;
