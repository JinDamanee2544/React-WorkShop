import {FaHome,FaUserAlt,FaShoppingCart,FaUserSecret} from 'react-icons/fa' 
const MenuData=[
    {
        title:"Home",
        path:"/",
        icon:<FaHome/>
    },
    {
        title:"Member",
        path:"/member",
        icon:<FaUserAlt/>
    },
    {
        title:"Product",
        path:"/product",
        icon:<FaShoppingCart/>
    },
    {
        title:"Admin",
        path:"/admin",
        icon:<FaUserSecret/>
    }
]
export default MenuData;