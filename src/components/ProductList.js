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
    // <div>
    //   <main className={classes.content}>
    //     <div className={classes.toolbar} />
    //     <Grid container justify="left" spacing={4}>
    //       {posts.map((post) => (
    //         <Grid key={post._id} item xs={12} sm={6} md={4} lg={3}>
    //           <ProductListItem product={post} />
    //         </Grid>
    //       ))}
    //     </Grid>
    //   </main>
    // </div>
    <>
      <div class="row row-cols-1 row-cols-md-3 g-4 mr-5 ml-5">
        {/* <div class="col"> */}
        {products.map((e, i) => (
          <ProductListItem product={e} key={i} />
        ))}
        {/* </div> */}
      </div>
    </>
  );
};

export default ProductList;
