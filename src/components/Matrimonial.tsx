
import { useState } from 'react';
import { Heart, Plus, MapPin, Calendar, User, Eye } from 'lucide-react';

const Matrimonial = () => {
  const [activeTab, setActiveTab] = useState('profiles');

  const profiles = [
    {
      id: 1,
      name: 'Priya Sharma',
      age: 28,
      profession: 'Software Engineer',
      location: 'Bangalore, India',
      education: 'B.Tech Computer Science',
      interests: ['Reading', 'Travel', 'Music', 'Cooking'],
      description: 'Looking for a caring and understanding life partner who shares similar values.',
      postedBy: 'Self',
      date: '2024-12-20',
      image: '/placeholder.svg',
      verified: true
    },
    {
      id: 2,
      name: 'Rahul Kumar',
      age: 30,
      profession: 'Product Manager',
      location: 'Mumbai, India',
      education: 'MBA, B.Tech',
      interests: ['Sports', 'Photography', 'Movies', 'Technology'],
      description: 'Family-oriented person seeking a compatible partner for marriage.',
      postedBy: 'Family',
      date: '2024-12-19',
      image: '/placeholder.svg',
      verified: true
    },
    {
      id: 3,
      name: 'Sneha Patel',
      age: 26,
      profession: 'Marketing Manager',
      location: 'Delhi, India',
      education: 'MBA Marketing',
      interests: ['Dancing', 'Fitness', 'Art', 'Social Work'],
      description: 'Ambitious professional looking for a supportive and loving partner.',
      postedBy: 'Self',
      date: '2024-12-18',
      image: '/placeholder.svg',
      verified: false
    }
  ];

  const successStories = [
    {
      id: 1,
      couple: 'Amit & Riya',
      marriageDate: '2024-11-15',
      description: 'Found each other through CEW Matrimonial and had a beautiful wedding ceremony.',
      image: '/placeholder.svg'
    },
    {
      id: 2,
      couple: 'Suresh & Kavya',
      marriageDate: '2024-10-22',
      description: 'Colleagues who connected through our platform and tied the knot.',
      image: '/placeholder.svg'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Heart className="h-8 w-8 text-pink-500" />
          <h2 className="text-2xl font-bold text-white">Matrimonial</h2>
        </div>
        <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <Plus className="h-4 w-4" />
          <span>Create Profile</span>
        </button>
      </div>

      {/* Privacy Notice */}
      <div className="bg-blue-900 bg-opacity-50 border border-blue-700 rounded-lg p-4">
        <p className="text-blue-300 text-sm">
          <strong>Privacy First:</strong> All matrimonial profiles are verified and accessible only to company employees. 
          Personal contact information is shared only with mutual consent.
        </p>
      </div>

      {/* Tabs */}
      <div className="bg-gray-800 rounded-lg p-1 border border-gray-700 inline-flex">
        <button
          onClick={() => setActiveTab('profiles')}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeTab === 'profiles'
              ? 'bg-pink-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Profiles
        </button>
        <button
          onClick={() => setActiveTab('success-stories')}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeTab === 'success-stories'
              ? 'bg-pink-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Success Stories
        </button>
        <button
          onClick={() => setActiveTab('guidelines')}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeTab === 'guidelines'
              ? 'bg-pink-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Guidelines
        </button>
      </div>

      {/* Profiles Tab */}
      {activeTab === 'profiles' && (
        <div className="space-y-6">
          {/* Search and Filter */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <select className="bg-gray-700 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-pink-500 focus:outline-none">
                <option>All Ages</option>
                <option>22-25</option>
                <option>26-30</option>
                <option>31-35</option>
                <option>36+</option>
              </select>
              <select className="bg-gray-700 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-pink-500 focus:outline-none">
                <option>All Locations</option>
                <option>Bangalore</option>
                <option>Mumbai</option>
                <option>Delhi</option>
                <option>Hyderabad</option>
              </select>
              <select className="bg-gray-700 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-pink-500 focus:outline-none">
                <option>All Professions</option>
                <option>Engineering</option>
                <option>Management</option>
                <option>Sales</option>
                <option>Marketing</option>
              </select>
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg transition-colors">
                Apply Filters
              </button>
            </div>
          </div>

          {/* Profile Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profiles.map((profile) => (
              <div key={profile.id} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div className="text-center mb-4">
                  <div className="relative inline-block">
                    <img
                      src={profile.image}
                      alt={profile.name}
                      className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
                    />
                    {profile.verified && (
                      <div className="absolute -top-1 -right-1 bg-green-500 rounded-full p-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{profile.name}</h3>
                  <p className="text-gray-400 text-sm">{profile.age} years • {profile.profession}</p>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-2 text-gray-300 text-sm">
                    <MapPin className="h-4 w-4" />
                    <span>{profile.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300 text-sm">
                    <User className="h-4 w-4" />
                    <span>{profile.education}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>Posted by {profile.postedBy}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4">{profile.description}</p>

                {/* Interests */}
                <div className="mb-4">
                  <p className="text-gray-400 text-xs mb-2">Interests</p>
                  <div className="flex flex-wrap gap-1">
                    {profile.interests.map((interest, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 rounded-md text-xs">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg text-sm transition-colors flex items-center justify-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>View Profile</span>
                  </button>
                  <button className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-lg text-sm transition-colors">
                    Express Interest
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Success Stories Tab */}
      {activeTab === 'success-stories' && (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Success Stories</h3>
            <p className="text-gray-400">Celebrating the beautiful unions made possible through CEW Matrimonial</p>
          </div>

          {successStories.map((story) => (
            <div key={story.id} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="md:flex items-center space-x-6">
                <img
                  src={story.image}
                  alt={story.couple}
                  className="w-32 h-32 rounded-lg object-cover mx-auto md:mx-0 mb-4 md:mb-0"
                />
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-xl font-semibold text-white mb-2">{story.couple}</h4>
                  <p className="text-pink-400 mb-2">Married on {story.marriageDate}</p>
                  <p className="text-gray-300">{story.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Guidelines Tab */}
      {activeTab === 'guidelines' && (
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-6">Matrimonial Guidelines</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-white mb-2">Profile Creation</h4>
              <ul className="text-gray-300 text-sm space-y-1 ml-4">
                <li>• Provide accurate and genuine information</li>
                <li>• Upload a clear, recent photograph</li>
                <li>• Complete all mandatory fields</li>
                <li>• Profiles require admin verification</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-white mb-2">Communication Guidelines</h4>
              <ul className="text-gray-300 text-sm space-y-1 ml-4">
                <li>• Be respectful and courteous in all interactions</li>
                <li>• No sharing of personal contact information initially</li>
                <li>• Use the platform's messaging system</li>
                <li>• Report any inappropriate behavior</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-white mb-2">Privacy & Safety</h4>
              <ul className="text-gray-300 text-sm space-y-1 ml-4">
                <li>• Profiles are visible only to verified employees</li>
                <li>• Meeting arrangements should be in public places</li>
                <li>• Inform family/friends about meetings</li>
                <li>• Report any suspicious activity immediately</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-white mb-2">Terms of Use</h4>
              <ul className="text-gray-300 text-sm space-y-1 ml-4">
                <li>• This service is free for all employees</li>
                <li>• Misuse may result in profile removal</li>
                <li>• Company is not liable for matrimonial outcomes</li>
                <li>• Users are responsible for their own decisions</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Matrimonial;
