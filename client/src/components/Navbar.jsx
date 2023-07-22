const Navbar = () => {
  
  return (
    <div className="flex items-center justify-between ">
      <h1 className="cursor-pointer bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-Pacifico text-5xl">
        caelum.
      </h1>
      {/* Layout when the window size is large */}
      
      <h2 className="hidden sm:block cursor-pointer font-bold border-2 border-gray-300 rounded-lg p-3 hover:">
        Get Started
      </h2>
    </div>
  );
};

export default Navbar;
