import React, { Suspense } from "react";
const Add = React.lazy(() => import("./Lazy"));

function index() {
  
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Add />
        </Suspense>
      </div>
    );
}

export default index;
