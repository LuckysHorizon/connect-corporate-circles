
import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';
import InnovativeThoughts from '../components/InnovativeThoughts';
import CompanyEvents from '../components/CompanyEvents';
import TechnicalDroughts from '../components/TechnicalDroughts';
import WorkExperience from '../components/WorkExperience';
import PropertySales from '../components/PropertySales';
import CompanyGrowth from '../components/CompanyGrowth';
import EmployeeReferral from '../components/EmployeeReferral';
import Matrimonial from '../components/Matrimonial';
import Birthdays from '../components/Birthdays';
import TravelPlans from '../components/TravelPlans';
import Reports from '../components/Reports';
import UserManagement from '../components/UserManagement';
import Header from '../components/Header';

const Index = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'innovative-thoughts':
        return <InnovativeThoughts />;
      case 'company-events':
        return <CompanyEvents />;
      case 'technical-droughts':
        return <TechnicalDroughts />;
      case 'work-experience':
        return <WorkExperience />;
      case 'property-sales':
        return <PropertySales />;
      case 'company-growth':
        return <CompanyGrowth />;
      case 'employee-referral':
        return <EmployeeReferral />;
      case 'matrimonial':
        return <Matrimonial />;
      case 'birthdays':
        return <Birthdays />;
      case 'travel-plans':
        return <TravelPlans />;
      case 'reports':
        return <Reports />;
      case 'user-management':
        return <UserManagement />;
      default:
        return <Dashboard />;
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header 
        toggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        isSidebarCollapsed={isSidebarCollapsed}
      />
      <div className="flex">
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          isCollapsed={isSidebarCollapsed}
        />
        <main className={`flex-1 transition-all duration-300 ${
          isSidebarCollapsed ? 'ml-16' : 'ml-64'
        } p-6 pt-20`}>
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Index;
