import './Products.css';
import { MdOutlineStarPurple500 } from "react-icons/md";
import { BsFillBagHeartFill } from "react-icons/bs";
import { Card } from '../components/Card';


export function Products({result})
{
    return(
       <>
        <section className="card-container">
            {result}
        </section>
       </>
    )
}