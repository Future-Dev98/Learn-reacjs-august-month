const initState = {
    search: '',
    status: 'All',
    priority: []
};
const filtersReducer = (state = initState, action) => {
    switch (action.type) {
        case 'search':
            return {
                ...state,
                search: action.payload
            };
        case 'status':
            return {
                ...state,
                status: action.payload
            };
        default:
            return state;
    }
}

export default filtersReducer;