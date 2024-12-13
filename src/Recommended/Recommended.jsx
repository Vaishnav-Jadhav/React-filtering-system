import { Button } from '../components/Button'
import './Recommended.css'

export function Recommended({handleBtnClick})
{
    return(
        <div>
            <h2 className='recommended-title'>Recommended</h2>
            <div className="recommended-flex">
                <Button onClickHandler={handleBtnClick} value='' title='All Products'/>
                <Button onClickHandler={handleBtnClick} value='Nike' title='Nike'/>
                <Button onClickHandler={handleBtnClick} value='Adidas' title='Adidas'/>
                <Button onClickHandler={handleBtnClick} value='Puma' title='Puma'/>
                <Button onClickHandler={handleBtnClick} value='Vans' title='Vans'/>
                
            </div>
        </div>
    )
}