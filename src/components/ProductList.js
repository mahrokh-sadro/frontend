import React from "react";

import ProductListItem from "./ProductListItem";
import useStyles from "../assets/css/ProductStyles";
import Box from "@mui/material/Box";
import Grid from "@material-ui/core/Grid";

const ProductList = ({ products, loading }) => {
  const classes = useStyles();
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div class="row row-cols-1 row-cols-md-3 g-4 mr-5 ml-5">
        {products.map((e) => (
          <ProductListItem product={e} key={e.id} keyy={e.id} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
