import { ADD_ITEMS,ADD_TO_CART,REMOVE_FROM_CART,ADD_PRODUCT,REMOVE_PRODUCT,EDIT_PRODUCT } from "../actions";
const initialStoreState = {
    items:[],
    cartItems:[]
}

export default function items(state = initialStoreState,action){
    
    // Cases and their Functions
    switch(action.type){
        case ADD_ITEMS:
            return{
                ...state,
                items:action.items
            }
        case ADD_TO_CART:
            return{
                ...state,
                cartItems:[action.item,...state.cartItems]
            }
        case REMOVE_FROM_CART:
            const filteredArray1 = state.cartItems.filter(
                item=>item.id !== action.item.id
            );
           
            return{
                ...state,
                cartItems:filteredArray1
            }
        case ADD_PRODUCT:
            return{
                ...state,
                items:[action.item,...state.items]
            }
        case REMOVE_PRODUCT:
            const filteredArray2 = state.items.filter(
                item=>item.id !== action.item.id
            )
            return{
                ...state,
                items:filteredArray2
            }
        case EDIT_PRODUCT:
            const filteredArray3 = state.items.map(
                item=>{
                    if(item.id === action.item.id){
                        return(action.item);
                    }
                    return item;
                }
                );
            return{
                ...state,
                items:filteredArray3
            }
        
        default:
            return state;
    }
}

