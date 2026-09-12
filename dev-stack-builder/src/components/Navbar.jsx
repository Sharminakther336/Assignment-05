const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-5 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">
              DS
            </span>
          </div>

          <h2 className="text-xl font-bold">
            <span className="text-gray-900">Dev</span>
            <span className="text-pink-500"> Stack</span>
          </h2>
        </div>


        {/* Menu */}
        <div className="hidden md:flex items-center gap-8">

          <a
            href="#"
            className="text-pink-500 font-medium text-sm"
          >
            Home
          </a>

          <a
            href="#"
            className="text-gray-600 hover:text-pink-500 font-medium text-sm transition"
          >
            Technologies
          </a>

          <a
            href="#"
            className="text-gray-600 hover:text-pink-500 font-medium text-sm transition"
          >
            Projects
          </a>

          <a
            href="#"
            className="text-gray-600 hover:text-pink-500 font-medium text-sm transition"
          >
            About
          </a>

          <a
            href="#"
            className="text-gray-600 hover:text-pink-500 font-medium text-sm transition"
          >
            Contact
          </a>

        </div>


        {/* Right Side */}
        <div className="flex items-center gap-5">

          <button className="text-gray-700 font-medium text-sm">
            Sign In
          </button>

          <button className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2.5 rounded-full font-medium text-sm transition">
            Sign Up
          </button>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;
