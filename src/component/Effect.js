import React, { useEffect, useState } from "react";

function Effect() {
  const [i, setI] = useState(1);
  const [name, setName] = useState();

  useEffect(() => {
    document.title = i;
    return () => {
      console.log("return fun");
    };
  }, [i]);

  const changeI = () => {
    setI(i + 1);
  };

  const changeName = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h2>useEffect</h2>
      {i}
      <br />
      <button onClick={changeI}>count +</button>
      <input name='name' type="text" value={name} onChange={changeName} placeholder="name" />
    </div>
  );
}

export default Effect;
