import Plus from '../image/plus.svg'
import Minus from '../image/minus.svg'
import Delete from '../image/delete-icn.svg'
import { MyCartContext } from '../management/context'
const CartItem = ({id,name,image_url,price,quantity}) => {
    const {removeItem,toggleQuantity,formatNumber} = MyCartContext();
    return (
        <div className="item py-[5px] px-[30px] h-[100px] flex">
            <div className="product-image mr-[50px]">
                <img src={image_url} alt={name} className='w-[120px] h-[80px]'/>
            </div>
            <div className="description pt-[5px] mr-[60px] min-w-[120px]">
                <span className='block m-t-[5px] text-[18px] text-black font-bold'>{name}</span>
                <span className='block m-t-[8px] text-[18px] text-[#86939e] font-light'>{formatNumber(price)} Baht.</span>
            </div>
            <div className="quantity mr-[60px] flex items-center">
                <button className='w-[30px] h-[30px] rounded-[6px] cursor-pointer bg-slate-200'
                    onClick={()=>toggleQuantity(id,"increment")}>
                    <img src={Plus} alt="" className='mt-[2px] ml-[10px]'/>
                </button>
                <input type="text" value={quantity} disabled className='border-none font-[18px] text-center w-[32px] font-light'/>
                <button className='w-[30px] h-[30px] rounded-[6px] cursor-pointer bg-slate-200' 
                    onClick={()=>toggleQuantity(id,'decrement')}>
                    <img src={Minus} alt="" className='ml-[10px]'/>
                </button>
            </div>
            <div className='total-price w-[83px] pt-[15px] text-center text-[25px] font-bold'>
                {formatNumber(quantity*price)}
            </div>
            <div className="remove relative pt-[25px] ml-[60px]" onClick={()=>removeItem(id)}>
                <img src={Delete} alt="" className='cursor-pointer' />
            </div>
        </div>
    )
}
export default CartItem;