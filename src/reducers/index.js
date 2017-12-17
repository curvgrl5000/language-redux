// import {SET_LANGUAGE} from '../actions';
import * as actions from '../actions';

const initialLanguage = {language: 'en'};
  
// Add your code for the languageReducer
export const languageReducer = ( state=initialLanguage, action ) => {
  if (action.type === actions.SET_LANGUAGE) {
    return Object.assign({}, state, {
      language: action.language
    });
  }
  return state;
};
