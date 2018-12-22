import React from 'react'
import ExpenseForm from './expense-form'
import {connect} from 'react-redux'
import {editExpense} from '../actions/expenses'

const EditExpensePage = (props) => (
    <div>Edit expense
    <ExpenseForm onSubmit={expense => {
        props.dispatch(addExpense(expense))
        props.history.push('/')
    }}/>    
    </div>
)

export default connect()(EditExpensePage)
