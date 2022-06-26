const Dropdown = ({changeFoodData}) => {
    return (
        <nav className="w-screen h-[60px] p-[10px] bg-[#383838] flex items-center justify-between">
            <h2 className="text-white">Dynamic Dropdown</h2>
            <select className=" p-[5px] outline-none text-[1.2em] w-[320px] rounded-md" 
             onChange={changeFoodData}>
                <option value="เมนูทั้งหมด">เมนูทั้งหมด</option>
                <option value="ผัด-ทอด">ผัด-ทอด</option>
                <option value="แกง-ต้มยำ">แกง-ต้มยำ</option>
                <option value="เครื่องดื่ม">เครื่องดื่ม</option>
                <option value="สเต็ก">สเต็ก</option>
            </select>
        </nav>
    )
}
export default Dropdown;