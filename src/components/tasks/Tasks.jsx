import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllTasks } from '../../actions/tasksActions'
import { Error, Loader } from '../'
// *Styles
import { TasksContainer } from '../../styles/components/Tasks'

const Tasks = ({ tasks, loading, error, getAllTasks }) => {
  useEffect(() => {
    if (!Object.keys(tasks).length) getAllTasks() // !If we don't have tasks, go for them
  }, [])

  // ?We cant simplify the code creating two more components. One for Task container and other for task
  const addYTasksByUser = (userId) => {
    const tasksByUser = {
      ...tasks[userId],
    }
    return Object.keys(tasksByUser).map((taskId) => (
      <div>
        <input type='checkbox' defaultChecked={tasksByUser[taskId].completed} />
        {tasksByUser[taskId].title}
      </div>
    ))
  }

  return (
    <>
      {error && <Error text={error.message} />}
      {loading && <Loader />}
      {!error && !loading && tasks && (
        <div>
          {/* If we have an Object, the parameters in the map function are the variables inside the data */}
          {Object.keys(tasks).map((userId) => (
            <div key={userId}>
              <h3>User {userId}:</h3>
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)
