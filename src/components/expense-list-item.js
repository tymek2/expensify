import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteExpense} from '../actions/expenses'

const ExpenseListItem = ({dispatch, title, amount, id, date}) => (
    <p><Link to={'/edit#'+id}>{title}: {amount}, at: {date} </Link><br/>
    <button onClick={e =>{
        dispatch(deleteExpense({id}))
    }}>delete</button>
    </p>
)

export default connect()(ExpenseListItem)


