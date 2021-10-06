import { Grid, Paper } from "@material-ui/core";
import axios from "axios";
// import { subDays } from "date-fns";
import React, { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
  Legend,
  Label,
} from "recharts";

// const data = [];
// for (let num = 7; num >= 0; num--) {
//   data.push({
//     date: subDays(new Date(), num).toISOString().substr(0, 10),
//     value: 1 + Math.random(),
//   });
// }

function Index() {
  const[data,setData] = useState([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users/")
      .then(res => {
      setData(res.data)
      })
      .catch(err => {
        console.log(err);
    })
  }, [])

console.log(data)

  return (
    <>
      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Paper>
            <ResponsiveContainer height={400}>
              <AreaChart
                data={data}
                margin={{ top: 30, bottom: 10, left: 0, right: 30 }}
              >
                <Area
                  dataKey="address.geo.lat"
                  name="Address chart"
                  stroke="#000"
                />
                <XAxis dataKey="address.geo.lat">
                  <Label
                    value="Address Latitude"
                    offset={0}
                    position="insideBottom"
                  />
                </XAxis>
                <YAxis
                  dataKey="address.geo.lng"
                  axisLine={false}
                  tickLine={false}
                  tickCount={8}
                ></YAxis>
                <Tooltip />
                <Legend verticalAlign="top" height={36} />
                <CartesianGrid opacity={0.3} vertical={false} />
              </AreaChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default Index;
