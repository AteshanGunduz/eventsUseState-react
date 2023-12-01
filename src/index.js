import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

function App() {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (value === "shazam") {
      alert("You shall pass!");
    }
  }, [value]);

  const find = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="App">
      <h2>What is the secret word?</h2>
      <input type="text" placeholder="secret word" onInput={find} />
      <p>
        İpucu: <strong>shazam</strong>
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
