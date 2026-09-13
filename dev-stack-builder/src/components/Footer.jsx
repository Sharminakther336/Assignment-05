const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-5 py-10 sm:py-12">

        {/* Footer Main Content */}
        <div className="grid grid-cols-2 md:flex md:flex-row justify-between gap-8 md:gap-10">

          {/* Logo & Description */}
          <div className="col-span-2 md:max-w-sm">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-purple-500 rounded-md flex items-center justify-center">
                <span className="text-white text-[9px] font-bold">
                  DS
                </span>
              </div>

              <h2 className="text-lg font-bold text-gray-900">
                Dev <span className="text-pink-500">Stack</span>
              </h2>
            </div>

            <p className="text-sm text-gray-400 leading-6 mt-4">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social Links */}
            <div className="flex gap-5 mt-5">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                GitHub
              </a>

              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Twitter
              </a>

              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xs font-bold text-gray-900 uppercase">
              Product
            </h3>

            <div className="flex flex-col gap-3 mt-4">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Home
              </a>

              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Technologies
              </a>

              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Projects
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold text-gray-900 uppercase">
              Company
            </h3>

            <div className="flex flex-col gap-3 mt-4">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                About
              </a>

              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Contact
              </a>

              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-bold text-gray-900 uppercase">
              Legal
            </h3>

            <div className="flex flex-col gap-3 mt-4">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Privacy Policy
              </a>

              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Terms of Service
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">

          <p className="text-xs text-gray-400">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#" className="text-xs text-gray-400 hover:text-gray-700">
              Privacy
            </a>

            <a href="#" className="text-xs text-gray-400 hover:text-gray-700">
              Terms
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;