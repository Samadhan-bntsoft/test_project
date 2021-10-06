import { Button, Grid, Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";

const Formtest = () => {
  const [valueChange, setValueChange] = useState("");
  const [valueSubmit, setValueSubmit] = useState("");

  const handleChange = (event) => setValueChange(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    setValueSubmit(event.target.text1.value);
  };

  return (
    <Grid>
      <Paper>
        <h1> React Hooks Form Testing</h1>

        <form data-testid="form" onSubmit={handleSubmit}>
          <label htmlFor="text1">Input Text:</label>
          <TextField
            label="Input Text"
            variant="outlined"
            id="text1"
            onChange={handleChange}
            type="text"
          />
          
          <Button type="submit" variant="contained" >
            Submit
          </Button>
        </form>
        <h3>React State:</h3>
        <p>Change: {valueChange}</p>
        <p>Submit Value: {valueSubmit}</p>
      </Paper>
    </Grid>
  );
};

export default Formtest;
