import React from "react";

function Card({ username, buttonText = "Click me" }) {
  return (
    <div class="relative h-[400px] w-[300px] rounded-md">
      <img
        src="https://media.licdn.com/dms/image/D4D03AQHPmI_Jx6z4EQ/profile-displayphoto-shrink_400_400/0/1668235506286?e=1724889600&v=beta&t=0TWYXC95d69QW8-8qdocS4OlpLC-h79TVbDc-Q4FEl8"
        alt="AirMax Pro"
        class="z-0 h-full w-full rounded-md object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div class="absolute bottom-4 left-4 text-left">
        <h1 class="text-lg font-semibold text-white">{username}</h1>
        <p class="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>
        <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          {buttonText} →
        </button>
      </div>
    </div>
  );
}

export default Card;
