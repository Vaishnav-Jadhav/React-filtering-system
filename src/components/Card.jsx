//import { MdOutlineStarPurple500 } from "react-icons/md";
import { BsFillBagHeartFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

export function Card({img,title,rating,reviews,newPrice,prevPrice})     //use your own logic from App.js
{
    return(
        <section className="card p-3">
                <div className="card-body">
                <div className="card-header p-0 border-0">
                <img src={img} alt={title} className="card-img"/>
                </div>
                <div className="card-details">
                   <div className="card-body"> 
                      <h3 className="card-title">{title}</h3>
                   </div>
                    <section className="card-reviews d-flex">
                        <AiFillStar className="text-[20px] text-orange-300"/><span className='total-reviews'>{rating}  {reviews}</span>
                    </section>
                    <section className='card-price card-footer p-0 border-0 bg-none'>
                       <div className='price'>
                            <del className="text-red-900">{prevPrice}</del> ${newPrice}
                       </div>
                       <div className='bag'>
                         <BsFillBagHeartFill/>
                       </div>
                    </section>
                </div>
                </div>
            </section>
    )
}