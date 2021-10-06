import { Table, TableBody, TableCell, TableRow } from "@material-ui/core";
import React, { useState } from "react";
import { getAllEmployees } from "./EmployeeService";

function EmployeeTable() {
  const [records] = useState(getAllEmployees());
  return (
    <Table>
      <TableBody>
        {records.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.fullName}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.mobile}</TableCell>
            <TableCell>{item.department}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default EmployeeTable;
