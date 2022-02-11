import React from "react";
import TextField from "../../components/TextField";
import { InputKeyboardEvent } from "../../types";
import { destructureValue } from "../../utils/form-utils";

const Home = () => {
  const [input, setInput] = React.useState("");

  const handleChange = (e: InputKeyboardEvent) => {
    e.preventDefault();
    setInput(destructureValue(e.target))
  };

  return (
    <div>
      <h1>Home</h1>
      <TextField id="home" name="home" value={input} label="Home" onChange={handleChange} />
    </div>
  );
};
export default Home;
