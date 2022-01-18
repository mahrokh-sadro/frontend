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
  const isSmall = useMediaQuery("(min-width:750)");
  const isMedium = useMediaQuery("(min-width:900px)");

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

  return (
    <>
      <div className="mr-5 ml-5">
        <Box>
          <ImageList
            variant="masonry"
            cols={isSmall ? 2 : isMedium ? 3 : 1}
            gap={18}
          >
            {products.map((item) => (
              <ProductListItem item={item} keyy={item.id} key={item.id} />
            ))}
          </ImageList>
        </Box>
      </div>
    </>
  );
};

export default ProductList;
