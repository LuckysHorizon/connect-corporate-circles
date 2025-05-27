
import { useState } from 'react';
import { Lightbulb, Plus, ThumbsUp, MessageSquare, Share, Search } from 'lucide-react';

const InnovativeThoughts = () => {
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const ideas = [
    {
      id: 1,
      title: 'AI-Powered Employee Wellness Platform',
      description: 'Implement an AI system that monitors employee stress levels and suggests personalized wellness activities.',
      author: 'Sarah Johnson',
      department: 'Technology',
      date: '2024-12-20',
      likes: 24,
      comments: 8,
      category: 'Wellness',
      status: 'Under Review'
    },
    {
      id: 2,
      title: 'Green Energy Initiative for Office Buildings',
      description: 'Proposal to implement solar panels and smart energy management systems across all office locations.',
      author: 'Mike Chen',
      department: 'Operations',
      date: '2024-12-19',
      likes: 31,
      comments: 12,
      category: 'Sustainability',
      status: 'Approved'
    },
    {
      id: 3,
      title: 'Virtual Reality Training Modules',
      description: 'Create immersive VR training experiences for new employee onboarding and skill development.',
      author: 'Emily Davis',
      department: 'HR',
      date: '2024-12-18',
      likes: 18,
      comments: 5,
      category: 'Training',
      status: 'In Progress'
    }
  ];

  const categories = ['All', 'Technology', 'Wellness', 'Sustainability', 'Training', 'Process Improvement'];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Lightbulb className="h-8 w-8 text-yellow-500" />
          <h2 className="text-2xl font-bold text-white">Innovative Thoughts</h2>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>Share Your Idea</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search innovative ideas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-700 text-white pl-10 pr-4 py-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="flex space-x-2">
            {categories.map((category) => (
              <button
                key={category}
                className="px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* New Idea Form */}
      {showForm && (
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-4">Share Your Innovative Idea</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Title</label>
              <input
                type="text"
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                placeholder="Enter your idea title..."
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Category</label>
              <select className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none">
                <option>Select Category</option>
                <option>Technology</option>
                <option>Wellness</option>
                <option>Sustainability</option>
                <option>Training</option>
                <option>Process Improvement</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Description</label>
              <textarea
                rows={4}
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                placeholder="Describe your innovative idea in detail..."
              ></textarea>
            </div>
            <div className="flex space-x-3">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Submit Idea
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Ideas List */}
      <div className="grid gap-6">
        {ideas.map((idea) => (
          <div key={idea.id} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-xl font-semibold text-white">{idea.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    idea.status === 'Approved' ? 'bg-green-600 text-white' :
                    idea.status === 'In Progress' ? 'bg-blue-600 text-white' :
                    'bg-yellow-600 text-white'
                  }`}>
                    {idea.status}
                  </span>
                </div>
                <p className="text-gray-300 mb-3">{idea.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span>By {idea.author}</span>
                  <span>•</span>
                  <span>{idea.department}</span>
                  <span>•</span>
                  <span>{idea.date}</span>
                  <span className="px-2 py-1 bg-gray-700 rounded-full">{idea.category}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 pt-4 border-t border-gray-700">
              <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <ThumbsUp className="h-4 w-4" />
                <span>{idea.likes}</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <MessageSquare className="h-4 w-4" />
                <span>{idea.comments}</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <Share className="h-4 w-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InnovativeThoughts;
