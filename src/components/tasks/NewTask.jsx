import React from 'react'

const NewTask = () => {
  return (
    <div>
      <h1>Add new task</h1>
      <div>
        <label htmlFor='user-id'>
          User ID:
          <input type='number' name='user-id' />
        </label>
      </div>
      <div>
        <label htmlFor='task-text'>
          Title:
          <input type='text' name='task-text' />
        </label>
      </div>
      <button>Save task</button>
    </div>
  )
}

export default NewTask
