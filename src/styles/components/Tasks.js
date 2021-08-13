import styled from 'styled-components'

export const TasksContainer = styled.div`
  font-size: 14px;
  margin-left: 50px;
  margin-bottom: 30px;
`

export const Task = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.6rem;
`

export const TaskButton = styled.button`
  outline: none;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.4rem;
  border: 1px solid transparent;
  cursor: ${(props) => props.active && 'pointer'};
  ${(props) =>
    props.delete && {
      'margin-left': '20px',
      color: 'red',
      'background-color': '#ffc4c4',
    }};
  ${(props) =>
    props.add && {
      color: '#95ca3e',
      border: '1px solid #95ca3e',
      background: '#e2ffb2',
    }};
`

export const TaskTitle = styled.h3`
  margin-top: 0;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid black;
  text-align: right;
  text-transform: uppercase;
`

export const TaskInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TaskText = styled.span`
  margin-left: 1rem;
`
