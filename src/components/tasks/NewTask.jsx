import React, { useState } from 'react'
import { connect } from 'react-redux'
import { changeTitle, changeUserId, addNewTask } from '../../actions/tasksActions'

const NewTask = ({ user_id, title, changeUserId, changeTitle, addNewTask }) => {
  const [userID, setUserID] = useState(user_id)
  const [titleNew, setTitleNew] = useState(title)

  const handleUserId = (event) => {
    setUserID(event.target.value)
    changeUserId(userID)
  }

  const handleTitle = (event) => {
    setTitleNew(event.target.value)
    changeTitle(titleNew)
  }

  const handleSaveTask = () => {
    const newTask = {
      userId: parseInt(userID),
      title: titleNew,
      completed: false,
    }
    addNewTask(newTask)
  }

  return (
    <div>
      <h1>Add new task</h1>
      <div>
        <label htmlFor='user-id'>
          User ID:
          <input type='number' name='user-id' value={userID} onChange={handleUserId} />
        </label>
      </div>
      <div>
        <label htmlFor='task-text'>
          Title:
          <input type='text' name='task-text' value={titleNew} onChange={handleTitle} />
        </label>
      </div>
      <button onClick={handleSaveTask} disabled={!userID || !titleNew}>
        Save task
      </button>
    </div>
  )
}

const mapStateToProps = ({ tasksReducers }) => tasksReducers

const mapDispatchToProps = {
  changeUserId,
  changeTitle,
  addNewTask,
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTask)
