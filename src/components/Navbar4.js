import React,{useContext} from 'react'
import './Nav.css'
import HomeIcon from '@material-ui/icons/Home';
import {Link} from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {LoginContext} from '../LoginContext'
function Navbar4() {
    const[loginstatus,setLoginstatus]=useContext(LoginContext)
    return (
        <div>
            <nav className="nav">
            <div className="head">
            <Link to="/homeorg">
            <img className="header__logo" src="/images/brand.png" alt=""/>
            </Link>
        </div>
                <div className="user">
                    <Link to="/homeorg" style={{textDecoration:"none",color:"black"}}>
                    <div className="navicon">
                    <HomeIcon style={{fontSize:40}}/>
                    Home
                    </div>
                    </Link>
                    <div className="navicon dropdown dropbtn">
                    <AccountCircleIcon style={{fontSize:40}}/>
                    <br/>
                    {loginstatus.userEmail}Steve
                    {/*<a href="#" className="dropbtn"></a>*/}
                    <div className="dropdown-content">
                    <Link to="/profile" style={{textDecoration:"none"}}>Profile</Link>
                    <Link to ="/" style={{textDecoration:"none"}} onClick={()=>setLoginstatus({userEmail:"",logged:false})}>Sign Out</Link>
                    </div>
                    </div>
                </div>

        </nav>
        </div>
    )
}

export default Navbar4