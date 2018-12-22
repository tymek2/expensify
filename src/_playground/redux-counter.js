import { createStore } from 'redux'

const incrementCount = (incrementBy = 1) => ({
    type: 'INCREMENT',
    incrementBy
})
const decrementCount = () => ({
    type: 'DECREMENT'
})
const resetCount = () => ({
    type: 'RESET'
})

const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            }
            break
        case 'DECREMENT':
            return {
                count: state.count - 1
            }
            break
        case 'RESET':
            return {
                count: 0
            }
            break
        default:
            return state
    }
}

const store = createStore(countReducer)

store.subscribe(()=> {
    console.log(store.getState())
})

store.dispatch(incrementCount())
store.dispatch(incrementCount(5))
store.dispatch(resetCount())
store.dispatch(decrementCount())
