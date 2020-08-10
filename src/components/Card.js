import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function Card({ books, refresh }) {
  async function deleteBook() {
    await axios.delete("http://localhost:5000/books/" + books._id);
    return refresh();
  }

  function deleteConfirm() {
    confirmAlert({
      title: "Delete book!",
      message: "Are you sure delete " + books.title + " ?",
      buttons: [
        {
          label: "Delete",
          onClick: () => deleteBook,
        },
        {
          label: "Cancel",
          onClick: () => {},
        },
      ],
    });
  }

  return (
    // <Link to={"/edit/" + books._id}>
    <div className="rounded overflow-hidden shadow-lg mr-4 mb-3 bt-3">
      <div className="px-6 py-5 flex justify-between">
        <Link to={"/book/detail/" + books._id}>
          <div className="text-xl hover:bg-grey-400">{books.title}</div>
        </Link>
        <div className="">
          <Link to={"/book/edit/" + books._id}>
            <a
              href="#"
              className="bg-yellow-400 hover:bg-yellow-300 text-dark font-bold py-2 px-4 rounded mr-2 shadow-lg"
            >
              Edit
            </a>
          </Link>
          <a
            href="#"
            className="bg-red-500 hover:bg-red-400 text-dark font-bold py-2 px-4 rounded shadow-lg"
            onClick={deleteConfirm}
          >
            Delete
          </a>
        </div>
      </div>
    </div>
    // </Link>
  );
}

export default Card;
