import light from '../image/light.svg'
import dark from '../image/dark.svg'
import { useContext } from 'react'
import { ThemeContext } from '../App';

const Content = () => {
    const {theme} = useContext(ThemeContext);
    return(
        <main className={theme}>
            <div>
                <h1>JinDamanee Official</h1>
                <p>DarkMode WorkShop</p>
            </div>
            <img src={theme==='dark'?dark:light} alt="light-logo" />
        </main>
    )
}
export default Content;