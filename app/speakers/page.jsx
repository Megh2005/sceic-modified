import React from 'react';

const speakers = [
  { id: 1, name: 'Prof. Brajesh Kr. Dubey', designation: 'Professor, IIT Kharagpur, Researcher - Circular Engineering, LCA, Decarbonization, Integrated Waste Management' },
  { id: 2, name: 'Prof. (Dr.) Somnath Ghosh', designation: 'Emeritus Professor, Haldia Institute of Technology, Former HoD and Dean of Civil Engineering Department, Jadavpur University' },
  { id: 3, name: 'Prof. (Dr) Sudip Roy', designation: 'Professor, Department of Civil Engineering, Indian Institute of Engineering Science and Technology Shibpur' },
  { id: 4, name: 'Prof. (Dr) Supriya Pal', designation: 'Associate Professor, Department of Civil Engineering, National Institute of Technology (NIT) Durgapur' },
  { id: 5, name: 'Mr. Pradip Choudhury', designation: 'Former Principal Technologist - IJIRA, Former Technical Advisor - National Jute Board, Ministry of Textiles, Govt. of India' },
];

const SpeakerList = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105"
            >
              <h2 className="text-xl font-bold">{speaker.name}</h2>
              <p className="text-gray-400">{speaker.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeakerList;
