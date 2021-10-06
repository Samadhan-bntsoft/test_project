import { Button, Grid, makeStyles, Paper, TextField } from "@material-ui/core";
import React, { useEffect, useState, useContext } from "react";
import { ContextDa } from "../App";

const useStyles = makeStyles((theme) => ({
  m3: {
    margin: theme.spacing(3),
    padding: theme.spacing(3),
  },
  mAuto: {
    margin: "auto",
  },
  mclear: {
    margin: "auto",
  },
  mTop: {
    marginTop: theme.spacing(4),
  },
}));

function TestingHome() {
  const classes = useStyles();
const datas = useContext(ContextDa);


  const [timer, setTimer] = useState(0);
  const [val, setVal] = useState(0);
  const [status, setStatus] = useState(false);
      
  const resetTimer = () => {
    setTimer(0);
    setVal(0);
    setStatus(false);
  };

  const handleChange = (e) => {
    setVal(e.target.value);
    setTimer(Number(e.target.value));
  };

  useEffect(() => {
    if (status) {
      var timerID = setInterval(() => {
        setTimer(timer + 1);
      }, 1000);
    }
    return () => {
      clearInterval(timerID);
    };
  }, [status, timer]);


  return (
    <div>
      <Grid container style={{ display: "flex" }}>
        <Grid item className={classes.mAuto}>
          <Paper component="h2" className={classes.m3}>
            Home Testing
          <br/>
            {datas.work}
          </Paper>
        </Grid>

        <Paper className={classes.m3}>
          <Grid xs={12}>
            <TextField
              variant="outlined"
              label="Timer "
              name="time"
              value={val}
              onChange={handleChange}
              // error={errors.fullName ? true : false}
              // helperText={errors.fullName}
            />
          </Grid>
          <Grid className={classes.mclear}>
            <Grid component="h3" className={classes.m3}>
              Timer : {timer}
            </Grid>
          </Grid>
          <Grid xs={12} className={classes.mTop}>
            <Button
              variant="contained"
              color="primary"
              size="medium"
              onClick={() => setStatus(true)}
            >
              Start
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="medium"
              onClick={() => setStatus(false)}
            >
              Pause
            </Button>
            <Button
              variant="contained"
              color="default"
              size="medium"
              onClick={resetTimer}
            >
              Reset
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

export default TestingHome;
