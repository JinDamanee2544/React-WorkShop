import { useState } from 'react'
import data from './data'
import SingleContent from './component/singleContent';
import './App.css'
function App() {
  const [content,setContent] = useState(data);
  return (
    <div>
      <main>
        <div className='container'>
          <h3>Developer Tool 2021</h3>
          <section>
            {content.map((data)=>{
                return <SingleContent key={data.id} {...data}/>
            })}
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
