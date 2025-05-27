
import { useState } from 'react';
import { MapPin, Plus, Calendar, Users, DollarSign, Clock } from 'lucide-react';

const TravelPlans = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingTrips = [
    {
      id: 1,
      title: 'Goa Beach Getaway',
      destination: 'Goa, India',
      startDate: '2025-01-15',
      endDate: '2025-01-18',
      organizer: 'Sarah Johnson',
      participants: 12,
      maxParticipants: 15,
      budget: '₹15,000',
      description: 'Relax and unwind at the beautiful beaches of Goa with team members.',
      image: '/placeholder.svg',
      type: 'Beach',
      status: 'Open'
    },
    {
      id: 2,
      title: 'Manali Adventure Trek',
      destination: 'Manali, Himachal Pradesh',
      startDate: '2025-02-10',
      endDate: '2025-02-14',
      organizer: 'Mike Chen',
      participants: 8,
      maxParticipants: 12,
      budget: '₹20,000',
      description: 'Adventure trekking in the beautiful mountains of Himachal Pradesh.',
      image: '/placeholder.svg',
      type: 'Adventure',
      status: 'Open'
    },
    {
      id: 3,
      title: 'Rajasthan Cultural Tour',
      destination: 'Rajasthan, India',
      startDate: '2025-03-05',
      endDate: '2025-03-10',
      organizer: 'Emily Davis',
      participants: 15,
      maxParticipants: 15,
      budget: '₹25,000',
      description: 'Explore the rich culture and heritage of Rajasthan.',
      image: '/placeholder.svg',
      type: 'Cultural',
      status: 'Full'
    }
  ];

  const pastTrips = [
    {
      id: 4,
      title: 'Kerala Backwaters',
      destination: 'Alleppey, Kerala',
      date: '2024-11-20',
      participants: 10,
      photos: 45,
      description: 'Amazing houseboat experience in the serene backwaters of Kerala.',
      image: '/placeholder.svg'
    },
    {
      id: 5,
      title: 'Shimla Hill Station',
      destination: 'Shimla, Himachal Pradesh',
      date: '2024-10-15',
      participants: 8,
      photos: 32,
      description: 'Beautiful hill station experience with snow-capped mountains.',
      image: '/placeholder.svg'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <MapPin className="h-8 w-8 text-cyan-500" />
          <h2 className="text-2xl font-bold text-white">Travel & Picnic Plans</h2>
        </div>
        <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <Plus className="h-4 w-4" />
          <span>Plan a Trip</span>
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center space-x-3">
            <MapPin className="h-8 w-8 text-cyan-500" />
            <div>
              <p className="text-gray-400 text-sm">Upcoming Trips</p>
              <p className="text-2xl font-bold text-white">3</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center space-x-3">
            <Users className="h-8 w-8 text-green-500" />
            <div>
              <p className="text-gray-400 text-sm">Total Participants</p>
              <p className="text-2xl font-bold text-white">35</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center space-x-3">
            <Calendar className="h-8 w-8 text-purple-500" />
            <div>
              <p className="text-gray-400 text-sm">Trips This Year</p>
              <p className="text-2xl font-bold text-white">12</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center space-x-3">
            <DollarSign className="h-8 w-8 text-yellow-500" />
            <div>
              <p className="text-gray-400 text-sm">Avg. Budget</p>
              <p className="text-2xl font-bold text-white">₹18K</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-gray-800 rounded-lg p-1 border border-gray-700 inline-flex">
        <button
          onClick={() => setActiveTab('upcoming')}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeTab === 'upcoming'
              ? 'bg-cyan-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Upcoming Trips
        </button>
        <button
          onClick={() => setActiveTab('past')}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeTab === 'past'
              ? 'bg-cyan-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Past Trips
        </button>
        <button
          onClick={() => setActiveTab('guidelines')}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeTab === 'guidelines'
              ? 'bg-cyan-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Travel Guidelines
        </button>
      </div>

      {/* Upcoming Trips Tab */}
      {activeTab === 'upcoming' && (
        <div className="space-y-6">
          {upcomingTrips.map((trip) => (
            <div key={trip.id} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-white">{trip.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          trip.status === 'Open' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                        }`}>
                          {trip.status}
                        </span>
                        <span className="px-2 py-1 bg-cyan-600 text-white rounded-full text-xs">
                          {trip.type}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-4">{trip.description}</p>
                      
                      {/* Trip Details */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div className="flex items-center space-x-2 text-gray-400">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{trip.destination}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{trip.startDate}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400">
                          <Users className="h-4 w-4" />
                          <span className="text-sm">{trip.participants}/{trip.maxParticipants}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400">
                          <DollarSign className="h-4 w-4" />
                          <span className="text-sm">{trip.budget}</span>
                        </div>
                      </div>
                      
                      {/* Organizer */}
                      <div className="flex items-center space-x-2 text-gray-400 mb-4">
                        <span className="text-sm">Organized by <span className="text-white">{trip.organizer}</span></span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div className="text-sm text-gray-400">
                      Duration: {trip.startDate} to {trip.endDate}
                    </div>
                    <div className="flex space-x-3">
                      {trip.status === 'Open' ? (
                        <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg transition-colors">
                          Join Trip
                        </button>
                      ) : (
                        <button disabled className="bg-gray-600 text-gray-400 px-4 py-2 rounded-lg cursor-not-allowed">
                          Trip Full
                        </button>
                      )}
                      <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Past Trips Tab */}
      {activeTab === 'past' && (
        <div className="space-y-6">
          {pastTrips.map((trip) => (
            <div key={trip.id} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{trip.title}</h3>
                      <p className="text-gray-300 mb-4">{trip.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center space-x-2 text-gray-400">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{trip.destination}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{trip.date}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400">
                          <Users className="h-4 w-4" />
                          <span className="text-sm">{trip.participants} participants</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div className="text-sm text-gray-400">
                      {trip.photos} photos available
                    </div>
                    <div className="flex space-x-3">
                      <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
                        View Photos
                      </button>
                      <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors">
                        Trip Report
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Travel Guidelines Tab */}
      {activeTab === 'guidelines' && (
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-6">Travel Guidelines</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-white mb-2">Planning a Trip</h4>
              <ul className="text-gray-300 text-sm space-y-1 ml-4">
                <li>• Submit trip proposal at least 30 days in advance</li>
                <li>• Include detailed itinerary and budget breakdown</li>
                <li>• Minimum 5 participants required for group trips</li>
                <li>• All trips must be approved by HR</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-white mb-2">Safety Guidelines</h4>
              <ul className="text-gray-300 text-sm space-y-1 ml-4">
                <li>• Travel insurance is mandatory for all participants</li>
                <li>• Share emergency contact information</li>
                <li>• Follow local laws and customs</li>
                <li>• Maintain group communication throughout the trip</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-white mb-2">Financial Guidelines</h4>
              <ul className="text-gray-300 text-sm space-y-1 ml-4">
                <li>• Individual payment responsibility</li>
                <li>• Advance payment of 50% required for booking</li>
                <li>• Refund policy applies as per terms</li>
                <li>• Company may provide partial sponsorship for team building trips</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-white mb-2">Code of Conduct</h4>
              <ul className="text-gray-300 text-sm space-y-1 ml-4">
                <li>• Maintain professional behavior</li>
                <li>• Respect local culture and environment</li>
                <li>• No consumption of alcohol if explicitly prohibited</li>
                <li>• Report any incidents to trip organizer immediately</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TravelPlans;
