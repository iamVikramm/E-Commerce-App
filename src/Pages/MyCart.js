import '../Styles/CartItems.css'
import { useReducer } from 'react';
import MyCartItems from './MyCartItems';




function MyCart(props){
    //ForceUpdate
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    const cartItems = localStorage.getItem('cartItems') !== null ? JSON.parse(localStorage.getItem('cartItems')) : [];

    // If length of cartitems is zero, we return an h1
    if(cartItems.length === 0){
        return(
            <div>
                <h1>No Items in the Cart you can add them from the store</h1>
            </div>
        )
    }
    // Update function
    const Update = ()=>{
        forceUpdate()
    }
    return(
            <div className='CartItems'>
                {
                     cartItems.map(item=>{
                        return(<MyCartItems store={props.store} item={item} update={Update} />)
                    })
                }
               
            </div>
        
  );

}

export default MyCart;