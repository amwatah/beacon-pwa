import React, { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }

  return (
    <div className="flex  flex-col items-center">
      <h1 className="text-3xl">The God of Counter Apps</h1>
      <section className="counter border-2 border-primary p-10 rounded-3xl shadow-lg glass hover:scale-[1.2] ">
        {count}
      </section>
      <section className="counter-btns flex gap-2 p-3">
        <button onClick={increase} className="btn  glass flex-1 ">
          INCREASE
        </button>
        <button onClick={reset} className="btn btn-circle glass flex-1">
          RESET
        </button>
        <button onClick={decrease} className="btn glass flex-1">
          DECREASE
        </button>
      </section>
      <div className="footer fixed bottom-0 flex justify-center  ">
        <h1>This app was created by </h1>{" "}
        <a href="https://github.com/amwatah" className=" underline">
          Amwatah
        </a>{" "}
        <h1>using next js </h1>
      </div>
    </div>
  );
};

export default Home;
