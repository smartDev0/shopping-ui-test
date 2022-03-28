import { createStore } from 'redux';

const INITIAL_STATE = {
    data: [],
};

function shoppings(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_SHOPPING':
            return {
                ...state,
                data: [...state.data, action.payload]
            };
        case 'REMOVE_SHOPPING':
            return {
                ...state,
                data: action.shoppings
            }
        case 'UPDATE_SHOPPING':
            return {
                ...state,
                data: action.shoppings
            }
        default:
            return state
    }
}

const store = createStore(shoppings);

export default store;
