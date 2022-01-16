import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Heart from "react-heart";
import { useLocalStorage } from "./storage.js";

// Each image result should list at least a title, date
//  of capture (ideally in earth_date) and a button to
//  “like” that image.
// Each image can be “liked”, and a user should be able to undo their “like”

// {product.id}
//       {product.camera.full_name}
//       {product.img_src}
//       {product.earth_date}
//       {product.rover.name}

const ProductListItem = ({ product, keyy }) => {
  //   const [active, setActive] = useState(false);
  const [active, setActive] = useLocalStorage(`${keyy}`, false);

  return (
    <>
      <div class="col mb-5">
        <div class="card h-100">
          <img
            src={product.img_src}
            class="card-img-top"
            height="300px"
            width="520px"
            object-fit="contain"
            alt="Hollywood Sign on The Hill"
          />
          <div class="card-body">
            <h5 class="card-title"> {product.camera.full_name}</h5>
            <p class="card-text">Date of Capture: {product.earth_date}</p>
            <p class="card-text">Rover Name: {product.rover.name}</p>
            <div style={{ width: "1rem" }}>
              <Heart isActive={!active} onClick={() => setActive(!active)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductListItem;
