import './MenuLink.css'
import {  NavLink } from 'react-router-dom'

const MenuLink = ({ children, to }) => {
    return (
        <NavLink className="link" to={to}>{children}</NavLink>
    )
}

export default MenuLink