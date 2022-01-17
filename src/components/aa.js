/* <div className="col mb-5">
<div className="card h-100">
  <img
    src={props.product.img_src}
    className="card-img-top"
    height="300px"
    width="520px"
    object-fit="contain"
    alt="Hollywood Sign on The Hill"
  />
  <div className="card-body">
    <p className="card-text">
      Date of Capture: {props.product.earth_date}
    </p>

    <div style={{ width: "1rem" }}>
      <Heart isActive={!active} onClick={() => setActive(!active)} />
    </div>
  </div>
</div>
</div> */

// import * as React from "react";
// import Box from "@mui/material/Box";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
// import ImageListItemBar from "@mui/material/ImageListItemBar";
// import InfiniteScroll from "react-infinite-scroll-component";
// import Grid from "@mui/material/Grid";

// import ProductListItem from "./ProductListItem";

// const ProductList = ({ products }) => {

//   return (
//     <>
//       <div className="mr-5 ml-5">

//           <Box>
//             <ImageList variant="masonry" cols={3} gap={18}>
//               {products.map((item) => (
//                 <ProductListItem
//                   item={item}

//                   key={item.id}
//                 />
//               ))}
//             </ImageList>
//           </Box>

//       </div>
//     </>
//   );
// };

// export default ProductList;

// import React, { useState, useEffect } from "react";
// import Heart from "react-heart";
// import { useLocalStorage } from "./storage.js";
// import ImageListItem from "@mui/material/ImageListItem";
// import ImageListItemBar from "@mui/material/ImageListItemBar";
// import ImageList from "@mui/material/ImageList";

// const ProductListItem = (props) => {

//   return (
//     <>

//       <ImageListItem>
//         <img
//           src={`${props.item.img_src}?w=248&fit=crop&auto=format`}
//           srcSet={`${props.item.img_src}?w=248&fit=crop&auto=format&dpr=2 2x`}
//           alt={props.item.title}
//           loading="lazy"
//         />
//         <div style={{ width: "2rem" }} className="ml-2 mt-2">
//           <Heart />
//         </div>
//         <ImageListItemBar
//           subtitle={<span>by: aaaaaaaaaaaa</span>}
//           position="below"
//           align="right"
//         />
//       </ImageListItem>
//     </>
//   );
// };

// export default ProductListItem;
