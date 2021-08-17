import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import authReducer from './reducer/auth';
let reducer = combineReducers({
    auth: authReducer
});
const middleWare = (store: any) => (next: any) => (action: any) => {
    if (typeof action === 'function') {
        return action(store.dispatch, store.getState());
    } else {
        next(action);
    }
};
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// type for redux devtool
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducer, composeEnhancers(applyMiddleware(middleWare)));
export default store;

