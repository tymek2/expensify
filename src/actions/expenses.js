import uuid from 'uuid'

const addExpense = ({date, title, amount} = {}) => ({
    type: 'ADD_EXPENSE', id: uuid(), date, title, amount
})

const updateExpense = ({id, date, title, amount}) => ({
    type: 'UPDATE_EXPENSE', id, date, title, amount
})

const deleteExpense = ({id}) => ({
    type: 'DELETE_EXPENSE', id
})

export {addExpense, updateExpense, deleteExpense}
