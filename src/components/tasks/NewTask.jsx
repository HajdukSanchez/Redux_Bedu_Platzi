import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { changeTitle, changeUserId, addNewTask, editTask } from '../../actions/tasksActions'
import { Loader, Error } from '../'

const NewTask = ({
  user_id,
  title,
  changeUserId,
  changeTitle,
  addNewTask,
  editTask,
  error,
  loading,
  redirect,
  tasks,
  match: {
    params: { TASK_ID, USER_ID },
  },
}) => {
  const [userID, setUserID] = useState(user_id)
  const [titleNew, setTitleNew] = useState(title)

  useEffect(() => {
    if (USER_ID && TASK_ID) {
      const task = tasks[USER_ID][TASK_ID]
      handleUserId(task.userId)
      handleTitle(task.title)
    }
  }, [USER_ID, TASK_ID])

  const handleUserId = (data) => {
    setUserID(data)
    changeUserId(userID)
  }

  const handleTitle = (data) => {
    setTitleNew(data)
    changeTitle(titleNew)
  }

  const handleSaveTask = () => {
    const newTask = {
      userId: parseInt(userID),
      title: titleNew,
      completed: false,
    }
    if (USER_ID && TASK_ID) {
      const task = tasks[USER_ID][TASK_ID]
      const editedTask = {
        ...newTask,
        completed: task.completed,
        id: task.id,
      }
      editTask(editedTask)
    } else {
      addNewTask(newTask)
    }
  }

  return (
    <>
      {error && <Error text={error} />}
      {loading && <Loader />}
      {/* We redirect the component to tasks, if the redirect is true. */}
      {redirect && <Redirect to='/tasks' />}
      {!loading && !error && (
        <div>
          <h1>Add new task</h1>
          <div>
            <label htmlFor='user-id'>
              User ID:
              <input type='number' name='user-id' value={userID} onChange={() => handleUserId(this.target.value)} />
            </label>
          </div>
          <div>
            <label htmlFor='task-text'>
              Title:
              <input type='text' name='task-text' value={titleNew} onChange={() => handleTitle(this.target.value)} />
            </label>
          </div>
          <button onClick={handleSaveTask} disabled={!userID || !titleNew}>
            Save task
          </button>
        </div>
      )}
    </>
  )
}

const mapStateToProps = ({ tasksReducers }) => tasksReducers

const mapDispatchToProps = {
  changeUserId,
  changeTitle,
  addNewTask,
  editTask,
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTask)
