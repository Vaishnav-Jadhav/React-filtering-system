import { FiHeart } from "react-icons/fi";
import {AiOutlineUserAdd, AiOutlineShoppingCart,} from 'react-icons/ai';
import './Nav.css'
import { useState } from "react";

export function Nav({handleInputChange})
{

    return(
       <nav>
         <div className="nav-container">
            <input type="text" placeholder="Search Shoes Company." className="search-input" onChange={handleInputChange}/>
         </div>
         <div className="profile-container">
            <button className="btn btn-outline-dark"><FiHeart className="nav-icons"/></button>
            <button><AiOutlineShoppingCart className="nav-icons"/></button>
            <button><AiOutlineUserAdd className="nav-icons"/></button>
         </div>
       </nav>
    )
}