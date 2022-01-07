import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "../Pages/Home";
import ShowCart from "../Pages/ShowCart";

export default function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/showcart">
          <ShowCart />
        </Route>
      </Switch>
    </>
  );
}
