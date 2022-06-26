import './App.css'
import Navigation from './components/navigation'
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './pages/home'
import Member from './pages/member'
import Product from './pages/product'
import Admin from './pages/admin'
function App() {

  return (
    <div>
      <Router>
        <Navigation/>
        <Switch>
          <Route path='/'         component={Home}  exact/>
          <Route path='/member'   component={Member} exact />
          <Route path='/product'  component={Product} exact/>
          <Route path='/admin'    component={Admin} exact/>
        </Switch>
      </Router>
    </div>
    
  )
}

export default App
