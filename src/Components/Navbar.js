import '../Styles/navbar.css';
import { Link } from 'react-router-dom';

function Navbar(){
    
    //Navbar and therir Links to respective Pages

    return(    
        <nav className="navbar-main">
            <div className="nav-logo">
                <Link to='/'><h2>Ecommerce</h2></Link>
            </div>
            <div className="nav-pages">
                    <Link to='/'><li href='/'>Products</li></Link>
                    <Link to='/Add-Products'><li href='/' >Add-Products</li></Link>
            </div>
            <div className='nav-right'>
                <div className='nav-profile-img'><img className='profile-pic' alt='Profile-pic' src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"></img></div>
                <div className='nav-profile-name'><h3>Vikram</h3></div>
            </div>
            <div className='myCart'><Link to='/My-Cart'><img className='cartImg' alt='cart-img' src='https://cdn-icons-png.flaticon.com/128/4290/4290854.png'></img></Link></div>
        </nav>
     
    )
}

export default Navbar;