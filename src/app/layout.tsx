import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Fototer';


export const metadata = {
  title: 'My Portfolio',
  description: 'Personal portfolio built with Next.js, Tailwind CSS, and Framer Motion',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" >
      <body className="bg-[var(--background)] text-[var(--foreground)]">
        <Navbar />
        
        <main>
      
          {children}
         
          </main>
      
        
        <Footer />
      </body>
    </html>
  );
}