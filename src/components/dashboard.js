import React from 'react'
import ExpenseList from './expense-list.js'
import ExpenseListFilter from './expense-list-filter'

const Header = (props) => (
    <div>
        <h1>{props.title || 'Hello!'}</h1>
        <h2>{props.subtitle}</h2>
        <ExpenseListFilter/>
        <ExpenseList/>
    </div>
)

export default Header
