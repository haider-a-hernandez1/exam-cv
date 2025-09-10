import React from "react";

export default function EducationList({ education }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h3 className="font-bold mb-4 text-lg">Educación</h3>
      <ul className="divide-y divide-gray-200">
        {education.map((edu) => (
          <li
            key={edu.id}
            className="py-3 hover:bg-slate-50 transition rounded-lg flex items-center gap-3"
          >
            <span className="text-2xl">🎓</span>
            <div>
              <span className="font-semibold">{edu.title}</span>
              <div className="text-sm text-gray-600">
                {edu.institution} — {edu.period}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
