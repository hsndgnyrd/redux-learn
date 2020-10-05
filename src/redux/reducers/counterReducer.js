import * as actionTypes from '../actions/actionTypes'

const counterReducer = (state = 0, action) => {
    let newState;
    switch (action.type) {
        case actionTypes.INCREASE:
            return (newState = state + action.payload)
        case actionTypes.DECREASE:
            return (newState = state - action.payload)
        case actionTypes.INCREASE_BY_TWO:
            return (newState = state + action.payload)
        case actionTypes.DECREASE_BY_TWO:
            return (newState = state - action.payload)
        default:
            return state;
    }
}

export default counterReducer;