import React from "react";

const InputField = ({ item, value, onChange }) => (
  <div>
    <input
      type="text"
      value={value}
      name={item}
      placeholder={item}
      onChange={onChange}
      required
    />
  </div>
);

// helped with this: https://stackoverflow.com/questions/65409862/how-to-create-a-reusable-input-field-using-react
export default InputField;
