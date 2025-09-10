import React from "react";
import ExperienceItem from "./ExperienceItem";

export default function ExperienceList({
  experiences,
  selectedId,
  onSelectExperience,
}) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h3 className="font-bold mb-4 text-lg">Experiencia Laboral</h3>
      <ul className="divide-y divide-gray-200">
        {experiences.map((exp) => (
          <li
            key={exp.id}
            className={`py-3 hover:bg-yellow-50 transition rounded-lg flex items-center gap-3 ${
              selectedId === exp.id ? "border-2 border-yellow-400 bg-yellow-100" : ""
            }`}
          >
            <span className="text-2xl">💼</span>
            <div className="flex-1">
              <ExperienceItem
                exp={exp}
                isSelected={selectedId === exp.id}
                onSelectExperience={onSelectExperience}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
 