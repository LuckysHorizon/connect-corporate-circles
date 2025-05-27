
import { useState } from 'react';
import { Users, Plus, Briefcase, DollarSign, Clock, Award } from 'lucide-react';

const EmployeeReferral = () => {
  const [activeTab, setActiveTab] = useState('open-positions');

  const openPositions = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      department: 'Engineering',
      location: 'Remote / New York',
      type: 'Full-time',
      experience: '5+ years',
      bonus: '$5,000',
      description: 'We are looking for a senior software engineer to join our growing team.',
      skills: ['React', 'Node.js', 'Python', 'AWS'],
      postedDate: '2024-12-20',
      urgency: 'High'
    },
    {
      id: 2,
      title: 'Product Manager',
      department: 'Product',
      location: 'San Francisco',
      type: 'Full-time',
      experience: '3+ years',
      bonus: '$3,500',
      description: 'Lead product strategy and development for our core platform.',
      skills: ['Product Strategy', 'Analytics', 'Agile', 'User Research'],
      postedDate: '2024-12-19',
      urgency: 'Medium'
    },
    {
      id: 3,
      title: 'UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      experience: '2+ years',
      bonus: '$2,500',
      description: 'Create exceptional user experiences for our products.',
      skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
      postedDate: '2024-12-18',
      urgency: 'Low'
    }
  ];

  const referralHistory = [
    {
      id: 1,
      candidateName: 'Alice Johnson',
      position: 'Frontend Developer',
      referredBy: 'John Smith',
      status: 'Hired',
      bonus: '$4,000',
      date: '2024-11-15'
    },
    {
      id: 2,
      candidateName: 'Bob Wilson',
      position: 'Data Scientist',
      referredBy: 'Sarah Chen',
      status: 'Interview',
      bonus: '$3,000',
      date: '2024-12-10'
    },
    {
      id: 3,
      candidateName: 'Carol Davis',
      position: 'Marketing Manager',
      referredBy: 'Mike Taylor',
      status: 'Rejected',
      bonus: '-',
      date: '2024-11-28'
    }
  ];

  const leaderboard = [
    { rank: 1, name: 'Sarah Chen', referrals: 8, hired: 5, earnings: '$18,500' },
    { rank: 2, name: 'John Smith', referrals: 6, hired: 3, earnings: '$12,000' },
    { rank: 3, name: 'Mike Taylor', referrals: 5, hired: 2, earnings: '$8,500' },
    { rank: 4, name: 'Lisa Wang', referrals: 4, hired: 2, earnings: '$7,000' },
    { rank: 5, name: 'Alex Kumar', referrals: 3, hired: 1, earnings: '$3,500' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Users className="h-8 w-8 text-orange-500" />
          <h2 className="text-2xl font-bold text-white">Employee Referral</h2>
        </div>
        <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <Plus className="h-4 w-4" />
          <span>Refer Candidate</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center space-x-3">
            <Briefcase className="h-8 w-8 text-orange-500" />
            <div>
              <p className="text-gray-400 text-sm">Open Positions</p>
              <p className="text-2xl font-bold text-white">24</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center space-x-3">
            <Users className="h-8 w-8 text-green-500" />
            <div>
              <p className="text-gray-400 text-sm">Total Referrals</p>
              <p className="text-2xl font-bold text-white">156</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center space-x-3">
            <Award className="h-8 w-8 text-blue-500" />
            <div>
              <p className="text-gray-400 text-sm">Successful Hires</p>
              <p className="text-2xl font-bold text-white">48</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center space-x-3">
            <DollarSign className="h-8 w-8 text-yellow-500" />
            <div>
              <p className="text-gray-400 text-sm">Total Bonuses</p>
              <p className="text-2xl font-bold text-white">$240K</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-gray-800 rounded-lg p-1 border border-gray-700 inline-flex">
        <button
          onClick={() => setActiveTab('open-positions')}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeTab === 'open-positions'
              ? 'bg-orange-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Open Positions
        </button>
        <button
          onClick={() => setActiveTab('my-referrals')}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeTab === 'my-referrals'
              ? 'bg-orange-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          My Referrals
        </button>
        <button
          onClick={() => setActiveTab('leaderboard')}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeTab === 'leaderboard'
              ? 'bg-orange-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Leaderboard
        </button>
      </div>

      {/* Open Positions Tab */}
      {activeTab === 'open-positions' && (
        <div className="space-y-6">
          {openPositions.map((position) => (
            <div key={position.id} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-semibold text-white">{position.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      position.urgency === 'High' ? 'bg-red-600 text-white' :
                      position.urgency === 'Medium' ? 'bg-yellow-600 text-white' :
                      'bg-green-600 text-white'
                    }`}>
                      {position.urgency} Priority
                    </span>
                  </div>
                  <p className="text-gray-300 mb-3">{position.description}</p>
                  
                  {/* Job Details */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-gray-400 text-sm">Department</p>
                      <p className="text-white">{position.department}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white">{position.location}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Experience</p>
                      <p className="text-white">{position.experience}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Referral Bonus</p>
                      <p className="text-orange-400 font-bold">{position.bonus}</p>
                    </div>
                  </div>
                  
                  {/* Skills */}
                  <div className="mb-4">
                    <p className="text-gray-400 text-sm mb-2">Required Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {position.skills.map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 rounded-md text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <Briefcase className="h-6 w-6 text-orange-500 flex-shrink-0" />
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Clock className="h-4 w-4" />
                  <span>Posted {position.postedDate}</span>
                </div>
                <div className="flex space-x-3">
                  <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors">
                    Refer Someone
                  </button>
                  <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* My Referrals Tab */}
      {activeTab === 'my-referrals' && (
        <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-white mb-4">My Referral History</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-700">
                <tr>
                  <th className="text-left text-gray-300 px-6 py-3">Candidate</th>
                  <th className="text-left text-gray-300 px-6 py-3">Position</th>
                  <th className="text-left text-gray-300 px-6 py-3">Status</th>
                  <th className="text-left text-gray-300 px-6 py-3">Bonus</th>
                  <th className="text-left text-gray-300 px-6 py-3">Date</th>
                </tr>
              </thead>
              <tbody>
                {referralHistory.map((referral) => (
                  <tr key={referral.id} className="border-b border-gray-700">
                    <td className="text-white px-6 py-4">{referral.candidateName}</td>
                    <td className="text-white px-6 py-4">{referral.position}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        referral.status === 'Hired' ? 'bg-green-600 text-white' :
                        referral.status === 'Interview' ? 'bg-blue-600 text-white' :
                        'bg-red-600 text-white'
                      }`}>
                        {referral.status}
                      </span>
                    </td>
                    <td className="text-orange-400 px-6 py-4">{referral.bonus}</td>
                    <td className="text-gray-400 px-6 py-4">{referral.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Leaderboard Tab */}
      {activeTab === 'leaderboard' && (
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-6">Referral Leaderboard</h3>
          <div className="space-y-4">
            {leaderboard.map((person) => (
              <div key={person.rank} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                    person.rank === 1 ? 'bg-yellow-500 text-white' :
                    person.rank === 2 ? 'bg-gray-400 text-white' :
                    person.rank === 3 ? 'bg-orange-500 text-white' :
                    'bg-gray-600 text-white'
                  }`}>
                    {person.rank}
                  </div>
                  <div>
                    <p className="text-white font-medium">{person.name}</p>
                    <p className="text-gray-400 text-sm">{person.referrals} referrals • {person.hired} hired</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-green-400 font-bold">{person.earnings}</p>
                  <p className="text-gray-400 text-sm">Total earned</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeReferral;
