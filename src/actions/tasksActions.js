import axios from 'axios'
// *Types
import { GET_ALL_TASKS, CHANGE_USER_ID, CHANGE_TASK_TITLE, ADD_NEW_TASK, EDIT_TASK, UPDATE_TASKS, DELETE_TASK, LOADING_TASKS, ERROR_TASKS } from '../types/tasksTypes'

const API_URL = 'https://jsonplaceholder.typicode.com/todos'

export const getAllTasks = () => async (dispatch) => {
  dispatch({
    type: LOADING_TASKS,
  })
  try {
    const { data } = await axios.get(API_URL)
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

export const addNewTask = (task) => async (dispatch) => {
  dispatch({
    type: LOADING_TASKS,
  })
  try {
    const { data } = await axios.post(API_URL, task)
    dispatch({
      type: ADD_NEW_TASK,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ERROR_TASKS,
      payload: error.message,
    })
  }
}

export const editTask = (task) => async (dispatch) => {
  dispatch({
    type: LOADING_TASKS,
  })
  try {
    const { data } = await axios.put(`${API_URL}/${task.id}`, task)
    dispatch({
      type: EDIT_TASK,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ERROR_TASKS,
      payload: error.message,
    })
  }
}

export const changeCheckout = (userID, taskID) => (dispatch, getState) => {
  const { tasks } = getState().tasksReducers
  const selected = tasks[userID][taskID]
  const newTasks = {
    ...tasks,
  }
  newTasks[userID] = {
    ...tasks[userID],
  }
  newTasks[userID][taskID] = {
    ...tasks[userID][taskID],
    completed: !selected.completed,
  }
  dispatch({
    type: UPDATE_TASKS,
    payload: newTasks,
  })
}

export const deleteTask = (taskID) => async (dispatch) => {
  dispatch({
    type: LOADING_TASKS,
  })
  try {
    const { data } = await axios.delete(`${API_URL}/${taskID}`)
    dispatch({
      type: DELETE_TASK,
      payload: {},
    })
  } catch (error) {
    dispatch({
      type: ERROR_TASKS,
      payload: error.message,
    })
  }
}
