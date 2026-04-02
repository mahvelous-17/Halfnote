import React, { useState } from "react";

function MusicAct() {
  // Array of activities
  const activities = [
    "Listen to your favorite song 🎧",
    "Go for a short walk 🚶",
    "Write down how you feel ✍️",
    "Take 5 deep breaths 🧘",
    "Watch a relaxing video 🌊",
    "Stretch for 5 minutes 🤸",
  ];

  const [currentTask, setCurrentTask] = useState(activities[0]);

  const getRandomTask = () => {
    const randomIndex = Math.floor(Math.random() * activities.length);
    setCurrentTask(activities[randomIndex]);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Music Activity</h2>

      <div className="bg-white shadow-md rounded-2xl p-6 text-center">
        <p className="text-lg mb-4">{currentTask}</p>

        <button
          onClick={getRandomTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600"
        >
          New Activity
        </button>
      </div>
    </div>
  );
}

export default MusicAct;