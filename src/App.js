import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Buy flowers',
        day: 'Feb 6th at 1:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Go shopping',
        day: 'Feb 7th at 5pm',
        reminder: false
    }
])

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

  return (
    <div className="App">
      <Header />
      {/* <h1>Hello from React</h1>
      <h2>Hi {x ? name : 'Bye'}</h2> */}
      {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete = {deleteTask} /> : 'No Tasks To Show'}
    </div>
  );
}

export default App;
