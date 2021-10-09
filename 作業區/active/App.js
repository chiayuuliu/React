// export default App
import React from 'react';
import './App.css'

const Title = ['首頁', '關於我們' ,'產品']
const App = () => {

  return (
    <>
      <ul>
        {Title.map((v,i)=>{
          return <li key={i}>
          <a
          onClick={(e)=>{
            e.target.classList.toggle('active')
          }}>{v}</a>
          </li>
        })}
      </ul>
    </>
  );
};


export default App;
