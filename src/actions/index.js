//action types
export const ADD_ITEMS ='ADD_ITEMS';
export const ADD_TO_CART ='ADD_TO_CART';
export const REMOVE_FROM_CART ='REMOVE_FROM_CART';
export const ADD_PRODUCT ='ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const EDIT_PRODUCT = "EDIT_PRODUCT";


//action creators
export function addItems(items){
    return{
        type:ADD_ITEMS,
        items
    }
}

export function addProduct(item){
    return{
        type:ADD_PRODUCT,
        item
    }
}

export function addToCart(item){
    return{
        type:ADD_TO_CART,
        item
    }
}

export function removeFromCart(item){
    return{
        type:REMOVE_FROM_CART,
        item
    }
}

export function removeProduct(item){
    return{
        type:REMOVE_PRODUCT,
        item
    }
}

export function editProduct(item){
    return{
        type:EDIT_PRODUCT,
        item
    }
}