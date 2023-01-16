import { useState } from 'react';
import {addProduct} from '../actions/index'
import '../Styles/AddProduct.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddProducts(props){

    //Keeping the state of  id of next product to be added
    const [id,setId] = useState(26);

    // states of item details
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [rating,setRating] = useState("");
    const [description,setDescription] = useState("");
    const [imgerUrl,setImgerUrl] = useState("");
    
    // Submit function i.e : Adding product to store

    function handleSubmit(e){
        e.preventDefault()
        const item = {
            "id":id,
            "itemName":name,
            "price":price,
            "rating":rating,
            "description":description,
            "image":imgerUrl
        }
        props.store.dispatch(addProduct(item));
        props.store.subscribe(()=>{
            console.log("updated")
          })

        setId(id+1)
        setName("");
        setPrice("");
        setRating("")
        setDescription("");
        setImgerUrl("");
        toast.success("Item added successfully");
    }

    // AddProduct Form
    
    return(
        <div className="AddProductDiv">
            <h1>Enter the details of the product</h1>
            <form className='AddProductForm' onSubmit={handleSubmit}>
                <input className='inputField' name='name' type="text" value={name} onChange={e=>{setName(e.target.value)}} placeholder="Enter Name of the Product" required></input>
                <input className='inputField' name='price' type="text" value={price} onChange={e=>{setPrice(e.target.value)}}  placeholder="Enter Price" required></input>
                <input className='inputField' name='rating' type="text" value={rating} onChange={e=>{setRating(e.target.value)}}  placeholder="Rate the item" required></input>
                <input className='inputField' name='description' type="text" value={description} onChange={e=>{setDescription(e.target.value)}}  placeholder="Describe the item" required></input>
                <input className='inputField' name='imageUrl' type="text"value={imgerUrl} onChange={e=>{setImgerUrl(e.target.value)}}  placeholder="Product image URL"></input>  
                <input className='submitBtn'  type="submit"></input>  
            </form>
            <ToastContainer />
        </div>
    );

}

export default AddProducts;