import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Heart from "react-heart";
import { useLocalStorage } from "./storage.js";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ImageList from "@mui/material/ImageList";

const ProductListItem = (props) => {
  const [active, setActive] = useLocalStorage(`${props.keyy}`, false);

  // console.log(props.product.id);
  // {props.product.id}
  //     {props.product.img_src}

  return (
    <>
      <ImageListItem>
        <img
          src={`${props.item.img_src}?w=248&fit=crop&auto=format`}
          srcSet={`${props.item.img_src}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt={props.item.title}
          loading="lazy"
        />
        <div style={{ width: "2rem" }} className="ml-2 mt-2">
          <Heart isActive={!active} onClick={() => setActive(!active)} />
        </div>
        <ImageListItemBar
          title={props.item?.camera?.full_name}
          Camera
          subtitle={<span>{props.item.earth_date}</span>}
          position="below"
          align="right"
          sx={{ mt: -4, mr: 2 }}
        />
      </ImageListItem>
    </>
  );
};

export default ProductListItem;
