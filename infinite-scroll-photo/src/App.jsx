import { useEffect, useState } from 'react'
import './App.css'
import Photo from './components/Photo'

function App() {
  const APIKey = 'W6x_-4E-e3luOrWf5mNhRtGVmK9Cen-BJZ0nl31TzCs'
  const [photos,setPhotos] = useState([]);
  const [pages,setPages] = useState(1);
  const [isLoading,setIsLoading] = useState(false);

  const fetchImage=async()=>{
    setIsLoading(true)
    try{
      const APIUrl = `https://api.unsplash.com/photos/?client_id=${APIKey}&page=${pages}`
      const response = await fetch(APIUrl)
      const data = await response.json();
      setPhotos((oldPhotos)=>{
        return [...oldPhotos,...data]
      });
    } catch (err){
      console.log(err);
    }
    setIsLoading(false)
  }
  
  useEffect(()=>{
    fetchImage();
  },[pages])

  useEffect(()=>{
    const event = window.addEventListener('scroll',()=>{
        if(window.innerHeight+window.scrollY>document.body.offsetHeight-500 && !isLoading){
          setPages((oldPage)=>{
            return oldPage+1
          })
        }
    })
    return ()=>window.removeEventListener('scroll',event)
  },[])

  return (
    <main>
      <h1 className='text-center mt-[25px] mb-[15px] text-[40px] tracking-[4px]'>Infinite Scroll Photo | Unsplash API</h1>
      <section className='my-[10px] mx-[20%]'>
        <div className='display-photo'>
           {photos.map((data,idx)=>{
              return <Photo key={idx} {...data}/>
           })}
        </div>
      </section>
    </main>
  )
}

export default App
