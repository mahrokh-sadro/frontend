import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";
import ProductDescriptionPage from "../pages/ProductDescriptionPage";

const App = () => {
  const [products, setProducts] = useState([{}]);

  return (
    <Router>
      <Switch>
        {/* <Route exact path="/">
          <HomePage products={products} setProducts={setProducts} />
        </Route> */}

        <Route exact path="/">
          <ProductListingPage products={products} setProducts={setProducts} />
        </Route>

        {/*  <Route exact path="/product/details/:id">
          <ProductDescriptionPage />
        </Route> */}
      </Switch>
    </Router>
  );
};

export default App;
