import { Switch, Route } from "react-router-dom";
import Cart from "../pages/Cart";
import ProductList from "../pages/ProductList/";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <ProductList />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
    </Switch>
  );
}

export default Routes;
