import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAllTasks, changeCheckout, deleteTask } from '../../actions/tasksActions'
import { Error, Loader } from '../'
// *Styles
import { TasksContainer, TaskButton, Task, TaskInfo, TaskText, TaskTitle } from '../../styles/components/Tasks'

const Tasks = ({ tasks, loading, error, getAllTasks, changeCheckout, deleteTask }) => {
  useEffect(() => {
    if (!Object.keys(tasks).length) getAllTasks() // !If we don't have tasks, go for them
  }, [])

  // ?We cant simplify the code creating two more components. One for Task container and other for task
  const addYTasksByUser = (userId) => {
    const tasksByUser = {
      ...tasks[userId],
    }
    return Object.keys(tasksByUser).map((taskId) => (
      <Task>
        <TaskInfo>
          <input type='checkbox' defaultChecked={tasksByUser[taskId].completed} onChange={() => changeCheckout(userId, taskId)} disabled />
          <TaskText>{tasksByUser[taskId].title}</TaskText>
        </TaskInfo>
        <div>
          <Link to={`/tasks/edit/${userId}/${taskId}`}>
            <TaskButton active>Edit</TaskButton>
          </Link>
          <TaskButton onClick={() => deleteTask(taskId)} disabled delete>
            Delete
          </TaskButton>
        </div>
      </Task>
    ))
  }

  return (
    <>
      {error && <Error text={error.message} />}
      {loading && <Loader />}
      {!error && !loading && tasks && (
        <div>
          <Link to='/tasks/new'>
            <TaskButton add active>
              Add Task
            </TaskButton>
          </Link>
          {/* If we have an Object, the parameters in the map function are the variables inside the data */}
          {Object.keys(tasks).map((userId) => (
            <div key={userId}>
              <TaskTitle>User {userId}</TaskTitle>
              <TasksContainer>{addYTasksByUser(userId)}</TasksContainer>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

const mapStateToProps = ({ tasksReducers }) => tasksReducers

const mapDispatchToProps = {
  getAllTasks,
  changeCheckout,
  deleteTask,
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)
