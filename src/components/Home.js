import React from "react";
import HomeImage from "../asset/home.jpg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="grid flex justify-center">
      <div className="block">
        <img
          src={HomeImage}
          style={({ width: 900 + "px" }, { height: 500 + "px" })}
        ></img>
      </div>
      <div className="inline-block flex justify-center">
        <Link to="/book">
          <button className="bg-blue-500 text-2xl rounded-lg text-white font-bold px-8 py-6 mt-4 hover:bg-blue-400">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
