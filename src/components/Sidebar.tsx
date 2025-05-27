
import { 
  Home, 
  Lightbulb, 
  Calendar, 
  Code, 
  Briefcase, 
  Building,
  TrendingUp,
  Users,
  Heart,
  Cake,
  MapPin,
  FileText,
  Settings
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isCollapsed: boolean;
}

const Sidebar = ({ activeTab, setActiveTab, isCollapsed }: SidebarProps) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'innovative-thoughts', label: 'Innovative Thoughts', icon: Lightbulb },
    { id: 'company-events', label: 'Company Events', icon: Calendar },
    { id: 'technical-droughts', label: 'Technical Droughts', icon: Code },
    { id: 'work-experience', label: 'Work Experience', icon: Briefcase },
    { id: 'property-sales', label: 'Property Sales', icon: Building },
    { id: 'company-growth', label: 'Company Growth', icon: TrendingUp },
    { id: 'employee-referral', label: 'Employee Referral', icon: Users },
    { id: 'matrimonial', label: 'Matrimonial', icon: Heart },
    { id: 'birthdays', label: 'Birthdays', icon: Cake },
    { id: 'travel-plans', label: 'Travel Plans', icon: MapPin },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'user-management', label: 'User Management', icon: Settings },
  ];

  return (
    <aside className={`fixed left-0 top-16 h-full bg-gray-800 border-r border-gray-700 transition-all duration-300 z-40 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                  title={isCollapsed ? item.label : ''}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  {!isCollapsed && (
                    <span className="text-sm font-medium">{item.label}</span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
