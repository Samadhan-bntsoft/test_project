import { Grid, Paper } from "@material-ui/core";
import React, { useState } from "react";
import Test2 from "./test/Test2";

export default function Test(){
  const [name, setName] = useState("")
  const nameChange = (e) => {
  setName(e);
}
  
  return (
    <Grid container style={{ display: "flex" }}>
      <Grid item xs={4}></Grid>
      <Grid item xs={3}>
        <Paper component="h3" style={{ padding: "30px" }}>
          Parent component - {name}
          <br />
          <br />
          <Test2 name={name} nameChanges={nameChange} />
        </Paper>
      </Grid>
    </Grid>
  );
}
