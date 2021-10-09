import React, {useState} from 'react';
import './App.css'


const App = () => {

  const [input, setInput] = useState('')
  const [todolist,setTodolist] = useState([])

  return (
    <>
    <div className="wrap">
        <h2>代辦事項</h2>
          <form>
            <input type="text" placeholder="請輸入代辦事項"
              value={input}
              onChange={(e)=>{
                setInput(e.target.value)
                console.log(input)
              }}
             
            />
            <button onClick={(e)=>{
              e.preventDefault()
              if(!input){
                alert('請輸入代辦事項')
              }else{
              const newTodolist = [...todolist, input]
              setTodolist(newTodolist)
              setInput('')
              }             
            }} >Add</button>
          </form>
            <ul>
            {todolist.map((v,i)=>{
              return<li key={i} 
              onClick={(e)=>{
                e.target.classList.add('remove')
              }}>{v}</li>
            })}
            </ul>
        </div>
    </>
  );
};


export default App;
