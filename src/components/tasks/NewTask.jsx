import React from 'react'
import { connect } from 'react-redux'
import { changeTitle, changeUserId } from '../../actions/tasksActions'

const NewTask = ({ user_id, title, changeUserId, changeTitle }) => {
  const handleUserId = (event) => {
    changeUserId(event.target.value)
  }

  const handleTitle = (event) => {
    changeTitle(event.target.value)
  }

  return (
    <div>
      <h1>Add new task</h1>
      <div>
        <label htmlFor='user-id'>
          User ID:
          <input type='number' name='user-id' value={user_id} onChange={handleUserId} />
        </label>
      </div>
      <div>
        <label htmlFor='task-text'>
          Title:
          <input type='text' name='task-text' value={title} onChange={handleTitle} />
        </label>
      </div>
      <button>Save task</button>
    </div>
  )
}

const mapStateToProps = ({ tasksReducers }) => tasksReducers

const mapDispatchToProps = {
  changeUserId,
  changeTitle,
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTask)
