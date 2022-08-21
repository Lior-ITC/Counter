import React, { useState } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

function App() {
  const defaultState = () =>[
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]
  const [counters, setCounter] = useState(defaultState)

  const handleIncrement = (counter) => {
    const tempCounters = [...counters];
    const index = counters.indexOf(counter);
    tempCounters[index] = { ...tempCounters[index] };
    tempCounters[index].value++;
    setCounter(tempCounters );
  };

  const handleDecrement = (counter) => {
    const tempCounters = [...counters];
    const index = counters.indexOf(counter);
    tempCounters[index] = { ...tempCounters[index] };
    tempCounters[index].value--;
    setCounter(tempCounters );
  };

  const handleReset = () => {
    const tempCounters = counters.map((c) => {
      c.value = 0;
      return c;
    });
    setCounter(tempCounters);
  };

  const handleDelete = (counterId) => {
    console.log(counterId);
    const tempCounters = counters.filter((c) => c.id !== counterId);
    setCounter(tempCounters);
  };

  const handleRestart = () => {
    setCounter(defaultState())
  };

  return (
    <div className="main__wrap">
      <main className="container">
        <div className="card__box">
          <NavBar
            totalCounters={
              counters.filter((c) => c.value > 0).length
            }
          />
          <Counters
            counters={counters}
            onReset={handleReset}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onDelete={handleDelete}
            onRestart={handleRestart}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
