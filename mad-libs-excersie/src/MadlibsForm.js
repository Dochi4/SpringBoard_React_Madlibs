import React, { useState } from "react";
import InputField from "./InputField";
import MadlibText from "./MadlibText";

function MadlibsForm() {
  const formInitial = {
    noun: "",
    noun2: "",
    adjective: "",
    color: "",
  };
  const resultInitial = "";
  const [formData, setFormData] = useState(formInitial);
  const [result, setResult] = useState(resultInitial);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(formData);
    setFormData(formInitial);
  };

  const handleReset = () => {
    setResult(resultInitial);
  };

  return (
    <div>
      {result === resultInitial ? (
        <form onSubmit={handleSubmit}>
          <div>
            <InputField
              item="noun"
              value={formData.noun}
              onChange={handleChange}
            />
            <InputField
              item="noun2"
              value={formData.noun2}
              onChange={handleChange}
            />
            <InputField
              item="adjective"
              value={formData.adjective}
              onChange={handleChange}
            />
            <InputField
              item="color"
              value={formData.color}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Get Story</button>
        </form>
      ) : (
        <div>
          <MadlibText result={result} />
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </div>
  );
}

export default MadlibsForm;

//used to help make:
//  https://www.geeksforgeeks.org/react-onsubmit-event/
// https://medium.com/@amitsharma_24072/handling-multiple-inputs-in-reactjs-best-practices-for-react-js-input-forms-9b973f4beb7e
