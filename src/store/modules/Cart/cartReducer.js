
const initialState = JSON.parse(localStorage.getItem('cart')) || [];

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case '@cart/ADD':
            const { product } = action;
            return [...state, product];

        case '@cart/REMOVE':      
            const { list } = action;
            return list;

        default:
            return state;


    }
}