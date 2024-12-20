import React from "react";

const SpeakerCard = (speaker) => {
  return (
    <div className="hover:translate-x-2 hover:-translate-y-2 transition-all ease-in-out duration-200 cursor-pointer bg-gradient-to-tl from-blue-500 to-indigo-800 p-6 rounded-md shadow-lg flex flex-col justify-between gap-4">
      <p className="text-white text-2xl font-bold">{speaker.name}</p>
      <p className="text-gray-300 text-base font-medium">
        {speaker.designation}
      </p>
    </div>
  );
};

export default SpeakerCard;
