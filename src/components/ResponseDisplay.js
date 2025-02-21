import { useState, useEffect } from "react";
import Select from "react-select";

const ResponseDisplay = ({ response }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [filteredData, setFilteredData] = useState({});

  const options = [
    { value: "alphabets", label: "Alphabets" },
    { value: "numbers", label: "Numbers" },
    { value: "highest_alphabet", label: "Highest Alphabet" },
  ];

  useEffect(() => {
    const newData = {};
    selectedOptions.forEach((opt) => {
      newData[opt.value] = response[opt.value] || [];
    });
    setFilteredData(newData);
  }, [selectedOptions, response]);

  return (
    <div className="container">
      <h2>Select Data to Display:</h2>
      <Select
        isMulti
        options={options}
        onChange={setSelectedOptions}
        className="dropdown"
      />
      <div className="response-box">
        {Object.keys(filteredData).length > 0 ? (
          Object.entries(filteredData).map(([key, value]) => (
            <p key={key}>
              <strong>{key}:</strong> {value.length > 0 ? value.join(", ") : "None"}
            </p>
          ))
        ) : (
          <p>Select an option to display data.</p>
        )}
      </div>
    </div>
  );
};

export default ResponseDisplay;
