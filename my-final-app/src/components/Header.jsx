import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-zinc-900 text-white border-b border-zinc-700 fixed w-full top-0 left-0 z-50 h-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-full flex items-center">

        <div className="flex-shrink-0">
          <h1 className="text-sm font-bold">𝓗𝓪𝓵𝓯𝓷𝓸𝓽𝓮 𝓱𝓮𝓪𝓵𝓲𝓷𝓰</h1>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-2">
          <Link 
            to="/" 
            className="px-3 py-0.5 border border-white rounded hover:bg-white hover:text-black transition text-sm"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="px-3 py-0.5 border border-white rounded hover:bg-white hover:text-black transition text-sm"
          >
            About Us
          </Link>
          <Link 
            to={null} 
            className="px-3 py-0.5 border border-white rounded opacity-50 cursor-not-allowed text-sm"
          >
            Log Mood
          </Link>
          <Link 
            to={null} 
            className="px-3 py-0.5 border border-white rounded opacity-50 cursor-not-allowed text-sm"
          >
            Profile
          </Link>
        </div>

      </div>
    </header>
  );
}

export default Header;