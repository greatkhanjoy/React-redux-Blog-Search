import { AUTHORCHANGED, AUTHORREMOVED, CATEGORYCHANGED, CATEGORYREMOVED, SEARCHCHANGED } from "./actionTypes"
import intialState from './initialState'

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case SEARCHCHANGED:
            return {
                ...state,
                search: action.payload
            }

        case AUTHORCHANGED:
            return {
                ...state,
                author: action.payload
            }

        case CATEGORYCHANGED:
            return {
                ...state,
                category: action.payload
            }

        case AUTHORREMOVED:
            return {
                ...state,
                author: ''
            }

        case CATEGORYREMOVED:
            return {
                ...state,
                category: ''
            }

        default:
            return state
    }
}

export default reducer