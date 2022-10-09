import { combineReducers } from 'redux';
import ArticlesReducer from './articles/reducer';
import SearchReducer from './search/reducer';

const rootReducer = combineReducers({
    articles: ArticlesReducer,
    filters: SearchReducer
})

export default rootReducer;