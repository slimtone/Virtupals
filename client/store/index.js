import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import questions from './questions';
import channels from './channels';
import currentChannel from './currentChannel';
import messages from './messages';
import newChannelEntry from './newChannelEntry';
import newMessageEntry from './newMessageEntry';
import name from './name';

export const reducer = combineReducers({user, questions, channels, currentChannel, messages, newMessageEntry, newChannelEntry, name});

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store;
export * from './user';
export * from './questions';
export * from './channels';
export * from './currentChannel';
export * from './messages';
export * from './newChannelEntry';
export * from './newMessageEntry';
export * from './name';

