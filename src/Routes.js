import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/LoginPage";
import TeaShop from "./pages/TeaShop/TeaShopPage";
import SignupBottom from "./components/SignupBottom/SignupBottom";
import Footer from "./components/Footer/Footer";
import Test from "./components/TeaShopItem/Test";
import ItemDetial from "./components/ItemDetail/ItemDetail";
import Active from "./components/ActiveMain/ActiveMain";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/test" component={ItemDetial} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/teashop" component={TeaShop} />
          <Route exact path="/active" component={Active} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
