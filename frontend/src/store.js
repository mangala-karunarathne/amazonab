import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from 'redux';
import thunk from 'redux-thunk';
// import data from "./data";
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer } from './reducer/productReducers';

const initialState ={};
const reducer = (state, action) => {
    return {products: DataTransfer.products}
}
// const reducer = combineReducers({
//     productList: productListReducer
// });
// const composeEnhancers = composeWithDevTools({});
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    // window.devToolsExtension && window.devToolsExtension(),
    initialState,
    // composeEnhancers(applyMiddleware(thunk)));
    composeEnhancer(applyMiddleware(thunk)));

export default store;

