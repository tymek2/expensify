import React from 'react'
import {connect} from 'react-redux'
import selectExpences from '../selectors/expenses'

import ExpenseListItem from './expense-list-item'

const ExpenseList = (props) => (
    <div>
        <h1>Expense list ({props.expenses.length}):</h1>
        {props.expenses.map(expense => (
            <ExpenseListItem key={expense.id} {...expense}/>  
        ))}
    </div>
)

const mapStateToProps = (state)=>({
    expenses: selectExpences(state.expenses, state.filter)
}) 

export default connect(mapStateToProps)(ExpenseList)
