export const initiallState = {
    user: null,
    cares: [],
}

const reducer = (state = initiallState, action) => {
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            };
        case 'LOGOUT':
            return {
                ...state,
                user:null,
                cares:[]

            }
        case 'SET_CARES':
            return {
                ...state,
                cares: action.payload
            };
        case 'DEL_CARES':
            return {
                ...state,
                cares: []
            };
        default:
            return state;
    }
};

export default reducer;