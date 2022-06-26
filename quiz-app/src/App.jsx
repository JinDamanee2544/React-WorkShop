import  Menu from "./components/menu"
import  Quiz  from "./components/quiz"
import  Score  from "./components/score"
import './App.css'
import {useState, createContext} from 'react'

export const DataContext = createContext();

function App() {
  const [appState,setAppState] = useState('menu');
  const [score,setScore] =  useState(0);
  return (
    <DataContext.Provider value={{appState,setAppState,score,setScore}}>
      <div className="App">
      <h1>Web Development Quiz</h1>
      {appState=== 'menu' && <Menu/>}
      {appState=== 'quiz' && <Quiz/>}
      {appState=== 'score' && <Score/>}
    </div>
    </DataContext.Provider>
  )
}
export default App
