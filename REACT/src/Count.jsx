import { useState, useEffect } from "react";
import UserContext from "./UserContext.jsx";
import Parent from "./Parent.jsx";
import "./Count.css";

function Count() {
  const [count, setCount] = useState(0);
  const [mobile, BuyMobile] = useState(false);
  const [lunch, finishLunch] = useState("");

  useEffect(() => {
    document.title = `Count : ${count}`;
  }, [count]);

  return (
    <>
      <div>
        <h1 className="count">Count</h1>
        <div className="counting">{count}</div>
        <button onDoubleClick={() => setCount(count + 1)}>+1</button>
        <button onDoubleClick={() => setCount(count - 1)}>-1</button>
        <h2>Phone: {mobile ? "Android" : "iPhone"}</h2>
        <button onClick={() => BuyMobile(!mobile)}>
          Change
        </button>
        <h2>I ate my {lunch} for lunch</h2>
        <input
          type="text"
          placeholder="dal rice"
          value={lunch}
          onChange={(e) => finishLunch(e.target.value)}
        />
      </div>

      <UserContext.Provider value="Sari">
        <Parent />
      </UserContext.Provider>
    </>
  );
}

export default Count;