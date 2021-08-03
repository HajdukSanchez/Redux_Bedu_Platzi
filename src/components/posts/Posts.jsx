import React from 'react'

const Posts = ({
  match: {
    params: { key },
  },
}) => {
  return <div>Posts {key}</div>
}

export default Posts
