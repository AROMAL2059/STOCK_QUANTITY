import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import "./App.css"

const App = () => {
  const [maxiloss, setMaxiloss] = useState('');
  const [totaltrade, setTotaltrade] = useState('');
  const [lossptrade, setLossptrade] = useState(0);
  const [entry,setEntry]=useState('');
  const [stoploss, setStoploss] = useState('');
  const [totalquantity, setTotalquantity] = useState(0);

  function handlemaxilosschange(e) {
    setMaxiloss(e.target.value);

  }
  function handletotaltradechange(e) {
    setTotaltrade(e.target.value);

  }
  function calculate() {
    const result = Math.floor(maxiloss / totaltrade);
    const rupeestop=entry-stoploss;
    const result2=Math.abs(Math.floor(result/rupeestop));
    setLossptrade(result);
    setTotalquantity(result2);
    console.log(result,rupeestop,result2)

  }

  function handleentrychange(e) {
    setEntry(e.target.value);

  }
  function handlestoplosschange(e) {
    setStoploss(e.target.value);

  }
 
  useEffect(() => {
    calculate();
  }, [totaltrade, maxiloss,entry,stoploss])


  return (
    <div>
      <div className='asahole'>
        <div>
        <label>Total Capital</label>
        <input type='text' placeholder='0'></input>
        <label>Total Number Of Trades</label>
        <input type='text' placeholder='0' value={totaltrade} onChange={handletotaltradechange}></input>
        <label>Maxium loss</label>
        <input type='text' placeholder='0' value={maxiloss} onChange={handlemaxilosschange}></input>
        <div className='losspertrade'>
          <label>Loss/Trade</label>
          <span>{lossptrade}</span>

        </div>
        </div>

        <div>
          <label>ENTRY</label>
          <input type='text' placeholder='0' value={entry} onChange={handleentrychange}></input>
          <label>STOP lOSS</label>
          <input type='text' placeholder='0' value={stoploss} onChange={handlestoplosschange}></input>
          <div className='losspertrade'>
            <label>TOTAL QUANTITY</label>
            <span>{totalquantity}</span>

          </div>
        </div>
        </div>


    </div>
  )
}

export default App