import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/home";
import ImageCard from "../components/ImageCard";
import PaginatedTable from "../components/PaginatedTable";
import BreadCrumbs from "../components/BreadCrumbs";
import Dialog from "../components/Dialogs";
import ExpansionPanel from "../components/ExpansionPanel";
import Slider from "../components/Sliders";
import Stepper from "../components/Steppers";
import Tabs from "../components/Tabs";
import Login from "../components/Login";

class AppRoutes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/image-card"} component={ImageCard} />
          <Route path={"/paginated-table"} component={PaginatedTable} />
          <Route path={"/breadcrumbs"} component={BreadCrumbs} />
          <Route path={"/dialog"} component={Dialog} />
          <Route path={"/expansion-panel"} component={ExpansionPanel} />
          <Route path={"/slider"} component={Slider} />
          <Route path={"/stepper"} component={Stepper} />
          <Route path={"/tabs"} component={Tabs} />
          <Route path={"/login"} component={Login} />
        </Switch>
      </div>
    );
  }
}

export default AppRoutes;
