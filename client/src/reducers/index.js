import { combineReducers } from 'redux';
import articlesReducer from './articles_reducer';

const rootReducer = combineReducers({
  articles: articlesReducer
})

export default rootReducer;
