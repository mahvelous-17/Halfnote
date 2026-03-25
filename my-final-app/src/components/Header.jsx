import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-zinc-900 text-white border-b border-zinc-700 fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
       
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">𝓗𝓪𝓵𝓯𝓷𝓸𝓽𝓮 𝓱𝓮𝓪𝓵𝓲𝓷𝓰</h1>
          </div>

          
          <div className="flex space-x-4">
           
            <Link 
              to="/" 
              className="px-3 py-1 border border-white rounded hover:bg-white hover:text-black transition"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="px-3 py-1 border border-white rounded hover:bg-white hover:text-black transition"
            >
              About Us
            </Link>

           
            <Link 
              to={null} 
              className="px-3 py-1 border border-white rounded hover:bg-white hover:text-black transition"
            >
              Log Mood
            </Link>
            <Link 
              to={null} 
              className="px-3 py-1 border border-white rounded hover:bg-white hover:text-black transition"
            >
              Profile
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;