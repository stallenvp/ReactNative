import { AsyncStorage } from 'react-native';
import CreateDataContext from './CreateDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signin':
      return { token: action.payload, errorMessage: '' };
    case 'signout':
      return { token: null, errorMessage: '' };
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token');

  if (token) {
    dispatch({ type: 'signin', payload: token });
    navigate('TrackList');
  } else {
    navigate('Signup');
  }
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token });

    navigate('TrackList');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong while signing up',
    });
  }
};

const signin = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signin', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token });

    navigate('TrackList');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong while signing in.',
    });
  }
};

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'signout' });

  navigate('loginFlow');
};

const clearErrorMessage = (dispatch) => () =>
  dispatch({ type: 'clear_error_message' });

export const { Provider, Context } = CreateDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage, tryLocalSignin, signout },
  { token: null, errorMessage: '' },
);
