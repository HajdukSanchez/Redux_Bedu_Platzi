import axios from 'axios'
// *Types
import { GET_ALL_TASKS, CHANGE_USER_ID, CHANGE_TASK_TITLE, LOADING_TASKS, ERROR_TASKS } from '../types/tasksTypes'

export const getAllTasks = () => async (dispatch) => {
  dispatch({
    type: LOADING_TASKS,
  })
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos')
    const tasks = {}
    data.map(
      (task) =>
        (tasks[task.userId] = {
          ...tasks[task.userId],
          [task.id]: {
            ...task,
          },
        })
    )
    dispatch({
      type: GET_ALL_TASKS,
      payload: tasks,
    })
  } catch (error) {
    dispatch({
      type: ERROR_TASKS,
      payload: error.message,
    })
  }
}

export const changeUserId = (id) => (dispatch) => {
  dispatch({
    type: CHANGE_USER_ID,
    payload: id,
  })
}

export const changeTitle = (title) => (dispatch) => {
  dispatch({
    type: CHANGE_TASK_TITLE,
    payload: title,
  })
}
