import React from 'react'
import {NavLink} from 'react-router-dom'


export default () => (
    <div>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink> | 
        <NavLink to="/add" activeClassName="is-active">Add expense</NavLink> | 
        <NavLink to="/edit" activeClassName="is-active">Edit expense</NavLink> | 
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>  
    </div>
)