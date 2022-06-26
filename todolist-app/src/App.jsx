import { useState } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid'
import List from './components/List';
import Alert from './components/alert';
function App() {
  const [name,setName] = useState('');
  const [list,setList] = useState([]);
  const [alert,setAlert] = useState({
    show:false,
    msg:'',
    type:''
  });
  const [checkEditItem,setCheckEditItem] = useState(false);
  const [editID,setEditID] = useState(null)

  const removeItem=(id)=>{
    const newList = list.filter((item)=>item.id!== id)
    setList(newList)
    setAlert({show:true,msg:"Delete Successfully!",type:"error"})
  }
  const editItem=(id)=>{
    setCheckEditItem(true)
    setEditID(id)
    const searchItem = list.find((item)=>(item.id===id))
    setName(searchItem.title)
  }

  const submitData=(e)=>{
    e.preventDefault();
    if(!name){
      // Users doesn't input
      setAlert({
        show:true,
        msg:"Input can't be blank!",
        type:"error"
      })
    } else if (checkEditItem && name){
      // Edit mode
      const result = list.map((item)=>{
        if(item.id===editID){
          return {...item,title:name}
        } else {
          return item;
        }
      })
      
      setList(result);
      setName('')
      setCheckEditItem(false)
      setEditID(null)
      setAlert({show:true,msg:"Edit Successfully",type:"success"})

    } else {
      const newItem = {
        id:uuidv4(),
        title:name
      }
      setList([...list,newItem])
      setName('');
      setAlert({
        show:true,
        msg:"Save Successfully!",
        type:"success"
      })
    }
  }

  return (
    <section className='bg-white p-5 w-[90vw] mx-auto my-32 max-w-[35rem] rounded'>
      <h1 className='text-5xl text-center font-bold pb-4'>ToDoList App</h1>
      {alert.show && <Alert {...alert} setAlert={setAlert} list={list}/>}
      <form action="" className='' onSubmit={submitData}>
        <div className='flex justify-center'>
          <input type="text" className='p-1 text-xl bg-cyan-100 flex-1' 
                 onChange={(e)=>setName(e.target.value)}
                 value={name}
          />
          <button type='submit' className='bg-purple-500 text-white font-extrabold border-transparent text-lg p-1'>
            {checkEditItem?"Edit Data":"Add Data"}
          </button>
        </div>
      </form>
      <section className=''>
        {
          list.map((data,idx)=>{
            return <List key={idx} {...data} removeItem={removeItem} editItem={editItem}/>
          })
        }
      </section>
    </section>
  )
}

export default App
