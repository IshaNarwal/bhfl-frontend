import { useState, useEffect } from "react";
import InputForm from "./components/InputForm";
import ResponseDisplay from "./components/ResponseDisplay";
import "./styles.css";

function App() {
  const [response, setResponse] = useState(null);
  const [rollNumber, setRollNumber] = useState("");

  useEffect(() => {
    if (rollNumber) {
      document.title = rollNumber;
    }
  }, [rollNumber]);

  return (
    <div className="app-container">
      <h1>MERN Stack Data Processor</h1>
      <InputForm setResponse={setResponse} setRollNumber={setRollNumber} />
      {response && <ResponseDisplay response={response} />}
    </div>
  );
}

export default App;
