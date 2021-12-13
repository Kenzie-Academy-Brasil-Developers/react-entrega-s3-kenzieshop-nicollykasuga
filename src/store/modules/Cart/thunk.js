import { addToCart, removeFromCart } from './action';

export const addToCartThunk = (product) => {
    return (dispatch, getStore) => {
        
        const list = JSON.parse(localStorage.getItem('cart')) || [];
        list.push(product);
        localStorage.setItem('cart', JSON.stringify(list));

        dispatch(addToCart(product))
    };
};

export const removeFromCartThunk = (product) => {
    return (dispatch, getStore) => {

        const { cart } = getStore();
        const list = [];
         for (let i = 0; i < cart.length; i++) {
             if (i !== cart.indexOf(product)) {
                list.push(cart[i])
             }  
         }
        localStorage.setItem('cart', JSON.stringify(list));
        console.log(cart)
        dispatch(removeFromCart(list));
 
    }
}