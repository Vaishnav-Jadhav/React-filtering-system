import { MdOutlineStarPurple500 } from "react-icons/md";
import { BsFillBagHeartFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

export function Card({img,title,rating,reviews,newPrice,prevPrice})     //use your own logic from App.js
{
    return(
        <section className="card p-3">
                <img src={img} alt={title} className="card-img"/>
                <div className="card-details">
                    <h3 className="card-title">{title}</h3>
                    <section className="card-reviews d-flex">
                        <AiFillStar className="text-[20px] text-orange-300"/><span className='total-reviews'>{rating}  {reviews}</span>
                    </section>
                    <section className='card-price'>
                       <div className='price'>
                            <del className="text-red-900">{prevPrice}</del> ${newPrice}
                       </div>
                       <div className='bag'>
                         <BsFillBagHeartFill/>
                       </div>
                    </section>
                </div>
            </section>
    )
}