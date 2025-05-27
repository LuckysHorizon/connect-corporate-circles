
import { useState } from 'react';
import { Cake, Calendar, Gift, Plus, Users } from 'lucide-react';

const Birthdays = () => {
  const [activeTab, setActiveTab] = useState('today');

  const todaysBirthdays = [
    {
      id: 1,
      name: 'Sarah Johnson',
      department: 'Engineering',
      position: 'Senior Developer',
      age: 28,
      image: '/placeholder.svg',
      wishes: 12
    },
    {
      id: 2,
      name: 'Mike Chen',
      department: 'Marketing',
      position: 'Marketing Manager',
      age: 32,
      image: '/placeholder.svg',
      wishes: 8
    }
  ];

  const upcomingBirthdays = [
    {
      id: 3,
      name: 'Emily Davis',
      department: 'HR',
      position: 'HR Specialist',
      date: 'December 28',
      image: '/placeholder.svg'
    },
    {
      id: 4,
      name: 'Alex Kumar',
      department: 'Sales',
      position: 'Sales Executive',
      date: 'December 29',
      image: '/placeholder.svg'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      department: 'Design',
      position: 'UX Designer',
      date: 'December 30',
      image: '/placeholder.svg'
    },
    {
      id: 6,
      name: 'Robert Taylor',
      department: 'Operations',
      position: 'Operations Manager',
      date: 'January 2',
      image: '/placeholder.svg'
    }
  ];

  const monthlyStats = [
    { month: 'January', count: 12 },
    { month: 'February', count: 8 },
    { month: 'March', count: 15 },
    { month: 'April', count: 10 },
    { month: 'May', count: 14 },
    { month: 'June', count: 11 },
    { month: 'July', count: 9 },
    { month: 'August', count: 13 },
    { month: 'September', count: 16 },
    { month: 'October', count: 12 },
    { month: 'November', count: 18 },
    { month: 'December', count: 20 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Cake className="h-8 w-8 text-pink-500" />
          <h2 className="text-2xl font-bold text-white">Birthdays</h2>
        </div>
        <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <Plus className="h-4 w-4" />
          <span>Add Birthday</span>
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center space-x-3">
            <Cake className="h-8 w-8 text-pink-500" />
            <div>
              <p className="text-gray-400 text-sm">Today's Birthdays</p>
              <p className="text-2xl font-bold text-white">{todaysBirthdays.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center space-x-3">
            <Calendar className="h-8 w-8 text-blue-500" />
            <div>
              <p className="text-gray-400 text-sm">This Week</p>
              <p className="text-2xl font-bold text-white">7</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center space-x-3">
            <Gift className="h-8 w-8 text-yellow-500" />
            <div>
              <p className="text-gray-400 text-sm">This Month</p>
              <p className="text-2xl font-bold text-white">20</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-gray-800 rounded-lg p-1 border border-gray-700 inline-flex">
        <button
          onClick={() => setActiveTab('today')}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeTab === 'today'
              ? 'bg-pink-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Today's Birthdays
        </button>
        <button
          onClick={() => setActiveTab('upcoming')}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeTab === 'upcoming'
              ? 'bg-pink-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Upcoming
        </button>
        <button
          onClick={() => setActiveTab('calendar')}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeTab === 'calendar'
              ? 'bg-pink-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Birthday Calendar
        </button>
      </div>

      {/* Today's Birthdays Tab */}
      {activeTab === 'today' && (
        <div className="space-y-6">
          {todaysBirthdays.length > 0 ? (
            todaysBirthdays.map((birthday) => (
              <div key={birthday.id} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={birthday.image}
                      alt={birthday.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-white">{birthday.name}</h3>
                      <p className="text-gray-400">{birthday.position}</p>
                      <p className="text-gray-400 text-sm">{birthday.department}</p>
                      <p className="text-pink-400 text-sm">Turning {birthday.age} today! 🎉</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-sm">{birthday.wishes} wishes sent</p>
                    <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg mt-2 transition-colors">
                      Send Wishes
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-gray-800 rounded-lg p-12 border border-gray-700 text-center">
              <Cake className="h-16 w-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No Birthdays Today</h3>
              <p className="text-gray-400">Check back tomorrow or view upcoming birthdays!</p>
            </div>
          )}
        </div>
      )}

      {/* Upcoming Birthdays Tab */}
      {activeTab === 'upcoming' && (
        <div className="space-y-6">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4">Next 7 Days</h3>
            <div className="space-y-4">
              {upcomingBirthdays.map((birthday) => (
                <div key={birthday.id} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <img
                      src={birthday.image}
                      alt={birthday.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-medium text-white">{birthday.name}</h4>
                      <p className="text-gray-400 text-sm">{birthday.position} • {birthday.department}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-pink-400 font-medium">{birthday.date}</p>
                    <button className="text-gray-400 hover:text-white text-sm transition-colors">
                      Set Reminder
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Birthday Calendar Tab */}
      {activeTab === 'calendar' && (
        <div className="space-y-6">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4">Monthly Birthday Distribution</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {monthlyStats.map((stat) => (
                <div key={stat.month} className="bg-gray-700 p-4 rounded-lg text-center">
                  <p className="text-white font-medium">{stat.month}</p>
                  <p className="text-2xl font-bold text-pink-400">{stat.count}</p>
                  <p className="text-gray-400 text-sm">birthdays</p>
                </div>
              ))}
            </div>
          </div>

          {/* Birthday Traditions */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4">Birthday Traditions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-700 p-4 rounded-lg">
                <Gift className="h-8 w-8 text-yellow-500 mb-3" />
                <h4 className="font-medium text-white mb-2">Celebration Packages</h4>
                <p className="text-gray-300 text-sm">Special birthday packages including cake, decorations, and team celebration.</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <Users className="h-8 w-8 text-blue-500 mb-3" />
                <h4 className="font-medium text-white mb-2">Birthday Committee</h4>
                <p className="text-gray-300 text-sm">Volunteer to help organize birthday celebrations for your colleagues.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Birthdays;
