import { combineReducers } from 'redux';
import SplashScreenReducers from '../splashScreen/reducers';
import LoginReducers from '../login/reducers';

export default combineReducers({
  SplashScreenReducers,
  LoginReducers
});
