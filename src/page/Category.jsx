import React, { useEffect } from "react";

const Widget = React.lazy(() => import("../components/Widget"));

const Category = React.memo(() => {

  

  return (
    <div className="w-full">
      <Widget />
    </div>
  );
});

export default Category;
