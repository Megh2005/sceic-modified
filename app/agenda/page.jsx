import React from "react";

const agendaData = [
    {
        "date": "16/01/2025",
        "time": "09:00 - 10:00",
        "activity": "Registration",
        "details": ""
    },
    {
        "date": "16/01/2025",
        "time": "10:00 - 11:00",
        "activity": "Vedic Invocation, Lighting of Lamp, Inauguration & Felicitation",
        "details": "Swamiji Vedajananda, Professor, Department of Chemical Engineering"
    },
    {
        "date": "16/01/2025",
        "time": "11:00 - 11:15",
        "activity": "High Tea",
        "details": ""
    },
    {
        "date": "16/01/2025",
        "time": "11:15 - 12:15",
        "activity": "Keynote Address",
        "details": "Prof. (Dr.) Brajesh Kumar Dubey, IIT Kharagpur"
    },
    {
        "date": "16/01/2025",
        "time": "12:15 - 13:15",
        "activity": "Special Lecture",
        "details": "Prof. (Dr.) Somnath Ghosh, Haldia Institute of Technology"
    },
    {
        "date": "16/01/2025",
        "time": "13:15 - 13:30",
        "activity": "Interaction with Invited Speakers",
        "details": ""
    },
    {
        "date": "16/01/2025",
        "time": "13:30 - 14:30",
        "activity": "Lunch Break",
        "details": ""
    },
    {
        "date": "16/01/2025",
        "time": "14:30 - 16:00",
        "activity": "Technical Session 1 - Structural Engineering and Infrastructural Construction",
        "details": "Topics include seismic response, NDT tests, green concrete, etc. Chair: Prof. (Dr.) Kalyan Kumar Mondal; Co-Chair: Prof. Prithwish Saha"
    },
    {
        "date": "16/01/2025",
        "time": "16:15 - 16:30",
        "activity": "Tea Break",
        "details": ""
    },
    {
        "date": "16/01/2025",
        "time": "16:30 - 17:15",
        "activity": "Special Lecture",
        "details": "Dr. Ramachandra, Technical Advisor, Ultratech Cement Limited"
    },
    {
        "date": "17/01/2025",
        "time": "09:30 - 10:15",
        "activity": "Special Lecture",
        "details": "Prof. (Dr.) Sudip Roy, IIEST, Shibpur"
    },
    {
        "date": "17/01/2025",
        "time": "10:15 - 10:30",
        "activity": "Tea Break",
        "details": ""
    },
    {
        "date": "17/01/2025",
        "time": "10:30 - 11:30",
        "activity": "Technical Session 2 - Assorted",
        "details": "Topics include bus route optimization, glacier melt, water conversion, etc. Chair: Prof. (Dr.) Sarmila Sahoo; Co-Chair: Prof. (Dr.) Rajashree Lodh"
    },
    {
        "date": "17/01/2025",
        "time": "11:30 - 12:15",
        "activity": "Special Lecture",
        "details": "Prof. (Dr.) Supriya Pal, NIT Durgapur"
    },
    {
        "date": "17/01/2025",
        "time": "12:15 - 13:30",
        "activity": "Technical Session 3 - Assorted",
        "details": "Topics include water quality, rainfall-runoff modeling, rainwater harvesting, etc. Chair: Prof. (Dr.) Somnath Mukherjee; Co-Chair: Prof. (Dr.) Subha Sankar Chowdhury"
    },
    {
        "date": "17/01/2025",
        "time": "13:30 - 14:30",
        "activity": "Lunch Break",
        "details": ""
    },
    {
        "date": "17/01/2025",
        "time": "14:30 - 15:00",
        "activity": "Special Lecture",
        "details": "Mr. Pradip Choudhury, Former Technical Advisor, National Jute Board"
    },
    {
        "date": "17/01/2025",
        "time": "15:00 - 17:00",
        "activity": "Technical Session 4 - Environmental Engineering",
        "details": "Topics include pollution, wastewater treatment, carbon footprints, etc. Chair: Prof. (Dr.) Sangita Bhattacharjee; Co-Chair: Prof. (Dr.) Dona Chatterjee"
    },
    {
        "date": "17/01/2025",
        "time": "17:00 - 17:30",
        "activity": "Valedictory Session",
        "details": ""
    },
    {
        "date": "17/01/2025",
        "time": "17:30 - 17:45",
        "activity": "Vote of Thanks",
        "details": ""
    }
]


const groupByDate = (data) => {
  return data.reduce((acc, item) => {
    acc[item.date] = acc[item.date] || [];
    acc[item.date].push(item);
    return acc;
  }, {});
};

const Agenda = () => {
  const groupedAgenda = groupByDate(agendaData);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold mb-8 text-gradient">Agenda</h1>
      <div className="w-full max-w-4xl space-y-8">
        {Object.entries(groupedAgenda).map(([date, items]) => (
          <div key={date}>
            <h2 className="text-2xl font-bold text-blue-400 mb-4">{date}</h2>
            <div className="space-y-4">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="border border-blue-500 bg-gray-800 rounded-lg p-4 shadow-lg hover:scale-105 hover:shadow-2xl transform transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-yellow-300">
                    {item.activity}
                  </h3>
                  <p className="text-sm text-green-300 mt-2">{item.time}</p>
                  {item.details && (
                    <p className="text-sm text-gray-300 mt-2">{item.details}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agenda;
