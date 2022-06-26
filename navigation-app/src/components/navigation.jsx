import {Link} from 'react-router-dom'
import {FaBars,FaWindowClose} from 'react-icons/fa' 
import { useState } from 'react'
import './navigation.css'
import MenuData from '../data/MenuData'
const Navigation=()=>{
    const [showMenu,setShowMenu] = useState(false);
    const toggleMenu=()=>{
        setShowMenu(!showMenu)
    }
    return(
        <aside>
            <div className="navbar">
                <div className="navbar-toggle">
                    <Link to='#' className='menubar'>
                        <FaBars onClick={toggleMenu}/>
                    </Link>
                </div>
            </div>
            <nav className={showMenu?'nav-menu active':'nav-menu'}>
                <ul className='nav-menu-item' onClick={toggleMenu}>
                    <li className='toggle-icon'>
                        <Link to="#"> <FaWindowClose/></Link>
                    </li>
                    {MenuData.map((menu,idx)=>{
                        return(
                            <li className='menu-text' key={idx}>
                                <Link to={menu.path}>{menu.icon}<span>{menu.title}</span></Link>
                            </li>
                        )
                    })}                       
                </ul>
            </nav>
        </aside>
    )
}
export default Navigation;