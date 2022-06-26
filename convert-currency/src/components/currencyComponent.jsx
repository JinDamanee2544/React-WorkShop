import '../components/currrencyComponent.css'

const CurrencyComponent = (props) =>{
    const {currencyChoice,selectCurrency,changeCurrency,amount,onchangeAmount} = props;

    return(
        <div className="currency">
            <select value={selectCurrency} onChange={changeCurrency}>
                {currencyChoice.map((choice)=>
                    <option key={choice} value={choice}>{choice}</option>
                )}
            </select>
            <input type="number" value={amount} onChange={onchangeAmount}/>
        </div>
    )
}
export default CurrencyComponent;