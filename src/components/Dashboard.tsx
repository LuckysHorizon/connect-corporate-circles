
import { TrendingUp, Users, Calendar, MessageSquare, Award, Building } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Total Employees', value: '1,247', icon: Users, color: 'bg-blue-600' },
    { label: 'Active Ideas', value: '89', icon: MessageSquare, color: 'bg-green-600' },
    { label: 'Upcoming Events', value: '12', icon: Calendar, color: 'bg-purple-600' },
    { label: 'Job Referrals', value: '24', icon: Award, color: 'bg-orange-600' },
    { label: 'Property Listings', value: '156', icon: Building, color: 'bg-teal-600' },
    { label: 'Company Growth', value: '+15.2%', icon: TrendingUp, color: 'bg-red-600' },
  ];

  const recentActivities = [
    { user: 'Sarah Johnson', action: 'posted a new innovative idea', time: '2 hours ago', type: 'idea' },
    { user: 'Mike Chen', action: 'shared company event photos', time: '4 hours ago', type: 'event' },
    { user: 'Emily Davis', action: 'listed property for sale', time: '6 hours ago', type: 'property' },
    { user: 'Alex Kumar', action: 'referred candidate for Senior Developer', time: '1 day ago', type: 'referral' },
    { user: 'Lisa Wang', action: 'posted work experience insights', time: '2 days ago', type: 'experience' },
  ];

  const upcomingBirthdays = [
    { name: 'John Smith', date: 'Today', department: 'Engineering' },
    { name: 'Maria Garcia', date: 'Tomorrow', department: 'Marketing' },
    { name: 'Robert Taylor', date: 'Dec 28', department: 'Sales' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Dashboard</h2>
        <div className="text-sm text-gray-400">
          Last updated: {new Date().toLocaleString()}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-4">Recent Activities</h3>
          <div className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-gray-700 rounded-lg">
                <div className="bg-blue-600 p-2 rounded-full">
                  <Users className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm">
                    <span className="font-medium">{activity.user}</span> {activity.action}
                  </p>
                  <p className="text-gray-400 text-xs mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Birthdays */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-4">Upcoming Birthdays</h3>
          <div className="space-y-3">
            {upcomingBirthdays.map((birthday, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-pink-600 p-2 rounded-full">
                    <Calendar className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">{birthday.name}</p>
                    <p className="text-gray-400 text-sm">{birthday.department}</p>
                  </div>
                </div>
                <span className="text-pink-400 text-sm font-medium">{birthday.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg transition-colors">
            <MessageSquare className="h-6 w-6 mx-auto mb-2" />
            <span className="text-sm">New Idea</span>
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg transition-colors">
            <Calendar className="h-6 w-6 mx-auto mb-2" />
            <span className="text-sm">Add Event</span>
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-lg transition-colors">
            <Building className="h-6 w-6 mx-auto mb-2" />
            <span className="text-sm">List Property</span>
          </button>
          <button className="bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-lg transition-colors">
            <Users className="h-6 w-6 mx-auto mb-2" />
            <span className="text-sm">Refer Employee</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
