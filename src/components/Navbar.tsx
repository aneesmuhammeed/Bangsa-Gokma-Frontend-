import { Menu, Search } from 'lucide-react';

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Navbar({ isOpen, setIsOpen }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-24 bg-neutral-900">
      <div className="container mx-auto px-8 h-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-14 h-14 border-2 border-amber-500" />
            <div className="absolute top-2 left-2 w-12 h-12 bg-neutral-900" />
            <div className="absolute top-4 left-4 w-12 h-12 border-2 border-amber-500 bg-neutral-900" />
          </div>
          <span className="text-2xl text-white tracking-wider">BANGSA GOKMA</span>
        </div>

        <div className="relative hidden md:block">
          <input 
            type="text"
            placeholder="What are you looking for?"
            className="w-96 h-10 bg-neutral-800 border-none px-10 text-white rounded"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <Menu className="w-8 h-8" />
        </button>
      </div>

      <div className={`fixed inset-0 bg-black/95 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <nav className="flex flex-col items-center gap-6 text-5xl font-display text-white">
          {['HOME', 'ABOUT', 'PRE-BOOKING', 'LOCATION', 'POLICIES', 'CONTACT'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group"
              onClick={() => setIsOpen(false)}
            >
              <span className="relative">
                {item}
                <span className="absolute -left-20 top-1/2 w-16 h-1 bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-right" />
                <span className="absolute -right-20 top-1/2 w-16 h-1 bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </span>
            </a>
          ))}
        </nav>
      </div>
    </nav>
  );
}