const Photo = ({alt_description,urls:{regular}}) => {
    return (
    <div className="single-photo">
        <img src={regular} alt={alt_description} className='w-full mt-[5px]'/>
    </div>
    )
}
export default Photo;