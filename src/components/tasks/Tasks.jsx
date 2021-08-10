import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllTasks } from '../../actions/tasksActions'

const Tasks = (props) => {
  useEffect(() => {
    props.getAllTasks()
  }, [])
  console.log(props)
  return <div>Tasks</div>
}

const mapStateToProps = ({ tasksReducers }) => tasksReducers

const mapDispatchToProps = {
  getAllTasks,
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)
