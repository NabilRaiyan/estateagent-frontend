"use client";

import React from "react";

interface SortOption {
  label: string;
  value: string;
}

interface SortDropdownProps {
  options: SortOption[];
  selectedValue: string;
  onChange: (value: string) => void;
}

export default function SortDropdown({
  options,
  selectedValue,
  onChange,
}: SortDropdownProps) {
  return (
    <div className="inline-block relative">
      <select
        value={selectedValue}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none bg-white text-zinc-800 border border-[#2a6071] rounded-md py-2 pl-3 pr-8 shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {/* Custom arrow */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M7 10l5 5 5-5H7z" />
        </svg>
      </div>
    </div>
  );
}
