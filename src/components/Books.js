import React, { Component } from "react";
import Card from "./Card";
import axios from "axios";
import { Link } from "react-router-dom";

class Books extends Component {
  state = {
    books: [],
  };

  componentDidMount = async () => {
    await axios.get("http://localhost:5000/books").then((response) =>
      this.setState({
        books: response.data,
      })
    );
  };

  render() {
    const renderData = this.state.books.map((books) => {
      return (
        <Card books={books} key={books._id} refresh={this.componentDidMount} />
      );
    });

    return (
      <div className="mb-4 mt-6 container mx-auto ">
        <div className="mb-4 items-end">
          <Link to="/book/add">
            <a
              href="#"
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold rounded px-4 py-2 shadow-lg"
            >
              Add Data
            </a>
          </Link>
        </div>
        {renderData}
      </div>
    );
  }
}

export default Books;
