import {Category} from "./Category/Category"
import {Colors} from './Colors/Colors'
import {Price} from './Price/Price'
import './Sidebar.css';
import { AiOutlineShoppingCart,} from 'react-icons/ai';

export function Sidebar({handleChange})
{
    return(
        <div>
            <section className="sidebar">
                <div className="logo-container">
                    <h1 className="text-[25px]"><AiOutlineShoppingCart /></h1>
                </div>

                <Category handleChange={handleChange}/>
                <Price handleChange={handleChange}/>
                <Colors handleChange={handleChange}/>
            </section>
        </div>
    )
}