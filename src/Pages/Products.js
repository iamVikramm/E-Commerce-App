import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/ProductPage.css'


function Products(){
    // Using location to get details of Product
    const location = useLocation();
    const ProductData = location.state.item;

    // BuyNow Function
    function buyNow(){
        toast.success("Purchase Successfull")
    }
    // Add to cart function
    function addToCart(){
        toast.success("Item added to cart successfully")
    }

    // returing 

    return(
        <div className="productPageDiv">
            <div className="ProductImgDiv">
            <img className="productImage" alt={ProductData.id} src={ProductData.image}></img>
            </div>
            <div className="flex-col">
            <div className="ProductDetails"> 
                <h1>{ProductData.itemName}</h1>
                <h3>Rs : {ProductData.price}</h3>
                <h4>Rating : {ProductData.rating}</h4>
                <p>Description : {ProductData.description}</p>
            </div>
            <div className="Productbuttons">
                <button onClick={buyNow} className="BuyNow">Buy Now</button>
                <button onClick={addToCart} className="AddCart">Add to Cart</button>
            </div>

            </div>
            <ToastContainer />
        </div>
    );

}

export default Products;