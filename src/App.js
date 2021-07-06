import React, { useState, useRef } from 'react'
function App() {

  const billRef = useRef();
  const ratingRef = useRef();
  const personRef = useRef()
  const [tip, setTip] = useState()

  // useEffect(() => {
  //   const billAmount = billRef.current.value
  //   console.log(billAmount);
  //   setTip(billAmount)

  // }, [submit])

  // console.log(tip);
  const handleSubmit = (e) => {
    e.preventDefault()
    const billAmount = billRef.current.value;
    const rating = ratingRef.current.value;
    const person = personRef.current.value;
    const total = (billAmount * rating) / (100 * person)
    const finalTip = total.toFixed(2)
    setTip(finalTip)
    console.log(rating);
    console.log(tip);
    console.log(total);
  }

  return (
    <section>
      <div className='div-container'>
        <div className='form-control'>
          <form className='container'>
            <span className='input'>
              <label htmlFor="bill">Enter Bill amount ($..) : </label>

              <input type="text" name='bill' id='bill' placeholder='enter the bill amount ($...)' className='select' ref={billRef} />
            </span>
            <span className='input'>

              <label htmlFor="rating">How was the service (select one): </label>
              <select name="rating" className='select' id="rating" ref={ratingRef} >
                <option value="45">OutStanding</option>
                <option value="35">Good</option>
                <option value="25">Average</option>
                <option value="10">Below Average</option>
                <option value="5">Bad</option>
              </select>
            </span>
            <span className="input">
              <label htmlFor="person">Bill to be shared with </label>
              <input type="number" name="person" className='select' id="person" placeholder='enter no. of person' ref={personRef} />
            </span>
            <button type="submit" onClick={(e) => { handleSubmit(e) }} className='select'>Calculate Tip</button>
            <span>
              {
                tip &&

                <h2>${tip} for each person</h2>
              }
            </span>
          </form>
        </div>
      </div>
    </section>
  );
}

export default App;
