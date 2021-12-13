import { createStore, combineReducers, applyMiddleware } from "redux";
import { productReducer } from "./modules/ProductList/reducer";
import { cartReducer } from "./modules/Cart/cartReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  product: productReducer,
  cart: cartReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
