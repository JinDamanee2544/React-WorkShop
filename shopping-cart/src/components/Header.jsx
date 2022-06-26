import HeaderCart from "./HeaderCart";
const Header = () => {
    return (
        <header className="header bg-purple-500 fixed top-0 left-0 w-full h-20 text-white flex justify-between items-center px-[2%]">
            <h1 className="font-bold text-3xl">JinDamanee's Shop</h1>
            <HeaderCart></HeaderCart>
        </header>
    )
}
export default Header;