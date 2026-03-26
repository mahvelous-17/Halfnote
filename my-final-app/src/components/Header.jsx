import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-zinc-900 text-white border-b border-zinc-700 fixed w-full top-0 left-0 z-50 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="text-xl font-bold">Halfnote Healing</div>

          <div className="flex items-center space-x-2 pt-2">
            <Link 
              to="/" 
              className="text-red-500 font-medium hover:underline transition"
            >
              Home
            </Link>
            
            <span className="text-zinc-600">|</span>


            <Link 
              to="/about" 
              className="text-cyan-400 font-medium hover:underline transition"
            >
              About Us
            </Link>

            <span className="text-zinc-600">|</span>

            <Link 
              to="/log-mood"
              className="text-green-500 font-medium hover:underline transition"
            >
              Log Mood
            </Link>

            <span className="text-zinc-600">|</span>


            <Link 
              to="/profile" 
              className="text-yellow-400 font-medium hover:underline transition"
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