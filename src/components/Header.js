 import { LOGO_URL } from "../utils/constants"
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    //  let btnName = "Login";
    const [btnNameReact,setBtnNameReact ] = useState("Login");
    // console.log("Header render");

    const onlineStatus = useOnlineStatus(); 

    // If no dependenecy array => useEffect is called on every render
    //  if dependancy arrey is empty = [] => useEffect is called on initial render(just once)
    //  if dependency 
useEffect(() => {
    console.log("useEffect called");
 },[btnNameReact] );

    return (
        <div className="header">
            <div className="Logo-container">
                <img className="logo" src= {LOGO_URL} />
            </div>
            <div className="nav-items">
             <ul>
                <li>
                    Online Status: {onlineStatus ?  "\u2705":"\u274C"   }
                </li>
               <li>
               <Link to="/">   Home </Link>
                </li> 
               <li> 
                <Link to="/about"> About us</Link>
                </li> 
             <li>
             <Link to="/contact"> Contact Us </Link>
             </li>
             <li>
             <Link to="/grocery"> Grocery </Link>
             </li>
               <li > <Link to="/cart">Cart </Link></li>
               < button className="login" onClick={() => { btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login"); 
             }}>
                {btnNameReact}
                </button> 
             </ul>
            </div>
        </div>
    );
};

export default Header;
 