import { combineReducers } from 'redux';
import SplashScreenReducers from '../splashScreen/reducers';
import LoginReducers from '../login/reducers';

const rootReducer = combineReducers({
  SplashScreenReducers,
  LoginReducers
});

export default rootReducer;
