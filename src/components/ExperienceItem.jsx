import React from "react";

export default function ExperienceItem({ exp, selectedId, onSelectExperience }) {
  const isSelected = selectedId === exp.id;

  return (
    <div className={`bg-white p-4 rounded-lg shadow ${isSelected ? "border-4 border-yellow-400" : ""}`}>
      <h3 className="font-semibold">{exp.title}</h3>
      <p className="text-sm text-gray-600">
        {exp.company} - {exp.period}
      </p>
      <button
        onClick={() =>
          onSelectExperience(isSelected ? null : exp.id)
        }
        className={`mt-2 text-sm px-3 py-1 rounded ${isSelected ? "bg-yellow-300" : "bg-blue-100 hover:bg-blue-200"}`}
      >
        {isSelected ? "Quitar marca" : "Marcar como interesante"}
      </button>
    </div>
  );
}
