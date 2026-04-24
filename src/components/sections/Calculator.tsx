"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";

const roles = [
  { name: "Customer Support", ukSalary: 25000, saSalary: 12000 },
  { name: "Admin / Data Entry", ukSalary: 22000, saSalary: 10000 },
  { name: "Sales / SDR", ukSalary: 30000, saSalary: 14000 },
  { name: "Recruitment Consultant", ukSalary: 35000, saSalary: 16000 },
  { name: "Marketing Executive", ukSalary: 32000, saSalary: 15000 },
];

export default function Calculator() {
  const [selectedRole, setSelectedRole] = useState(roles[0]);
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const savings = selectedRole.ukSalary - selectedRole.saSalary;
  const savingsPercent = Math.round((savings / selectedRole.ukSalary) * 100);

  if (!mounted) return null;

  return (
    <div className="space-y-6">
      <div ref={dropdownRef}>
        <label id="listbox-label" className="block text-sm font-bold text-slate-900 mb-2">
          Select a Role
        </label>
        <div className="relative">
          <button
            type="button"
            className="relative w-full cursor-pointer bg-white border border-slate-200 text-slate-800 rounded-xl p-3.5 pl-4 pr-10 text-left focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all shadow-sm font-medium"
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            aria-labelledby="listbox-label"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="block truncate">{selectedRole.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-slate-500">
              <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </span>
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="absolute z-50 mt-2 max-h-60 w-full overflow-auto rounded-xl bg-white py-2 text-base shadow-xl ring-1 ring-black/5 focus:outline-none sm:text-sm border border-slate-100"
                tabIndex={-1}
                role="listbox"
                aria-labelledby="listbox-label"
              >
                {roles.map((role) => (
                  <li
                    key={role.name}
                    className={`relative cursor-pointer select-none py-3 pl-10 pr-4 transition-colors ${
                      selectedRole.name === role.name ? "bg-blue-50 text-blue-900" : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                    role="option"
                    aria-selected={selectedRole.name === role.name}
                    onClick={() => {
                      setSelectedRole(role);
                      setIsOpen(false);
                    }}
                  >
                    <span className={`block truncate ${selectedRole.name === role.name ? "font-bold" : "font-medium"}`}>
                      {role.name}
                    </span>
                    {selectedRole.name === role.name && (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                        <Check className="h-5 w-5" />
                      </span>
                    )}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="flex border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <div className="flex-1 bg-white p-4">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">UK Average</p>
          <p className="text-2xl font-bold text-slate-900">£{selectedRole.ukSalary.toLocaleString()}</p>
        </div>
        <div className="w-px bg-slate-200"></div>
        <div className="flex-1 bg-white p-4">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Our Talent</p>
          <p className="text-2xl font-bold text-slate-900">£{selectedRole.saSalary.toLocaleString()}</p>
        </div>
      </div>

      <motion.div
        key={selectedRole.name}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#eaf6fd] rounded-xl p-6 text-center border border-[#d6effa]"
      >
        <p className="text-[#3a7596] text-sm font-bold mb-2">Your Estimated Annual Savings</p>
        <h4 className="text-4xl font-extrabold text-[#0f4a8a] mb-2">
          £{savings.toLocaleString()}
        </h4>
        <div className="inline-flex items-center justify-center text-[11px] font-bold text-[#3a7596]">
          Save up to {savingsPercent}%
        </div>
      </motion.div>
    </div>
  );
}