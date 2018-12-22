import React from 'react'
import {connect} from 'react-redux'
import {setText, setSort} from '../actions/filter'

const ExpenseListFilter = (props) => (
    <div>
        <input type="text" value={props.filter.text} onChange={e => {
            props.dispatch(setText({text: e.target.value}))
        }}/>
        <select value={props.filter.sortBy} onChange={e => {
            props.dispatch(setSort({sortBy: e.target.value}))
        }}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
)

const mapStateToProps = (state)=>({
    filter: state.filter
}) 

export default connect(mapStateToProps)(ExpenseListFilter)


