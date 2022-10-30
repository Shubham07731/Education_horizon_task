
import React from "react";
import "../components/Home.css";
import { useEffect, useState } from "react";

const Home = () => {
  const [image, setImage] = useState();

  const handleSubmit = async () => {
    const res = await fetch("http://localhost:8000/");
    res.json().then((result) => {
      console.log();
      let base64String = result.message.split(",")[1];
      base64String = base64String.slice(0, -1);
      setImage(base64String);
    });
  };
  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <div className="bg-color">
      <div className="body-image">
        {image && (
          <img
            width="256px"
            height="128px"
            src={`data:image/png;base64,${image}`}
            alt="No color Available, please try again"
          />
        )}
      </div>
      <div className="bg-btn">
        <button className="btn" onClick={handleSubmit}>
          Click Me
        </button>
      </div>
    </div>
  );
};

export default Home;
