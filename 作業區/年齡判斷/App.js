import React, {useState} from 'react';
import './App.css'

const App = () => {

  const [alerttext, setAlerttext] = useState('')
  const [yearsold, setYearsold] = useState('')
  const Now = new Date()
  return (
    <>
    <div className="wrap">
      <h5>請輸入生日</h5>    
      <input type="date"
        onChange={(e)=>{
          setAlerttext('')
          const birth = new Date(e.target.value)
          const years = (Now-birth)/(24*60*60000*365)
          setYearsold(years)
        }}
      />
      <button
      onClick={()=>{
        console.log(yearsold)
        if(!yearsold){
          alert('請輸入生日')
          return
        }if(yearsold>18){
            setAlerttext('年齡超過18歲')
          }else{
            setAlerttext('年齡小於18歲')
          }
        }}>確認</button>
      {alerttext!=='' &&(<div className="text" >{alerttext}</div> )}
       
    </div>
    </>
  );
};


export default App;
