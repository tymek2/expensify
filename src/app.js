import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import AppRouter from './routes/router'
import store from './store/store'
import {addExpense, updateExpense, deleteExpense} from './actions/expenses'
import {setText, setSort, setStartDate, setEndDate} from './actions/filter'

import 'normalize.css/normalize.css'
import './styles/styles.scss'

store.subscribe(()=> {
    console.log(store.getState())
})

// store.dispatch(updateExpense({id: testExpense.id, amount: 2000}))
// store.dispatch(deleteExpense({id: testExpense.id}))
// store.dispatch(setText({text: 'test text'}))
// store.dispatch(setSort({sortBy: 'date'}))
// store.dispatch(setStartDate({startDate: '2017-01-01'}))
// store.dispatch(setEndDate({endDate: '2018-12-31'}))

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'))

