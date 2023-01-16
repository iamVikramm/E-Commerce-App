import { removeFromCart } from '../actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/CartItems.css'


function MyCartItems(props){
    // Getting the current item from props
    const itemC = props.item;

    // Reomve from the cart function
    function removeFromCartfun(){
        props.store.dispatch(removeFromCart(itemC));
        localStorage.setItem('cartItems',JSON.stringify(props.store.getState().cartItems.map(item=>item)));
        toast.success("Item Removed from Cart");  
        props.update()       
    }

    // Buying from cart function

    function cartBuyNow(){
        props.store.dispatch(removeFromCart(itemC));
        localStorage.setItem('cartItems',JSON.stringify(props.store.getState().cartItems.map(item=>item)));
        toast.success("Item Purchase Successfull");  
        props.update() 
    }

    return(
    <div className='wholeCard' key={itemC.id}>
        <button title='remove-from-cart' onClick={removeFromCartfun}><img className='cartRemove' alt='remove' src="https://cdn-icons-png.flaticon.com/128/5974/5974771.png"></img></button>
        <div className='cartImageDiv'>
            <img className='cartItemImg' alt={itemC.itemName} src={itemC.image}></img>
        </div>
        <div className='cartItemDetails'>
            <h2>{itemC.itemName}</h2>
            <h4>Rs: {itemC.price}</h4>
        </div>
        <div className='cartButtons'>
            <button onClick={cartBuyNow} className="cartBuyNow" title='BuyNow'>Buy Now</button>          
        </div>
        <ToastContainer />
    </div>
    )
}

export default MyCartItems;