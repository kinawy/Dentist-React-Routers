import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./Home";
import Procedures from "./Procedures";
import Contact from "./Contact";
import WidgetShow from "./WidgetShow";
import Press from "./Press"
import Careers from "./Careers"
import CloserLook from "./CloserLook"

function App() {
  const procedures = [
    "Deep Cleaning",
    "Oral Surgery",
    "Laughing Gas",
    "Root Canal",
    "Crowns",
    "Fillings",
  ];
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home?</Link>{" "}
          <Link to="/procedures">See Our Procedures</Link>{" "}
          <Link to="/contact">Contact Us</Link>{" "}
          <Link to="/in-the-press">Boston Dental in the Press</Link>{" "}
          <Link to="/careers">Careers</Link>{" "}
          <Link to="/closer-look">A Closer Look</Link>{" "}
        </nav>
        <Route exact path="/" component={Home} />
        <Route path="/procedures" render={() => <Procedures procedures={procedures}/>}/>
        <Route path="/contact" component={Contact} />
        <Route path="/widgets/:id" render={(props) => <WidgetShow procedures={procedures}{...props}/>}/>
        <Route path="/in-the-press" component={Press}/>
        <Route path="/careers" component={Careers}/>
        <Route path="/closer-look" component={CloserLook}/>
      </div>
    </Router>
  );
}

export default App;
