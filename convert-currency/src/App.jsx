import { useEffect, useState } from 'react'
import CurrencyComponent from './components/currencyComponent'
import money from './img/money.png'

function App() {
  const [currencyChoice,setCurrencyChoice] = useState([])
  const [fromCurrency,setFromCurrency] = useState('USD')
  const [toCurrency,setToCurrency] = useState('THB')
  const [amount,setAmount] = useState(1)
  const [exchangeRate,setExchangeRate] = useState(0);

  const [checkFromCurrency,setCheckFromCurrency] = useState(true) 
  let fromAmount,toAmount

  if(checkFromCurrency){
    fromAmount = amount;
    toAmount = (amount*exchangeRate).toFixed(2)
  } else {
    toAmount = amount;
    fromAmount = (amount/exchangeRate).toFixed(2)
  }

  useEffect(()=>{
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
    fetch(url)
      .then(res=>res.json())
      .then(data=>{
        setCurrencyChoice([...Object.keys(data.rates)])
        setExchangeRate(data.rates[toCurrency])
      })
  },[fromCurrency,toCurrency])

  const amountFromCurrency = (e) =>{
    setAmount(e.target.value)
    setCheckFromCurrency(true)
  }
  const amountToCurrency = (e) =>{
    setAmount(e.target.value)
    setCheckFromCurrency(false)
  }

  return (
    <div>
      <img src={money} alt="logo" className='money-img'/>
      <h1>Currency Converter</h1>
      <div className='container'>
        <CurrencyComponent  
          currencyChoice={currencyChoice} 
          selectCurrency={fromCurrency}
          changeCurrency={e=>setFromCurrency(e.target.value)}
          amount={fromAmount}
          onchangeAmount={amountFromCurrency}
        />
        <div className="equal">=</div>
        <CurrencyComponent 
          currencyChoice={currencyChoice} 
          selectCurrency={toCurrency}
          changeCurrency={e=>setToCurrency(e.target.value)}
          amount={toAmount}
          onchangeAmount={amountToCurrency}
        />
      </div>
    </div>
  )
}

export default App
