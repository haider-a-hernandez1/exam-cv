import React from "react";

export default function Profile({ profile }) {
  return (
    <div className="bg-gradient-to-r from-slate-100 via-white to-slate-100 p-8 rounded-2xl shadow-lg mb-8">
      <div className="flex items-center gap-8">
        <div className="bg-slate-200 rounded-full p-2 shadow-inner">
          <img
            src={profile.image}
            alt={profile.name}
            className="w-28 h-28 rounded-full object-cover border-4 border-white"
          />
        </div>
        <div>
          <h2 className="text-3xl font-extrabold text-slate-800">
            {profile.name}
          </h2>
          <p className="text-base text-yellow-700 font-semibold mt-1">
            {profile.profession
              ? profile.profession
              : "Sin profesión registrada"}
          </p>
        </div>
      </div>
      <p className="mt-6 text-gray-700 text-lg leading-relaxed">
        {profile.description}
      </p>
    </div>
  );
}
