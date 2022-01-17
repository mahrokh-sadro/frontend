import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import InfiniteScroll from "react-infinite-scroll-component";
import Grid from "@mui/material/Grid";
import { imageListItemClasses } from "@mui/material/ImageListItem";
import { useTheme } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import ProductListItem from "./ProductListItem";

const ProductList = ({ products, loading }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(min-width:600px)");

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

  return (
    <>
      <div className="mr-5 ml-5">
        <Box>
          {/* cols={{ xs: 2, sm: 3, md: 3, lg: 6 }} */}
          {/* <ImageList variant="masonry" cols={3} gap={18}> */}
          <ImageList
            variant="masonry"
            cols={isMobile ? 3 : 1}
            // cols={{ xs: 2, sm: 3, md: 3, lg: 6 }}
            gap={18}
          >
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
