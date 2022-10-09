import intialState from "./initialState"

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case "ADD_ARTICLE":
            return [...state, action.payload]
        default:
            return state
    }
}

export default reducer