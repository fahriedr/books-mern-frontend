import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Books from "./components/Books";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";
import DetailBook from "./components/DetailBook";
import Home from "./components/Home";
import { Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/book" exact component={Books} />
        <Route path="/book/add" exact component={AddBook} />
        <Route path="/book/edit/:id" exact component={EditBook} />
        <Route path="/book/detail/:id" exact component={DetailBook} />
      </BrowserRouter>
    </div>
  );
}

export default App;
