import React from 'react'
import { Button } from "@material-ui/core";


function UseState(props) {
    const { count, increment, incrementj } = props
    return (
      <div>
        <h2>useState</h2>
        <p>{count}</p>

        <Button variant="contained" onClick={increment}>
          Increment
        </Button>
        <Button variant="contained" onClick={incrementj}>
          Increment J
        </Button>
      </div>
    );
}

export default UseState
