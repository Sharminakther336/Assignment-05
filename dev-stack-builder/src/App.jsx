function App() {
  return (
    <div className="min-h-screen bg-white">

      {/* Navbar */}
      <nav className="border-b border-gray-100">

        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center">
             <img 
    src="/logo-text.png" 
    alt="Dev Stack" 
    className="w-24 h-auto" 
  />
          </a>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-7">

            <a
              href="#"
              className="text-xs font-medium text-pink-600"
            >
              Home
            </a>

            <a
              href="#"
              className="text-xs text-gray-600 hover:text-pink-600 transition"
            >
              Technologies
            </a>

            <a
              href="#"
              className="text-xs text-gray-600 hover:text-pink-600 transition"
            >
              Projects
            </a>

            <a
              href="#"
              className="text-xs text-gray-600 hover:text-pink-600 transition"
            >
              About
            </a>

            <a
              href="#"
              className="text-xs text-gray-600 hover:text-pink-600 transition"
            >
              Contact
            </a>

          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            <button className="text-xs font-medium text-gray-700 hover:text-pink-600">
              Sign In
            </button>

            <button className="bg-pink-600 hover:bg-pink-700 text-white text-xs font-medium px-4 py-2 rounded-full transition">
              Sign Up
            </button>

          </div>

        </div>

      </nav>

    </div>
  );
}

export default App;

