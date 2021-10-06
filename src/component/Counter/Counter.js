import React, { useState } from "react";
import "./counter.css";

function Counter() {
    const [count, setcount] = useState(0);
    const [inputVal, setinputVal] = useState(1)


    const changeAdd = (e) => {
     setcount(count + inputVal);
    }

    const chnageSub = (e) => {
        setcount(count - inputVal);
    }



        return (
          <div>
            <h2 data-testid="hedaer">Counter</h2>
            <h2
              data-testid="counter"
              className={`${ count >= 100 ? "green" : ""}${ count < -0 ? "red" : ""}`}
            >
              {count}
            </h2>
            <button data-testid="sub" onClick={chnageSub}>
              -
            </button>
            <label data-testid='label' htmlFor='label'>label</label>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setinputVal(Number(e.target.value))}
              data-testid="input"
              name="input"
            />
            <button data-testid="add" onClick={changeAdd}>
              +
            </button>
          </div>
        );
}

export default Counter
