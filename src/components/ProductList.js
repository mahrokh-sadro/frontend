import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import InfiniteScroll from "react-infinite-scroll-component";
import Grid from "@mui/material/Grid";

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
  // {product.id}
  //       {product.camera.full_name}
  //       {product.img_src}
  //       {product.earth_date}
  //       {product.rover.name}
  console.log(products.length + "    in list");
  return (
    <>
      <div className="mr-5 ml-5">
        <Box>
          <ImageList variant="masonry" cols={3} gap={18}>
            {products.map((item) => (
              <ProductListItem item={item} keyy={item.img_src} key={item.id} />
            ))}
          </ImageList>
        </Box>
      </div>
    </>
  );
};

export default ProductList;
