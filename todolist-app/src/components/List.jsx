import {BiEdit,BiTrash} from 'react-icons/bi'
const List = ({id,title,removeItem,editItem}) => {
    return (
        <div className="flex justify-between items-center mt-2 px-1 py-4 bg-[#f7f7f7] shadow-md rounded text-xl">
            <p className="">{title}</p>
            <div className="flex space-x-2">
                <BiEdit onClick={(e)=>editItem(id)} className='icon'/>
                <BiTrash onClick={(e)=>removeItem(id)} className='icon'/>
            </div>
        </div>
    )
} 
export default List;