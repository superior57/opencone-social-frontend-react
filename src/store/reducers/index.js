import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';
import postReducer from './postReducer';
import themeReducer from "./themeReducer";
import deviceReducer from './deviceReducer';
import categoryReducer from './categoryReducer';
import subCategoryReducer from './subCategoryReducer';
import fieldReducer from './fieldReducer';
import fieldSpecReducer from './fieldSpecReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  post: postReducer,
  theme: themeReducer,
  device: deviceReducer,
  category: categoryReducer,
  subCategory: subCategoryReducer,
  field: fieldReducer,
  fieldSpec: fieldSpecReducer
});
