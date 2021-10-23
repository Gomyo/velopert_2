import React, { useState } from "react";
import A from "./Info";

const App = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <A />}
    </div>
  );
};

export default App;
