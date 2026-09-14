import Footerloogo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-base-150 mt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="flex justify-between gap-10">
          {/* Brand */}
          <div className="max-w-sm">
            {/* Replace this image URL with your actual logo/image */}
            <img src={Footerloogo} alt="DevStack" className="w-36 mb-4" />

            <p className="text-sm text-gray-400">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            {/* Social Media */}
            <div className="flex gap-4 mt-5">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Facebook
              </a>

              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                LinkedIn
              </a>

              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                GitHub
              </a>
            </div>
          </div>

          {/* Home */}
          <div>
            <h3 className="font-semibold mb-4">PRODUCT</h3>

            <div className="flex flex-col gap-2">
              <a href="#" className="text-sm text-gray-400 hover:text-gray-600">
                Home
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-gray-600">
                Technologies
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-gray-600">
                Projects
              </a>
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="font-semibold mb-4">COMPANY</h3>

            <div className="flex flex-col gap-2">
              <a href="#" className="text-sm text-gray-400 hover:text-gray-600">
                About
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-gray-600">
                Contact
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-gray-600">
                Careers
              </a>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold mb-4">LEGAL</h3>

            <div className="flex flex-col gap-2">
              <a href="#" className="text-sm text-gray-400 hover:text-gray-600">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-gray-600">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t mt-10 pt-5 text-sm text-gray-300">
          <div className="flex justify-between">
            <p>© 2026 DevStack. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-sm text-gray-400 hover:text-gray-600">
                Privacy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-gray-600">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
