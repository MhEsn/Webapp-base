const initialState = {
    res: '',
    token: '',
    user: '',
    accountType: '',
    hasToken: false
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGN_UP_SUCCESS':
            return {
                ...state,
                user: action.response.user,
                token: action.response.token,
                hasToken: true
            }
        case 'SIGN_UP_ERROR':
            return {
                ...state,
                res: action.error
            }
        case 'SIGN_IN_SUCCESS':
            return {
                ...state,
                user: action.response.user,
                token: action.response.token,
                hasToken: true
            }
        case 'SIGN_IN_ERROR':
            return {
                ...state,
                resLog: action.resError
            }
        case 'LOG_OUT':
            return {
                ...state,
                user: '',
                token: '',
                hasToken: false,
                accountType: '',
                res: ''
            }
        case 'FILL':
            return {
                ...state,
                user: action.response.user,
                token: action.response.token,
                hasToken: true,
                accountType: action.response.user.roleType
            }
        default:
            return state
    }
}

export default AuthReducer;