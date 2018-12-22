const expenseReducer = (state = [], action) => {
    const {type, id, date, title, amount} = action
    switch (type) {
        case 'ADD_EXPENSE': 
            return [...state, {id, date, title, amount}]
        case 'DELETE_EXPENSE':
            return state.filter(expense => expense.id !== id)
        case 'UPDATE_EXPENSE':
            return state.map(expense => expense.id === id ? {...expense, date, title, amount} : {...expense})
        default:
            return state
    }
}

export default expenseReducer

