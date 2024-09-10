"use client";

import React, { useState } from "react";
import Header from "@/Component/Header";
import axios from "axios";

const Page = () => {
  const [count, setCount] = useState(0);
  const [images, setImages] = useState([]);
  const getimg = async () => {
    const response = await axios.get('https://picsum.photos/v2/list');
    setImages(response.data);
  };

  return (
    <div>
      <Header />
      <h1 className="font-bold text-xl">Counter App</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="text-white font-bold bg-red-500 mr-2 px-2 py-2"
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
        className="text-white font-bold bg-gray-700 px-2 py-2"
      >
        Decrement
      </button>
      <p>Count: {count}</p>

      <button
        onClick={getimg}
        className="text-white font-bold bg-gray-700 px-2 py-2 mt-8"
      >
        Get Images
      </button>
      {images.map((image, index) => (
        <img
          height={100}
          width={300}
          key={index}
          src={image.download_url}
          alt={image.author}
          className="m-10 rounded inline-block"
        />
      ))}
    </div>
  );
};

export default Page;
