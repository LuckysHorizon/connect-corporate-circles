
import { useState } from 'react';
import { Briefcase, Plus, Award, Calendar, Building, ExternalLink } from 'lucide-react';

const WorkExperience = () => {
  const [activeTab, setActiveTab] = useState('insights');

  const insights = [
    {
      id: 1,
      title: 'Transitioning from Junior to Senior Developer',
      content: 'Key lessons learned during my journey from junior to senior developer role, including technical and soft skills development.',
      author: 'Sarah Johnson',
      position: 'Senior Software Engineer',
      department: 'Engineering',
      date: '2024-12-20',
      experience: '5 years',
      likes: 32,
      comments: 12,
      tags: ['Career Growth', 'Development', 'Leadership']
    },
    {
      id: 2,
      title: 'Managing Remote Teams Effectively',
      content: 'Strategies and tools that helped me successfully manage distributed teams across different time zones.',
      author: 'Mike Chen',
      position: 'Engineering Manager',
      department: 'Engineering',
      date: '2024-12-19',
      experience: '8 years',
      likes: 28,
      comments: 8,
      tags: ['Management', 'Remote Work', 'Team Building']
    },
    {
      id: 3,
      title: 'Product Launch Lessons from 10+ Years',
      content: 'Critical insights from launching multiple products, common pitfalls to avoid, and success strategies.',
      author: 'Emily Davis',
      position: 'Product Manager',
      department: 'Product',
      date: '2024-12-18',
      experience: '10 years',
      likes: 45,
      comments: 15,
      tags: ['Product Management', 'Launch Strategy', 'Growth']
    }
  ];

  const mentorship = [
    {
      id: 1,
      mentor: 'Alex Kumar',
      mentee: 'John Smith',
      area: 'Frontend Development',
      duration: '6 months',
      status: 'Active',
      progress: 75
    },
    {
      id: 2,
      mentor: 'Lisa Wang',
      mentee: 'Maria Garcia',
      area: 'Data Analysis',
      duration: '4 months',
      status: 'Active',
      progress: 60
    },
    {
      id: 3,
      mentor: 'Robert Taylor',
      mentee: 'David Wilson',
      area: 'Project Management',
      duration: '8 months',
      status: 'Completed',
      progress: 100
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Briefcase className="h-8 w-8 text-purple-500" />
          <h2 className="text-2xl font-bold text-white">Work Experience</h2>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <Plus className="h-4 w-4" />
          <span>Share Experience</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-gray-800 rounded-lg p-1 border border-gray-700 inline-flex">
        <button
          onClick={() => setActiveTab('insights')}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeTab === 'insights'
              ? 'bg-purple-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Career Insights
        </button>
        <button
          onClick={() => setActiveTab('mentorship')}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeTab === 'mentorship'
              ? 'bg-purple-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Mentorship Program
        </button>
        <button
          onClick={() => setActiveTab('achievements')}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeTab === 'achievements'
              ? 'bg-purple-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Achievements
        </button>
      </div>

      {/* Career Insights Tab */}
      {activeTab === 'insights' && (
        <div className="space-y-6">
          {insights.map((insight) => (
            <div key={insight.id} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{insight.title}</h3>
                  <p className="text-gray-300 mb-4">{insight.content}</p>
                  
                  {/* Author Info */}
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="bg-purple-600 p-2 rounded-full">
                      <Briefcase className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{insight.author}</p>
                      <p className="text-gray-400 text-sm">{insight.position} • {insight.department}</p>
                    </div>
                    <div className="text-gray-400 text-sm">
                      <span>{insight.experience} experience</span>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {insight.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 rounded-md text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span>{insight.likes} likes</span>
                  <span>{insight.comments} comments</span>
                  <span>{insight.date}</span>
                </div>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Mentorship Program Tab */}
      {activeTab === 'mentorship' && (
        <div className="space-y-6">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4">Active Mentorship Programs</h3>
            <div className="space-y-4">
              {mentorship.map((program) => (
                <div key={program.id} className="bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-white font-medium">
                        {program.mentor} → {program.mentee}
                      </p>
                      <p className="text-gray-400 text-sm">{program.area}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      program.status === 'Active' ? 'bg-green-600 text-white' : 'bg-blue-600 text-white'
                    }`}>
                      {program.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{program.duration}</span>
                    <div className="flex items-center space-x-2">
                      <div className="bg-gray-600 rounded-full h-2 w-24">
                        <div 
                          className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${program.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-purple-400 text-sm">{program.progress}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex space-x-3">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
                Become a Mentor
              </button>
              <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors">
                Find a Mentor
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Achievements Tab */}
      {activeTab === 'achievements' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 text-center">
              <Award className="h-12 w-12 text-yellow-500 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Employee of the Month</h3>
              <p className="text-gray-400 text-sm mb-2">December 2024</p>
              <p className="text-gray-300 text-sm">Outstanding contribution to project delivery</p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 text-center">
              <Building className="h-12 w-12 text-blue-500 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">5 Years of Service</h3>
              <p className="text-gray-400 text-sm mb-2">November 2024</p>
              <p className="text-gray-300 text-sm">Dedicated service milestone</p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 text-center">
              <Award className="h-12 w-12 text-green-500 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Innovation Award</h3>
              <p className="text-gray-400 text-sm mb-2">October 2024</p>
              <p className="text-gray-300 text-sm">Best innovative solution implementation</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkExperience;
