import React, { useEffect } from "react";
let i = 0;

function Memo(props) {
  useEffect(() => {
    i++;
  });

  return <div>{props.msg } component count : {props.vl ? props.vl : i}</div>;
}

export default Memo;
