import React, { Component } from "react";
import axios from "axios";

class AddBook extends Component {
  state = {
    title: "",
    author: "",
    synopsis: "",
    year: 0,
  };

  handlerChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlerSubmit = async () => {
    window.event.preventDefault();
    console.log(this.state);
    await axios.post("http://localhost:5000/books/", this.state);
    this.props.history.push("/book");
  };

  render() {
    return (
      <div className="justify-center mt-6 container mx-auto">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "
          onSubmit={this.handlerSubmit}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Title"
              name="title"
              onChange={this.handlerChange}
            ></input>
          </div>
          <div className="flex flex-wrap -mx-2 mb-2">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
                Author
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Author"
                name="author"
                onChange={this.handlerChange}
              ></input>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
                Year
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                pattern="[0-9]*"
                placeholder="Ex:2008"
                name="year"
                onChange={this.handlerChange}
              ></input>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Synopsis
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Synopsis"
              name="synopsis"
              onChange={this.handlerChange}
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddBook;
