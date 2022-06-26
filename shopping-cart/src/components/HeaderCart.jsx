import { MyCartContext } from "../management/context";

const HeaderCart = () => {
    const {amount} = MyCartContext();
    return (
        <button className="button border-none text-inherit bg-[#4d1601] text-white py-3 px-12 flex justify-around rounded-3xl items-center font-bold">
            <span>Shopping Cart</span>
            <span className="badge bg-[#b94517] py-1 px-4 rounded-3xl ml-4 font-bold">{amount}</span>
        </button>
    )
}
export default HeaderCart;