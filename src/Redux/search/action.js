import { AUTHORCHANGED, AUTHORREMOVED, CATEGORYCHANGED, CATEGORYREMOVED, SEARCHCHANGED } from "./actionTypes"

export const searchChanged = (search) => {
    return {
        type: SEARCHCHANGED,
        payload: search
    }
}

export const authorChanged = (author) => {
    return {
        type: AUTHORCHANGED,
        payload: author
    }
}

export const authorRemoved = () => {
    return {
        type: AUTHORREMOVED
    }
}

export const categoryChanged = (category) => {
    return {
        type: CATEGORYCHANGED,
        payload: category
    }
}

export const categoryRemoved = () => {
    return {
        type: CATEGORYREMOVED
    }
}