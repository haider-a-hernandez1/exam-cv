import React, { useState } from "react";
import { profile, experiences, education } from "./data";
import Profile from "./components/Profile";
import ExperienceList from "./components/ExperienceList";
import EducationList from "./components/EducationList";

export default function App() {
  const [selectedId, setSelectedId] = useState(null);
  const selectedExperience = experiences.find((e) => e.id === selectedId);

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <Profile profile={profile} />
        <ExperienceList
          experiences={experiences}
          selectedId={selectedId}
          onSelectExperience={setSelectedId}
        />
        {selectedExperience ? (
          <div className="bg-yellow-100 p-4 rounded-lg shadow">
            <h3 className="font-bold">Resumen seleccionado:</h3>
            <p>{selectedExperience.details}</p>
          </div>
        ) : (
          <div className="text-gray-500 italic">No hay experiencia seleccionada.</div>
        )}
        <EducationList education={education} />
      </div>
    </div>
  );
}
