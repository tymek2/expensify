import React from 'react'
import ExpenseForm from './expense-form'
import {connect} from 'react-redux'
import {addExpense} from '../actions/expenses'

const AddExpensePage = (props) => (
    <div>Add expense
    <ExpenseForm onSubmit={expense => {
        props.dispatch(addExpense(expense))
        props.history.push('/')
    }}/>
    </div>
)

export default connect()(AddExpensePage)

