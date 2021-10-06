import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { insertEmployee } from "./EmployeeService";
import EmployeeTable from "./EmployeeTable";
const useStyle = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
  pageContainer: {
    backgroundColor: theme.palette.common.white,
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  flexStart: {
    textAlign: "left",
  },
  m3: {
      margin: theme.spacing(3),
  },
  label: {
    textTransform:'none'
  }
}));

const initialState = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};

const options = [
  { id: 1, label: "Development" },
  { id: 2, label: "Marketing" },
  { id: 3, label: "Testing" },
];

export default function MaterialUiComponent() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const classes = useStyle();

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

 const handleChangeCheckbox = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.checked,
    });
 };

  const validate = () => {
    let temp = {}
    temp.fullName = values.fullName ? '' : 'This field is required'
    temp.email = (/$^|.+@.+..+/).test(values.email) ? '' : 'Email is not valid'
    temp.mobile = values.mobile.length > 9 ? '' : 'Minimum 10 numbers required'
    temp.departmentId = values.departmentId.length !== 0 ? '' : 'This field is required'
    setErrors({
      ...temp
    })

    return Object.values(temp).every(x => x === '');
  }

  const handleSubmit = e => {
    e.preventDefault();
    setErrors({});
    if (validate()) {
      insertEmployee(values);
      resetForm();
    }
  }
  const resetForm = () => {
    setValues(initialState);
    setErrors({})
  }

  return (
    <Grid component="div" className={classes.pageContainer}>
      <form className={classes.root} onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              label="fullName"
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
              error={errors.fullName ? true : false}
              helperText={errors.fullName}
            />
            <TextField
              variant="outlined"
              label="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email}
            />
            <TextField
              variant="outlined"
              label="mobile"
              name="mobile"
              value={values.mobile}
              onChange={handleChange}
              error={errors.mobile ? true : false}
              helperText={errors.mobile}
            />
            <TextField
              variant="outlined"
              label="city"
              name="city"
              value={values.city}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl>
              <FormLabel className={classes.flexStart}>Gender</FormLabel>
              <RadioGroup
                row
                name="gender"
                value={values.gender}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="female"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="other"
                />
              </RadioGroup>
            </FormControl>
            <FormControl
              variant="outlined"
              error={errors.departmentId ? true : false}
            >
              <InputLabel className={classes.flexStart}>Select</InputLabel>
              <Select
                label="select"
                name="departmentId"
                value={values.departmentId}
                onChange={handleChange}
                error={errors.departmentId ? true : false}
                helperText={errors.departmentId}
              >
                <MenuItem value="none">None</MenuItem>
                {options.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>{errors.departmentId}</FormHelperText>
            </FormControl>
            <TextField
              variant="outlined"
              name="hiredate"
              label="Hire date"
              type="date"
              defaultValue="2017-05-24"
              // className={classes.textField}
            />
            <FormControl>
              <FormControlLabel
                label="Permanent Employee"
                control={
                  <Checkbox
                    name="isPermanent"
                    color="primary"
                    checked={values.isPermanent}
                    onChange={handleChangeCheckbox}
                  />
                }
              />
            </FormControl>
            {/* </Grid>
          <Grid item xs={12}> */}
            <Button
              classes={{ root: classes.m3, label: classes.label }}
              type="submit"
              variant="contained"
              color="primary"
              size="medium"
            >
              Submit
            </Button>
            <Button
              classes={{ root: classes.m3, label: classes.label }}
              variant="contained"
              color="default"
              size="medium"
              onClick={resetForm}
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
      <EmployeeTable />
    </Grid>
  );
}
