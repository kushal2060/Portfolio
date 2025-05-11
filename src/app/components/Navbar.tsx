'use client';
import DarkModeToggle from "./DarkModeToggle"
import ContactForm from "./Contact";
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6">
      <div className="text-2xl font-bold">Portfolio</div>
      <div className="space-x-4 flex items-center">
      <ContactForm />
        <a href="#Projects" className="hover:underline">Projects</a>
       
        <DarkModeToggle />
      </div>
    </nav>
  );
}