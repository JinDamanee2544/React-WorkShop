const Food = ({name,image_url}) => {
    return (
        <div className="card m-8 p-8 w-[250px] h-[250px] bg-white cursor-pointer rounded-2xl">
            <div className="card-body">
                <div className="card-image flex justify-center">
                    <img className="w-full h-full object-cover rounded-[50%]" src={image_url} alt={name} />
                </div>
            <div className="title text-[1.3rem] font-extrabold text-center m-6">{name}</div>
            </div>
        </div>
    )
}   
export default Food;