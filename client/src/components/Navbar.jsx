import { useState } from 'react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex items-center justify-between">
      <h1 className="cursor-pointer font-Pacifico text-5xl">caelum.</h1>
      <div className="hidden sm:flex items-center font-bold gap-7">
        <h2 className="cursor-pointer hover:scale-105">About</h2>
        <h2 className="cursor-pointer hover:scale-105">Pricing</h2>
      </div>
      <div className="sm:hidden">
        <button
          className="focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 transition-transform duration-300 ease-in-out transform"
          >
            {showMenu ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>
      <div
        className={`sm:hidden absolute top-12 right-0 w-48 bg-white rounded-lg shadow transition-opacity duration-300 ease-in-out ${
          showMenu ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h2 className="cursor-pointer px-4 py-2">About</h2>
        <h2 className="cursor-pointer px-4 py-2">Pricing</h2>
        <h2 className="cursor-pointer font-bold px-4 py-2">Get Started</h2>
      </div>
      <h2 className="hidden sm:block cursor-pointer font-bold border-2 border-black rounded-lg p-3 hover:scale-105">
        Get Started
      </h2>
    </div>
  );
};

export default Navbar;
