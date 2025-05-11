'use client';
import { Facebook, Mail, Github, Instagram } from 'lucide-react';


export default function ContactForm() {
  return (
    <div className="flex justify-center gap-6  text-black dark:text-white ">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <Facebook className="w-6 h-6 hover:scale-110 transition-transform" />
    </a>
    <a href="mailto:kushalacharya507@email.com">
      <Mail className="w-6 h-6 hover:scale-110 transition-transform" />
    </a>
    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
      <Github className="w-6 h-6 hover:scale-110 transition-transform" />
    </a>
    <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer">
      <Instagram className="w-6 h-6 hover:scale-110 transition-transform" />
    </a>
  </div>
  
  );
}
