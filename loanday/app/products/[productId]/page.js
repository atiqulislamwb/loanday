import React from "react";

const page = ({ params }) => {
  console.log(params.productId);

  return <div>product details page</div>;
};

export default page;
