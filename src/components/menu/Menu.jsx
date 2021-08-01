import React from 'react'
import { Link } from 'react-router-dom'
import { MenuStyled, MenuLink } from '../../styles/components/Menu'

const Menu = () => {
  return (
    <MenuStyled>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <MenuLink>Users</MenuLink>
      </Link>
      <Link to='/task' style={{ textDecoration: 'none' }}>
        <MenuLink>Task</MenuLink>
      </Link>
    </MenuStyled>
  )
}

export default Menu
