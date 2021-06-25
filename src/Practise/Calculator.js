import React, { useState } from 'react'

const Calculator = () => {
    const [total , setInput] = useState("");
    const [result , setResult] = useState(0);

    const handler = e => {
        setInput(e.target.value);
    }

    return(
        <div className="container">
           <h1 className="text-center text-primary">Calculator</h1>
           <div className="row text-center">
               <div className="col-lg-3"></div>
               <div className="col-lg-6 text-center">
                   <div className="mt-4">
                       <input type="text" className="form-control"  value={total} onChange={handler} name="input"/>
                       
                   </div>
                   <button className="btn btn-primary mt-3 mb-3" onClick={() => setResult(eval(total))}>Result</button>
                   <h5>Result : {result}</h5>

                   <div className="mt-3">
                       <button className="btn" onClick={() => setInput(total+'1')}>1</button>
                       <button className="btn" onClick={() => setInput(total+'2')}>2</button>
                       <button className="btn" onClick={() => setInput(total+'3')}>3</button>
                    </div>
                   <div className="mt-2">
                       <button className="btn" onClick={() => setInput(total+'4')}>4</button>
                       <button className="btn" onClick={() => setInput(total+'5')}>5</button>
                       <button className="btn" onClick={() => setInput(total+'6')}>6</button>
                    </div>
                   <div className="mt-2">
                       <button className="btn" onClick={() => setInput(total+'7')}>7</button>
                       <button className="btn" onClick={() => setInput(total+'8')}>8</button>
                       <button className="btn" onClick={() => setInput(total+'9')}>9</button>
                    </div>
                   <div className="mt-2">
                       <button className="btn" onClick={() => setInput(total+'+')}>+</button>
                       <button className="btn" onClick={() => setInput(total+'-')}>-</button>
                       <button className="btn" onClick={() => setInput(total+'*')}>*</button>
                    </div>
                   <div className="mt-2">
                       <button className="btn" onClick={() => setInput(total+'/')}>/</button>
                       <button className="btn" onClick={() => setInput(total+'%')}>%</button>
                       <button className="btn btn-danger rounded-pill btn-sm" onClick={() => setInput('')}>clr</button>
                    </div>
                   
               </div>
               <div className="col-lg-3"></div>
           </div>
        </div>
    )
}
export default Calculator;