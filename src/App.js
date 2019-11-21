import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <AppBar />
        <div className="App">
          <div className="container">
            <Route path="/" component={AppRoutes} />
          </div>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
