import React, { useEffect, useState } from 'react';
import Converter from './Converter';
import './Display.css';




function Display() {
  // login/logout details
  const [state, setstate] = useState('');
    const [status, setstatus] = useState(false);

    

    // Currency
  const [Allcurrency, setAllcurrency] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [Rate, setRate] = useState()
  const [amount, setAmount] = useState(1)
  const [amountStatus, setAmountStatus] = useState(true);

  let toAmount, fromAmount
  if (amountStatus) {
    fromAmount = amount
    toAmount = amount * Rate
  } else {
    toAmount = amount
    fromAmount = amount / Rate
  }

  useEffect(() => {
    window.fetch('https://api.exchangeratesapi.io/latest')
      .then(res => res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[0]
        setAllcurrency([data.base, ...Object.keys(data.rates)])
        setFromCurrency(data.base)
        setToCurrency(firstCurrency);
        setRate(data.rates[firstCurrency])
      
        
        
      })
  }, [])

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`https://api.exchangeratesapi.io/latest?base=${fromCurrency}&symbols=${toCurrency}`)
        .then(res => res.json())
        .then(data => setRate(data.rates[toCurrency]))
    }
  }, [fromCurrency, toCurrency])

  function handleFromAmountChange(e) {
    setAmount(e.target.value)
    setAmountStatus(true)
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value)
    setAmountStatus(false)
  }


  // Login/Loggout

  const verifyUser = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    let userStatus = JSON.parse(localStorage.getItem("Status"))
    setstate(user.name[0])
    setstatus(userStatus)

    if(!userStatus){
        alert('Please Login')
        return window.location.assign('/login')
    }
}

useEffect(() => {
   verifyUser();
}, [status]);

const loggingout=()=>{
  JSON.stringify(localStorage.setItem("Status",false));
  setstatus(false)}
  // window.location.assign('/login')



  return (

<div>
  
  <div className="header">
    {/* <h3> { 
           status ? `WELCOME ${state.toUpperCase()}`   : `Please Login`
          }</h3> */}

<h4> {  status ? <button onClick={loggingout}>Logout</button>   : `Please Login`} </h4></div>

    <div id="main-container">
      <h1 class="heading">Conversion</h1>
      <Converter
      className="first-select"
        currencyOptions={Allcurrency}
        selectedCurrency={fromCurrency}
        onChangeCurrency={e => setFromCurrency(e.target.value)}
        onChangeAmount={handleFromAmountChange}
        amount={fromAmount}
      />
      <div className="sub-container">=</div>
      <Converter
      className="second-select"
        currencyOptions={Allcurrency}
        selectedCurrency={toCurrency}
        onChangeCurrency={e => setToCurrency(e.target.value)}
        onChangeAmount={handleToAmountChange}
        amount={toAmount}
      />
    </div>
    </div>
  );
}

export default Display;