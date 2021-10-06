import axios from "axios";
import React, { useEffect, useState } from "react";

const Lazy = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <ul>
        {data ? (
          data.map((item,i) => (
            
              <p key={i}>{item.name}</p>
            
          ))
        ) : (
          <li>'Loading....'</li>
        )}
      </ul>
    </div>
  );
};

export default Lazy;
