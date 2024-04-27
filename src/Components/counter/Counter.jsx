import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [range, setRange] = useState(1);
  const [count, setCount] = useState(0);

  console.log(range, count);

  const handleRangeChange = (e) => {
    setRange(Number(e.target.value));
  };

  const handleCountChange = (e) => {
    var count = Number(e.target.value);
    if (!isNaN(count)) {
      setCount(count);
    } else {
      return;
    }
  };

  const handleAdd = () => {
    setCount((currCount) => currCount + range);
  };

  const handleSub = () => {
    setCount((currCount) => currCount - range);
  };

  var date = new Date();
  date.setDate(date.getDate() + count);
  date = date.toDateString();

  return (
    <main className="counter">
      <section className="range">
        <p className="step">Step</p>
        <input
          type="range"
          min="1"
          max="10"
          value={range}
          onChange={handleRangeChange}
        />
        <p className="range_no">{range}</p>
      </section>
      <section className="count">
        <button className="sub" onClick={handleSub}>
          ➖
        </button>
        <input type="text" value={count} onChange={handleCountChange} />
        <button className="add" onClick={handleAdd}>
          ➕
        </button>
      </section>
      {count === 0 && <p>{`Today is ${date}`}</p>}
      {count > 0 && <p>{`${count} days after today is ${date}`}</p>}
      {count < 0 && <p>{`${Math.abs(count)} days ago is ${date}`}</p>}
    </main>
  );
};

export default Counter;
