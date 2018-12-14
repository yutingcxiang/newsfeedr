import { combineReducers } from 'redux';
import articlesReducer from './articles_reducer';
import filtersReducer from './filters_reducer';

const rootReducer = combineReducers({
  articles: articlesReducer,
  filters: filtersReducer
})

export default rootReducer;
