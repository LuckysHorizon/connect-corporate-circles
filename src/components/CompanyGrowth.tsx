
import { useState } from 'react';
import { TrendingUp, Plus, Calendar, DollarSign, Users, Building } from 'lucide-react';

const CompanyGrowth = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stockData = [
    { month: 'Jan', price: 145.2, volume: '2.1M', change: '+2.3%' },
    { month: 'Feb', price: 152.8, volume: '2.4M', change: '+5.2%' },
    { month: 'Mar', price: 148.1, volume: '2.0M', change: '-3.1%' },
    { month: 'Apr', price: 156.9, volume: '2.8M', change: '+5.9%' },
    { month: 'May', price: 162.4, volume: '3.1M', change: '+3.5%' },
    { month: 'Jun', price: 158.7, volume: '2.6M', change: '-2.3%' }
  ];

  const milestones = [
    {
      id: 1,
      title: 'Q4 Revenue Target Achieved',
      description: 'Successfully reached $50M quarterly revenue, exceeding target by 12%',
      date: '2024-12-15',
      category: 'Financial',
      impact: 'High'
    },
    {
      id: 2,
      title: 'New Product Launch Success',
      description: 'AI-powered analytics platform launched with 10,000+ early adopters',
      date: '2024-11-28',
      category: 'Product',
      impact: 'High'
    },
    {
      id: 3,
      title: 'International Expansion',
      description: 'Opened new offices in London and Singapore, hiring 200+ employees',
      date: '2024-10-12',
      category: 'Expansion',
      impact: 'Medium'
    }
  ];

  const metrics = [
    { label: 'Stock Price', value: '$158.70', change: '+12.5%', icon: DollarSign, color: 'text-green-400' },
    { label: 'Market Cap', value: '$2.4B', change: '+8.3%', icon: TrendingUp, color: 'text-green-400' },
    { label: 'Revenue (YTD)', value: '$180M', change: '+15.2%', icon: DollarSign, color: 'text-green-400' },
    { label: 'Employees', value: '1,247', change: '+23.1%', icon: Users, color: 'text-green-400' },
    { label: 'Offices', value: '12', change: '+3', icon: Building, color: 'text-green-400' },
    { label: 'Products', value: '8', change: '+2', icon: TrendingUp, color: 'text-green-400' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <TrendingUp className="h-8 w-8 text-green-500" />
          <h2 className="text-2xl font-bold text-white">Company Growth</h2>
        </div>
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <Plus className="h-4 w-4" />
          <span>Add Milestone</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-gray-800 rounded-lg p-1 border border-gray-700 inline-flex">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeTab === 'overview'
              ? 'bg-green-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab('stock')}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeTab === 'stock'
              ? 'bg-green-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Stock Performance
        </button>
        <button
          onClick={() => setActiveTab('milestones')}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeTab === 'milestones'
              ? 'bg-green-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Milestones
        </button>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">{metric.label}</p>
                      <p className="text-2xl font-bold text-white mt-1">{metric.value}</p>
                      <p className={`text-sm mt-1 ${metric.color}`}>{metric.change}</p>
                    </div>
                    <div className="bg-green-600 p-3 rounded-lg">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Growth Chart Placeholder */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4">Revenue Growth Trend</h3>
            <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-green-500 mx-auto mb-2" />
                <p className="text-gray-300">Interactive Chart Coming Soon</p>
                <p className="text-gray-400 text-sm">Revenue up 15.2% YoY</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stock Performance Tab */}
      {activeTab === 'stock' && (
        <div className="space-y-6">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">Stock Performance</h3>
              <div className="text-right">
                <p className="text-2xl font-bold text-green-400">$158.70</p>
                <p className="text-green-400 text-sm">+$2.30 (1.47%) today</p>
              </div>
            </div>
            
            {/* Stock Data Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left text-gray-400 text-sm py-2">Month</th>
                    <th className="text-left text-gray-400 text-sm py-2">Price</th>
                    <th className="text-left text-gray-400 text-sm py-2">Volume</th>
                    <th className="text-left text-gray-400 text-sm py-2">Change</th>
                  </tr>
                </thead>
                <tbody>
                  {stockData.map((data, index) => (
                    <tr key={index} className="border-b border-gray-700">
                      <td className="text-white py-3">{data.month}</td>
                      <td className="text-white py-3">${data.price}</td>
                      <td className="text-gray-300 py-3">{data.volume}</td>
                      <td className={`py-3 ${
                        data.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {data.change}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4">Market Insights</h3>
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="font-medium text-white mb-2">Analyst Rating: BUY</h4>
                <p className="text-gray-300 text-sm">Strong fundamentals and growth trajectory support positive outlook.</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="font-medium text-white mb-2">52-Week Range</h4>
                <p className="text-gray-300 text-sm">$128.45 - $165.20</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Milestones Tab */}
      {activeTab === 'milestones' && (
        <div className="space-y-6">
          {milestones.map((milestone) => (
            <div key={milestone.id} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-semibold text-white">{milestone.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      milestone.impact === 'High' ? 'bg-red-600 text-white' :
                      milestone.impact === 'Medium' ? 'bg-yellow-600 text-white' :
                      'bg-green-600 text-white'
                    }`}>
                      {milestone.impact} Impact
                    </span>
                  </div>
                  <p className="text-gray-300 mb-3">{milestone.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{milestone.date}</span>
                    </span>
                    <span className="px-2 py-1 bg-gray-700 rounded-full">{milestone.category}</span>
                  </div>
                </div>
                <TrendingUp className="h-6 w-6 text-green-500 flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CompanyGrowth;
