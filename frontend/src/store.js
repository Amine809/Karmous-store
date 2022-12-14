import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { productsReducer,productReducer,productDetailsReducer,newProductReducer,newReviewReducer,productReviewsReducer,reviewReducer } from './reducers/productReducers';
import { authReducer,userReducer,allUsersReducer,forgotPasswordReducer,userDetailsReducer } from './reducers/userReducers';
import { cartReducer } from './reducers/cartReducers';
import { newOrderReducer,myOrdersReducer,orderDetailsReducer,allOrdersReducer,orderReducer } from './reducers/orderReducers';

const reducer = combineReducers({
    productsReducer,
    productReducer,
    newProductReducer,
    productDetailsReducer,
    productReviews:productReviewsReducer,
    review:reviewReducer,
    auth:authReducer,
    user:userReducer,
    allUsers: allUsersReducer,
    userDetails:userDetailsReducer,
    forgotPassword:forgotPasswordReducer,
    cart:cartReducer,
    newOrder:newOrderReducer,
    myOrders:myOrdersReducer,
    allOrders:allOrdersReducer,
    order:orderReducer,
    orderDetails:orderDetailsReducer,
    newReview:newReviewReducer


})


let initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
        shippingInfo: localStorage.getItem('shippingInfo')
            ? JSON.parse(localStorage.getItem('shippingInfo'))
            : {}
    }
}

const middlware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)))

export default store;