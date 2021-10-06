import React, { useState, useEffect } from "react";
import axios from "axios";

function Promise() {
  const [title, setTitle] = useState();
  const [title1, setTitle1] = useState();

  const fetchData = async () => {
    const response = await axios.get(
      "http://jsonplaceholder.typicode.com/todos/11"
    );
    const res = await response.data;
    setTitle1(res.title);
  };

    const fetchPromise = async => {
        const fetch = axios.get("http://jsonplaceholder.typicode.com/todos/1");
        fetch.then(res => {  setTitle(res.data.title) });
        fetch.catch(err => {  console.log(err) });
  }

    useEffect(() => {
        fetchPromise();
    fetchData();
  }, []);

  return (
    <div>
      <h2>Promise / Async / Await </h2>
          title : {title}
          <br/>
      title : {title1}
    </div>
  );
}

export default Promise;
