import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { logout } from '../services/authService';

const Navbar = () => {
  const { user, setUser, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setUser(null);
    navigate('/');
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold hover:text-blue-200 transition">
            Task Manager
          </Link>

          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <span className="text-sm bg-blue-700 px-3 py-1 rounded">
                  {user?.name} <span className="text-blue-300">({user?.role})</span>
                </span>
                <Link
                  to="/dashboard"
                  className="px-4 py-2 bg-blue-700 rounded hover:bg-blue-800 transition"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-500 rounded hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 bg-blue-700 rounded hover:bg-blue-800 transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 bg-green-500 rounded hover:bg-green-600 transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;