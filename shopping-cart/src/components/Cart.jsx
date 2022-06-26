import CartData from "../data/CartData";
import { CartContext, MyCartContext } from "../management/context";
import CartItem from "./CartItem";
const Cart = () => {
    const {cart,total,formatNumber} = MyCartContext();
    if(cart.length===0){
        return (
            <div className="shopping-cart bg-white w-[750px] h-[420px] my-[120px] mx-auto rounded-md flex flex-col justify-cente">
                <h1 className='empty mt-[200px] text-center h-60px border-b border-[#e1e8ee] py-[20px]px-[30px] text-[25px] font-extrabold text-red-500'>Nothing in Shopping Cart</h1>
            </div>
        )
    } else {
        return (
            <div className="shopping-cart bg-white w-[750px] h-[420px] my-[120px] mx-auto rounded-md flex flex-col justify-center">
                <div className="title h-[60px] border-b-2 border-[#e1e8ee] py-[20px] px-[30px] text-[25px] font-extrabold mb-[10px]">Items in Cart</div>
                {cart.map((item)=>{
                    return <CartItem key={item.id} {...item}/>
                })}
                <div className="footer h-[60px] border-t-2 border-[#e1e8ee] py-[20px] px-[30px] text-[25px] font-extrabold flex items-center justify-end">Summary {formatNumber(total)} Baht</div>
            </div>
        )
    }
    
}
export default Cart;