import React, {useState} from 'react';
import './App.css'

const App = () => {

  const [alerttext, setAlerttext] = useState('')
  const Now = new Date()
  return (
    <>
    <div className="wrap">
      <h5>請輸入生日</h5>    
      <input type="date"
        onChange={(e)=>{
          const birth = new Date(e.target.value)
          const years = (Now-birth)/(24*60*60000*365)
          console.log(years)
          if(years>18){
            // alert('年齡超過18歲')
            setAlerttext('年齡超過18歲')
          }else{
            setAlerttext('年齡小於18歲')
          }
        }}
      />
      {alerttext!=='' &&(<div className="text" >{alerttext}</div> )}
       
    </div>
    </>
  );
};


export default App;
