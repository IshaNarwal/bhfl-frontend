import { useState } from "react";
import axios from "axios";

const InputForm = ({ setResponse, setRollNumber }) => {
  const [jsonInput, setJsonInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const parsedData = JSON.parse(jsonInput);
      if (!parsedData.data || !Array.isArray(parsedData.data)) {
        throw new Error("Invalid JSON format. Must contain 'data' array.");
      }

      const res = await axios.post(process.env.REACT_APP_BACKEND_URL, parsedData);
      setResponse(res.data);
      setRollNumber(res.data.roll_number);
    } catch (err) {
      setError(err.message || "Invalid JSON format.");
    }
  };

  return (
    <div className="container">
      <h2>Enter JSON Input:</h2>
      <textarea
        className="input-box"
        rows="4"
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
        placeholder='{"data": ["A", "C", "z"]}'
      ></textarea>
      {error && <p className="error-text">{error}</p>}
      <button onClick={handleSubmit} className="submit-btn">
        Submit
      </button>
    </div>
  );
};

export default InputForm;
