
import { Bell, User, Search, Menu, LogOut, Building2 } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

interface HeaderProps {
  toggleSidebar: () => void;
  isSidebarCollapsed: boolean;
}

const Header = ({ toggleSidebar, isSidebarCollapsed }: HeaderProps) => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast.error('Error signing out');
    } else {
      toast.success('Signed out successfully');
      navigate('/');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700/50 px-6 py-4 z-50 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-gray-700/50 rounded-lg transition-all duration-200 group"
          >
            <Menu className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" />
          </button>
          
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2.5 rounded-xl shadow-lg">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Corporate Employee Welfare
              </h1>
              <p className="text-xs text-gray-400 -mt-1">Network Platform</p>
            </div>
            <div className="block md:hidden">
              <h1 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                CEW Network
              </h1>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative hidden lg:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search employees, posts..."
              className="bg-gray-800/50 text-white pl-10 pr-4 py-2.5 rounded-xl border border-gray-600/50 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 w-80 transition-all duration-200 backdrop-blur-sm"
            />
          </div>
          
          <button className="relative p-2.5 hover:bg-gray-700/50 rounded-xl transition-all duration-200 group">
            <Bell className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" />
            <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium shadow-lg">
              3
            </span>
          </button>

          <div className="flex items-center space-x-3 bg-gray-800/30 rounded-xl px-3 py-2 border border-gray-700/50">
            <div className="bg-gradient-to-br from-gray-600 to-gray-700 p-2 rounded-lg">
              <User className="h-4 w-4 text-white" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-white">{user?.user_metadata?.full_name || 'User'}</p>
              <p className="text-xs text-gray-400 -mt-0.5">{user?.email}</p>
            </div>
            <button
              onClick={handleSignOut}
              className="p-2 hover:bg-red-500/20 rounded-lg transition-all duration-200 text-red-400 hover:text-red-300 group"
              title="Sign Out"
            >
              <LogOut className="h-4 w-4 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
