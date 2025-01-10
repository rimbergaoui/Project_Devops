import React from "react";
import { Link } from "react-router-dom";

export default function NavBarre() {
  return (
    <div className="bg-[#0a0e27] shadow-lg">
      <Link to={'/'}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <p className="text-white text-3xl font-mono tracking-wide">Cabinet Dentisterie</p>
        </div>
      </Link>
    </div>
  );
}
