
import { useState } from 'react';
import { Code, Plus, BookOpen, ExternalLink, Search, Filter } from 'lucide-react';

const TechnicalDroughts = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const droughts = [
    {
      id: 1,
      title: 'React 18 Performance Optimization Techniques',
      description: 'Deep dive into React 18 concurrent features and how to optimize your applications for better performance.',
      author: 'Alex Kumar',
      department: 'Frontend Engineering',
      date: '2024-12-20',
      category: 'React',
      difficulty: 'Intermediate',
      readTime: '12 min',
      tags: ['React', 'Performance', 'Optimization'],
      likes: 45,
      comments: 12
    },
    {
      id: 2,
      title: 'Microservices Architecture Best Practices',
      description: 'Guidelines for building scalable microservices with proper service discovery, load balancing, and monitoring.',
      author: 'Sarah Chen',
      department: 'Backend Engineering',
      date: '2024-12-19',
      category: 'Architecture',
      difficulty: 'Advanced',
      readTime: '18 min',
      tags: ['Microservices', 'Architecture', 'DevOps'],
      likes: 38,
      comments: 8
    },
    {
      id: 3,
      title: 'Database Query Optimization in PostgreSQL',
      description: 'Techniques for optimizing complex queries, indexing strategies, and performance monitoring.',
      author: 'Mike Johnson',
      department: 'Database Team',
      date: '2024-12-18',
      category: 'Database',
      difficulty: 'Intermediate',
      readTime: '15 min',
      tags: ['PostgreSQL', 'Database', 'Performance'],
      likes: 29,
      comments: 6
    }
  ];

  const categories = ['all', 'React', 'Architecture', 'Database', 'DevOps', 'Security', 'AI/ML'];

  const filteredDroughts = activeCategory === 'all' 
    ? droughts 
    : droughts.filter(drought => drought.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Code className="h-8 w-8 text-green-500" />
          <h2 className="text-2xl font-bold text-white">Technical Droughts</h2>
        </div>
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <Plus className="h-4 w-4" />
          <span>Share Knowledge</span>
        </button>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search technical topics..."
              className="w-full bg-gray-700 text-white pl-10 pr-4 py-2 rounded-lg border border-gray-600 focus:border-green-500 focus:outline-none"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <select className="bg-gray-700 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-green-500 focus:outline-none">
              <option>All Difficulty</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mt-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                activeCategory === category
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Knowledge Base Articles */}
      <div className="grid gap-6">
        {filteredDroughts.map((drought) => (
          <div key={drought.id} className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-green-500 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-xl font-semibold text-white hover:text-green-400 cursor-pointer">
                    {drought.title}
                  </h3>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    drought.difficulty === 'Advanced' ? 'bg-red-600 text-white' :
                    drought.difficulty === 'Intermediate' ? 'bg-yellow-600 text-white' :
                    'bg-green-600 text-white'
                  }`}>
                    {drought.difficulty}
                  </span>
                </div>
                <p className="text-gray-300 mb-3">{drought.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {drought.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 rounded-md text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                {/* Author and Meta Info */}
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                  <span>By {drought.author}</span>
                  <span>•</span>
                  <span>{drought.department}</span>
                  <span>•</span>
                  <span>{drought.date}</span>
                  <span>•</span>
                  <span>{drought.readTime} read</span>
                </div>
              </div>
              <BookOpen className="h-6 w-6 text-green-500 flex-shrink-0" />
            </div>
            
            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-700">
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>{drought.likes} likes</span>
                <span>{drought.comments} comments</span>
              </div>
              <div className="flex space-x-3">
                <button className="text-green-400 hover:text-green-300 transition-colors">
                  <ExternalLink className="h-4 w-4" />
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                  Read Article
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Resources */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-semibold text-white mb-4">Featured Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h4 className="font-medium text-white mb-2">Internal Documentation</h4>
            <p className="text-gray-300 text-sm mb-3">Company-specific technical guidelines and standards.</p>
            <button className="text-green-400 hover:text-green-300 text-sm">Access Docs →</button>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h4 className="font-medium text-white mb-2">Code Review Guidelines</h4>
            <p className="text-gray-300 text-sm mb-3">Best practices for conducting effective code reviews.</p>
            <button className="text-green-400 hover:text-green-300 text-sm">View Guidelines →</button>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h4 className="font-medium text-white mb-2">Tech Stack Reference</h4>
            <p className="text-gray-300 text-sm mb-3">Current technologies and frameworks in use.</p>
            <button className="text-green-400 hover:text-green-300 text-sm">View Stack →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalDroughts;
