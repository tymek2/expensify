const setText = ({text}) => ({type: 'SET_TEXT', text})
const setSort = ({sortBy}) => ({type: 'SET_SORT', sortBy})
const setStartDate = ({startDate}) => ({type: 'SET_START_DATE', startDate})
const setEndDate = ({endDate}) => ({type: 'SET_END_DATE', endDate})

export {setText, setSort, setStartDate, setEndDate}
