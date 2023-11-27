import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
        <h4 style={{display: "flex", justifyContent: 'space-between'}}>{ task.text } <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)}/> </h4>
        <p>{ task.day }</p>
    </div>
  )
}

export default Task