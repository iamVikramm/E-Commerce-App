import {  useState,useReducer } from 'react';
import '../Styles/App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/App.css';
import ItemCard from './itemCard';


function AllProducts(props) {
  // Checking if data needs to be sorted or not
  const [sortByPrice,setsortByPrice] = useState(false);

  //Force Update
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  // Getting data from redux store
  const data = props.store.getState().items;

  // Sorting data based on rating
  const sortedData = [...data].sort((a,b)=>(a.rating < b.rating)?1:-1);
  
  // ForceUpdate function
  const Update = ()=>{
    forceUpdate();
  }

  //Changing state of sorting
  const makeSort = ()=>{
    if(sortByPrice === true){
      setsortByPrice(false);
      toast.success("Removed sorting ");
    }
    else{
      setsortByPrice(true);
      toast.success("Items Sorted by rating");
    }
  }

  // returing itemcard
 
  return (
    <div className="App">
      {sortByPrice?<div className="sort-div"><button onClick={makeSort} className="sort-btn"><img className="dangerSortImg" alt="X-img" src="https://cdn-icons-png.flaticon.com/128/753/753345.png"></img>Sort</button></div>:<div className="sort-div"><button onClick={makeSort} className="sort-btn">Sort by Rating</button></div> }
        {
          sortByPrice?
          sortedData.map(item=>{
            return(<ItemCard key={item.id} item={item} store={props.store} />)
          })
          :
          data.map(item=>{
            return(<ItemCard key={item.id}  item={item} update={Update} store={props.store} />)
          })
        }
        <ToastContainer />
    </div>
  );
}

export default AllProducts;