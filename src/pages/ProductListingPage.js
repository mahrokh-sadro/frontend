import React from "react";

import { useState, useEffect } from "react";
import axios from "axios";

import ProductList from "../components/ProductList";
import Header from "../components/Header";

const ProductListingPage = ({ products, setProducts }) => {
  const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(12);

  const DEMO_KEY = "YEe6wzjuzMq7TGDqAj9uSyNwCxxq2cN53cGKwm29";

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     setLoading(true);
  //     const res = await axios.get(
  //       `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${DEMO_KEY}`
  //     );
  //     setProducts(res.data.photos);
  //     // console.log("---->" + res.data.photos.length);
  //     console.log(products.length);
  //     setLoading(false);
  //   };

  //   fetchPosts();
  // }, []);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${DEMO_KEY}`
    )
      .then((response) => response.json())
      .then((json) => {
        //We updated the data returned from the Backed with the resort state
        setProducts(json.photos);
        setLoading(false);
        console.log(products + " in page");
        console.log(products.length + " in page");
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  }, []);

  return (
    <div>
      <Header />
      <ProductList products={products} loading={loading} />
    </div>
  );
};

export default ProductListingPage;
