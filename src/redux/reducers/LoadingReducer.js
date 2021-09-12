const initialState = {
    loadingState: false
};

const LoadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ACTIVE':
            return {
                ...state,
                loadingState: true
            }
        case 'DEACTIVE':
            return {
                ...state,
                loadingState: false
            }
        default:
            return state
    }
}

export default LoadingReducer;