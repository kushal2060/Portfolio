'use client';
import { Code2, Braces, TerminalSquare } from 'lucide-react';

export default function Skills() {
  return (
    <section
      className="py-12 px-4 sm:px-6 md:px-12 bg-[url('/punch1.jpg')] bg-cover bg-center text-gray-900 dark:text-gray-100 rounded-3xl shadow-lg hover:shadow-2xl w-full max-w-6xl mx-auto"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-black dark:text-white">Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
        {/* Next.js */}
        <div className="skills-item flex flex-col items-center p-4 rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800">
          <img src="/next.svg" alt="Next.js" className="w-10 h-10 mb-2" />
          <p>Next.js</p>
        </div>

        {/* Django */}
        <div className="skills-item flex flex-col items-center p-4 rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800">
          <img src="/django-icon.svg" alt="Django" className="w-10 h-10 mb-2" />
          <p>Django</p>
        </div>

        {/* Python */}
        <div className="skills-item flex flex-col items-center p-4 rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800">
          <TerminalSquare className="w-10 h-10 mb-2" />
          <p>Python</p>
        </div>

        {/* C++ */}
        <div className="skills-item flex flex-col items-center p-4 rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800">
          <Braces className="w-10 h-10 mb-2" />
          <p>C++</p>
        </div>

        {/* C# */}
        <div className="skills-item flex flex-col items-center p-4 rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800">
          <Code2 className="w-10 h-10 mb-2" />
          <p>C#</p>
        </div>
      </div>
      <style>
        {`
          @media (max-width: 640px) {
          .skills-item {
            transform: scale(1.05);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            background-color: #f3f4f6; /* light background */
          }

          .dark .skills-item {
            background-color: #2d3748; /* dark background */
          }
}
        `}
      </style>
    </section>
  );
}
