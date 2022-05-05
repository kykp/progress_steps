import { useState } from "react";

const dataDB = [
  {
    id: 0,
    active: true,
  },
  {
    id: 1,
    active: false,
  },
  {
    id: 2,
    active: false,
  },
  {
    id: 3,
    active: false,
  },
];

function App() {
  const [data, setData] = useState(dataDB);
  const [count, setCount] = useState(0);

  const onHandleWidth = () => {
    if (count === 1) {
      return { width: "35%" };
    }
    if (count === 2) {
      return { width: "68%" };
    }
    if (count === 3) {
      return { width: "99%" };
    }
  };

  const onHandlePlus = () => {
    setCount(count + 1);
    data.map((el) => {
      if (el.id === count + 1) {
        el.active = true;
      }
      return el;
    });
  };
  const onHandleMinus = () => {
    setCount(count - 1);
    data.map((el) => {
      if (count === 3 && el.id === 3) {
        el.active = false;
      }
      if (count === 2 && el.id === 2) {
        el.active = false;
      }
      if (count === 1 && el.id === 1) {
        el.active = false;
      }
      return el;
    });
  };

  return (
    <div className="container">
      <div className="progress-container">
        <div style={onHandleWidth()} className="progress" id="progress"></div>
        {data.map((el) => {
          return (
            <div key={el.id} className={el.active ? "circle active" : "circle"}>
              {el.id}
            </div>
          );
        })}
      </div>

      <button
        className="btn"
        id="prev"
        disabled={!count}
        onClick={onHandleMinus}
      >
        Prev
      </button>
      <button
        disabled={count === 3}
        className="btn"
        id="next"
        onClick={onHandlePlus}
      >
        Next
      </button>
    </div>
  );
}

export default App;
