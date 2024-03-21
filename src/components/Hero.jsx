import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img
        src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fir=crop&w=3433&q=80"
        alt="Image of sea"
        className="w-full h-full object-cover"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white [-4">
          <h1 className="font-bold text-4xl">Find Your Special Trip</h1>
          <h2 className="text-4xl py-4 italic">With Weekaway</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente,
            pariatur voluptatibus? Ex voluptatibus qui distinctio facilis,
            inventore, quia repellendus nisi, ad labore fuga voluptate! Quisquam
            dolor nihil recusandae esse minus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
