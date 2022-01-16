import React from "react";

import { useState, useEffect } from "react";
import axios from "axios";

import ProductList from "../components/ProductList";
import MyPagination from "../components/MyPagination";
import Header from "../components/Header";

const ProductListingPage = (props) => {
  const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(12);

  const DEMO_KEY = "YEe6wzjuzMq7TGDqAj9uSyNwCxxq2cN53cGKwm29";

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${DEMO_KEY}`
      );
      props.setProducts(res.data.photos);
      // console.log(res.data.photos);
      console.log(props.products);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = props.products.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {/* <Header /> */}
      <ProductList products={props.products} loading={loading} />
      {/* <MyPagination
        postsPerPage={postsPerPage}
        totalPosts={props.products.length}
        paginate={paginate}
      /> */}
    </div>
  );
};

export default ProductListingPage;
