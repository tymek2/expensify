const defaultFilterState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
}

const filterReducer = (state = defaultFilterState, action) => {
    const {type, text, sortBy, startDate, endDate} = action
    switch (type) {
        case 'SET_TEXT':
            return {...state, text}
        case 'SET_SORT':
            return {...state, sortBy}
        case 'SET_START_DATE':
            return {...state, startDate}
        case 'SET_END_DATE':
            return {...state, endDate}
        default:
            return state
    }
}

export default filterReducer