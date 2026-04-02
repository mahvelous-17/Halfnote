import React from "react";

function MoodHis() {
  const moodHistory = [
    { id: 1, mood: "Happy 😊", date: "April 1", note: "Good day at school" },
    { id: 2, mood: "Stressed 😓", date: "March 31", note: "Too much homework" },
    { id: 3, mood: "Relaxed 😌", date: "March 30", note: "Listened to music" },
    { id: 4, mood: "Excited 🤩", date: "March 29", note: "Hung out with friends" },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Mood History</h2>

      <div className="grid gap-4">
        {moodHistory.map((entry) => (
          <div
            key={entry.id}
            className="bg-white shadow-md rounded-2xl p-4 border"
          >
            <h3 className="text-lg font-semibold">{entry.mood}</h3>
            <p className="text-gray-500">{entry.date}</p>
            <p className="mt-2">{entry.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoodHis;