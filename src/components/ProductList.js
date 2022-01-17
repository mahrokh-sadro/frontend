import React from "react";

import ProductListItem from "./ProductListItem";

const ProductList = ({ products, loading }) => {
  if (loading) {
    // return <h2>Loading...</h2>;
    return (
      <div class="text-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  console.log(products.length + "    in list");
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4 mr-5 ml-5">
        {products.map((e, i) => (
          <ProductListItem product={e} key={i} keyy={e.id} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
