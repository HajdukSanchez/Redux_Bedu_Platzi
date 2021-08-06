import styled from 'styled-components'

export const PostContainer = styled.div`
  padding-left: 10px;
  border-left: 2px solid #95ca3e;
  border-bottom: 2px solid #95ca3e;
  transition: border-left 0.3s;
  &:hover {
    border-left: 10px solid #95ca3e;
  }
`

export const Title = styled.h3`
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
