import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProductListingPage from "../pages/ProductListingPage";

const App = () => {
  const [products, setProducts] = useState([{}]);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ProductListingPage products={products} setProducts={setProducts} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
