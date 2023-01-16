import { Link } from 'react-router-dom';
import '../Styles/App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {addToCart,removeProduct,editProduct} from '../actions/index'
import { useState } from 'react';



function ItemCard(props){

  // Getting the item from props
    const item = props.item;

  // Required state values
    
    const [editMode,setEditMode] = useState(false);
    const [name,setName] = useState(`${item.itemName}`);
    const [price,setPrice] = useState(`${item.price}`);
    const [rating,setRating] = useState(`${item.rating}`);
    const [description,setDescription] = useState(`${item.description}`);

    //  changing the edit state
    const makeEditMode = ()=>{
      if(editMode === true){
        setEditMode(false)
      }
      else{
        setEditMode(true);
      }
    }

    // Updating the edit done

    const updateItem = ()=>{
      const newItem = {
        "id":item.id,
        "itemName":name,
        "price":price,
        "description":description,
        "rating":rating,
        "image":item.image
      }
      props.store.dispatch(editProduct(newItem));
      console.log(props.store.getState())
      setEditMode(false)
      props.update();
      
    }

    // Deleting product from the store

    function deleteProduct(){
      props.store.dispatch(removeProduct(item));
      toast.success("Item Removed from Database");  
      console.log(props.store.getState())
      props.update();
      
    }

    // Adding product to the cart

    function handleAddToCart(){
      props.store.dispatch(addToCart(item));
      localStorage.setItem('cartItems',JSON.stringify(props.store.getState().cartItems.map(item=>item)));
      toast.success("Item Added to Cart",{
        position:"top-left"
      }); 
      props.update();
    }

   

          return(
              <div className='wholeItem' key={item.id}>
              <div className='imageDiv'>
                  <img className='itemImg' alt={item.itemName} src={item.image}></img>
              </div>
              
              {/* Checking for editMode */}
              {(editMode) ? 
                  <div className='itemDetails'>
                    <input className='editInput' placeholder='Item Name' value={name} onChange={(e)=>setName(e.target.value)}></input>
                    <input className='editInput' placeholder='Item price' value={price} onChange={(e)=>setPrice(e.target.value)}></input>
                    <input className='editInput' placeholder='Item description' value={description} onChange={(e)=>setDescription(e.target.value)}></input>
                    <input className='editInput' placeholder='Item rating' value={rating} onChange={(e)=>setRating(e.target.value)}></input>
                  </div>
              :
              <div className='itemDetails'>
              <Link to={`/products/${item.id}`} state={{item}}><h1>{item.itemName}</h1></Link>
                <h4>Rs: {item.price}</h4>
                <p>Description : {item.description}</p>
                <span>Rating : <h4 className='rating'>{item.rating}</h4></span>
              </div>

              }
              <div className='buttons'>
                  <div className='buy-btn'>
                    <button onClick={handleAddToCart} title='Add-to-cart'><img className='buyingImg' alt='buy-img' src='https://cdn-icons-png.flaticon.com/128/753/753317.png'></img></button>            
                  </div>
                  <div className='edit-delete'>
                    {editMode?  <button onClick={updateItem} title='Save'><img className='edit-delete-img' alt='edit-btn' src='https://cdn-icons-png.flaticon.com/128/5290/5290058.png'></img></button>: <button onClick={makeEditMode} title='Edit'><img className='edit-delete-img' alt='edit-btn' src='https://cdn-icons-png.flaticon.com/128/2921/2921222.png'></img></button>}
                    <button onClick={deleteProduct} title='Delete'><img className='edit-delete-img' alt='delete-btn' src='https://cdn-icons-png.flaticon.com/128/1632/1632602.png'></img></button>
                  </div>
              </div>
              <ToastContainer />
            </div>
            )
}

export default ItemCard;