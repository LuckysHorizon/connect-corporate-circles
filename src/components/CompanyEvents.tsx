
import { useState } from 'react';
import { Calendar, Camera, Plus, MapPin, Clock, Users } from 'lucide-react';

const CompanyEvents = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingEvents = [
    {
      id: 1,
      title: 'Annual Tech Conference 2025',
      date: '2025-01-15',
      time: '09:00 AM',
      location: 'Main Auditorium',
      attendees: 250,
      description: 'Join us for our biggest tech conference featuring industry leaders and innovative presentations.',
      image: '/placeholder.svg',
      category: 'Conference'
    },
    {
      id: 2,
      title: 'New Year Celebration',
      date: '2025-01-01',
      time: '07:00 PM',
      location: 'Rooftop Terrace',
      attendees: 180,
      description: 'Ring in the new year with your colleagues at our spectacular rooftop celebration.',
      image: '/placeholder.svg',
      category: 'Celebration'
    }
  ];

  const pastEvents = [
    {
      id: 3,
      title: 'Holiday Party 2024',
      date: '2024-12-20',
      location: 'Grand Ballroom',
      attendees: 200,
      photos: 45,
      description: 'A memorable holiday celebration with great food, music, and company.',
      image: '/placeholder.svg'
    },
    {
      id: 4,
      title: 'Team Building Workshop',
      date: '2024-12-10',
      location: 'Conference Room A',
      attendees: 50,
      photos: 28,
      description: 'Interactive workshop focused on improving team collaboration and communication.',
      image: '/placeholder.svg'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Calendar className="h-8 w-8 text-blue-500" />
          <h2 className="text-2xl font-bold text-white">Company Events</h2>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <Plus className="h-4 w-4" />
          <span>Create Event</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-gray-800 rounded-lg p-1 border border-gray-700 inline-flex">
        <button
          onClick={() => setActiveTab('upcoming')}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeTab === 'upcoming'
              ? 'bg-blue-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Upcoming Events
        </button>
        <button
          onClick={() => setActiveTab('past')}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeTab === 'past'
              ? 'bg-blue-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Past Events
        </button>
      </div>

      {/* Upcoming Events */}
      {activeTab === 'upcoming' && (
        <div className="grid gap-6">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                      <span className="px-2 py-1 bg-blue-600 text-white rounded-full text-xs">
                        {event.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{event.description}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">{event.attendees} attending</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                      Register
                    </button>
                    <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors">
                      More Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Past Events */}
      {activeTab === 'past' && (
        <div className="grid gap-6">
          {pastEvents.map((event) => (
            <div key={event.id} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Camera className="h-4 w-4" />
                      <span className="text-sm">{event.photos} photos</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{event.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">{event.attendees} attended</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
                      View Photos
                    </button>
                    <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors">
                      Event Summary
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CompanyEvents;
