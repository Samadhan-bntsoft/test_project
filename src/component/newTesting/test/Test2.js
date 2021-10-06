import { TextField } from '@material-ui/core';
import React from 'react'

function Test2(props) {
    return (
      <div>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          value={props.name}
          onChange={(e) => {
          props.nameChanges(e.target.value);
        }}
        />
        <br />
        <br />
        Child component - {props.name}
      </div>
    );
}

export default Test2
