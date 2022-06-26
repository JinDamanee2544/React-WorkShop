const Food = ({foodName,image_url}) => {
    return (
        <div className="w-[300px] h-[350px] my-[20px] mx-[15px] bg-[#333]">
            <h2 className="text-center text-white font-[1.3em]">{foodName}</h2>
            <img src={image_url} alt={foodName} className='w-full h-full object-cover'/>
        </div>
    )
}
export default Food;