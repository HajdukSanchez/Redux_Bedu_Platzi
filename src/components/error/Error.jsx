import React from 'react'
// *Styles
import { Title } from '../../styles/components/Error'

const Error = ({ text }) => {
  return (
    <div>
      <Title>Fatal Error</Title>
      <h3>{text}</h3>
    </div>
  )
}

export default Error
