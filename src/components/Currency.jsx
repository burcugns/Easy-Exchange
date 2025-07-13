import React, { useState } from 'react'
import '../css/currency.css'
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import axios from 'axios';


let BASE_URL = 'https://api.freecurrencyapi.com/v1/latest';

// Use your own API key from freecurrencyapi here
let API_KEY=''




function Currency() {
    const [amount,setAmount]=useState(0);
    const [fromCurrency,setFromCurrency]= useState('GBP');
    const [toCurrency , setToCurrency]=useState('USD');
    const [result , setResult]=useState(0);


    const exchange = async()=>{
       const response= await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
       const result=(response.data.data[toCurrency] * amount).toFixed(2);
       setResult(result)



    }

  return (
    <div className='currency-div'>
        <div>
            <h3>EASY EXCHANGE</h3>
        </div>
        <div>
            <input value={amount}
            onChange={(e)=>setAmount(e.target.value)}
             type="number" className='amount' />


            <select value={fromCurrency} onChange={(e)=>setFromCurrency(e.target.value)} className='from-currency-option'>
                <option value="GBP" >🇬🇧 GBP</option>
                <option value="AUD">🇦🇺 AUD</option>
                <option value="BGN">🇧🇬 BGN</option>
                <option value="BRL">🇧🇷 BRL</option>
                <option value="CAD">🇨🇦 CAD</option>
                <option value="CHF">🇨🇭 CHF</option>
                <option value="CNY">🇨🇳 CNY</option>
                <option value="CZK">🇨🇿 CZK</option>
                <option value="DKK">🇩🇰 DKK</option>
                <option value="EUR">🇪🇺 EUR</option>
                <option value="HKD">🇭🇰 HKD</option>
                <option value="HRK">🇭🇷 HRK</option>
                <option value="HUF">🇭🇺 HUF</option>
                <option value="IDR">🇮🇩 IDR</option>
                <option value="ILS">🇮🇱 ILS</option>
                <option value="INR">🇮🇳 INR</option>
                <option value="ISK">🇮🇸 ISK</option>
                <option value="JPY">🇯🇵 JPY</option>
                <option value="KRW">🇰🇷 KRW</option>
                <option value="MXN">🇲🇽 MXN</option>
                <option value="MYR">🇲🇾 MYR</option>
                <option value="NOK">🇳🇴 NOK</option>
                <option value="NZD">🇳🇿 NZD</option>
                <option value="PHP">🇵🇭 PHP</option>
                <option value="PLN">🇵🇱 PLN</option>
                <option value="RON">🇷🇴 RON</option>
                <option value="RUB">🇷🇺 RUB</option>
                <option value="SEK">🇸🇪 SEK</option>
                <option value="SGD">🇸🇬 SGD</option>
                <option value="THB">🇹🇭 THB</option>
                <option value="TRY">🇹🇷 TRY</option>
                <option value="USD">🇺🇸 USD</option>
                <option value="ZAR">🇿🇦 ZAR</option>

        
            </select>
            <div><FaArrowRightArrowLeft className="exchange-symbol" /></div>
            

            <input readOnly value={result} onChange={(e)=>setResult(e.target.value)} type="number" className='result' />

            <select  value={toCurrency} onChange={(e)=> setToCurrency(e.target.value)} className='to-currency-option'>
                <option value="USD" >🇺🇸 USD</option>
                <option value="GBP">🇬🇧 GBP</option>
                <option value="AUD">🇦🇺 AUD</option>
                <option value="BGN">🇧🇬 BGN</option>
                <option value="BRL">🇧🇷 BRL</option>
                <option value="CAD">🇨🇦 CAD</option>
                <option value="CHF">🇨🇭 CHF</option>
                <option value="CNY">🇨🇳 CNY</option>
                <option value="CZK">🇨🇿 CZK</option>
                <option value="DKK">🇩🇰 DKK</option>
                <option value="EUR">🇪🇺 EUR</option>
                <option value="HKD">🇭🇰 HKD</option>
                <option value="HRK">🇭🇷 HRK</option>
                <option value="HUF">🇭🇺 HUF</option>
                <option value="IDR">🇮🇩 IDR</option>
                <option value="ILS">🇮🇱 ILS</option>
                <option value="INR">🇮🇳 INR</option>
                <option value="ISK">🇮🇸 ISK</option>
                <option value="JPY">🇯🇵 JPY</option>
                <option value="KRW">🇰🇷 KRW</option>
                <option value="MXN">🇲🇽 MXN</option>
                <option value="MYR">🇲🇾 MYR</option>
                <option value="NOK">🇳🇴 NOK</option>
                <option value="NZD">🇳🇿 NZD</option>
                <option value="PHP">🇵🇭 PHP</option>
                <option value="PLN">🇵🇱 PLN</option>
                <option value="RON">🇷🇴 RON</option>
                <option value="RUB">🇷🇺 RUB</option>
                <option value="SEK">🇸🇪 SEK</option>
                <option value="SGD">🇸🇬 SGD</option>
                <option value="THB">🇹🇭 THB</option>
                <option value="TRY">🇹🇷 TRY</option>
                <option value="ZAR">🇿🇦 ZAR</option>


            </select>


        </div>
        <div>
            <button onClick={exchange} className="btn btn-primary">EXCHANGE</button>
        </div>
        
    </div>
  )
}

export default Currency
