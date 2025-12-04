import { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
  const { isAuthenticated } = useContext(AuthContext);

  // If already logged in, redirect to dashboard
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="text-center max-w-4xl">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Welcome to Task Manager
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Manage your tasks efficiently with role-based access control
        </p>
        <div className="flex gap-4 justify-center mb-12">
          <Link
            to="/login"
            className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-lg font-semibold shadow-lg"
          >
            Login to Continue
          </Link>
          <Link
            to="/register"
            className="px-8 py-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition text-lg font-semibold shadow-lg"
          >
            Create Account
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">🔐 Secure Auth</h3>
            <p className="text-gray-600">JWT-based authentication with bcrypt password hashing</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">👥 Role-Based</h3>
            <p className="text-gray-600">User and Admin roles with different permissions</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">📝 CRUD Tasks</h3>
            <p className="text-gray-600">Create, read, update, and delete tasks easily</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;