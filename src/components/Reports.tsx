
import { useState } from 'react';
import { FileText, Download, Eye, Lock, Calendar, BarChart3 } from 'lucide-react';

const Reports = () => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);

  const reports = [
    {
      id: 1,
      title: 'Employee Engagement Report',
      type: 'Admin Report',
      description: 'Comprehensive analysis of employee engagement across all departments',
      date: '2024-12-20',
      size: '2.4 MB',
      format: 'PDF',
      protected: true,
      downloadCount: 12
    },
    {
      id: 2,
      title: 'Birthday Analytics Report',
      type: 'Bank Report',
      description: 'Monthly birthday celebration statistics and budget analysis',
      date: '2024-12-19',
      size: '1.8 MB',
      format: 'Excel',
      protected: true,
      downloadCount: 8
    },
    {
      id: 3,
      title: 'Property Listings Summary',
      type: 'Admin Report',
      description: 'Summary of all property sales and rental listings by employees',
      date: '2024-12-18',
      size: '3.2 MB',
      format: 'PDF',
      protected: false,
      downloadCount: 15
    },
    {
      id: 4,
      title: 'Innovation Ideas Tracker',
      type: 'Admin Report',
      description: 'Status and implementation progress of innovative ideas submitted',
      date: '2024-12-17',
      size: '1.5 MB',
      format: 'PDF',
      protected: true,
      downloadCount: 23
    },
    {
      id: 5,
      title: 'Travel & Events Budget Report',
      type: 'Bank Report',
      description: 'Financial summary of all travel plans and company events',
      date: '2024-12-16',
      size: '2.1 MB',
      format: 'Excel',
      protected: true,
      downloadCount: 7
    },
    {
      id: 6,
      title: 'Referral Program Performance',
      type: 'Admin Report',
      description: 'Employee referral statistics and success rates',
      date: '2024-12-15',
      size: '1.9 MB',
      format: 'PDF',
      protected: false,
      downloadCount: 19
    }
  ];

  const reportCategories = ['All Reports', 'Admin Report', 'Bank Report'];
  const [activeCategory, setActiveCategory] = useState('All Reports');

  const filteredReports = activeCategory === 'All Reports' 
    ? reports 
    : reports.filter(report => report.type === activeCategory);

  const handleDownload = (report) => {
    if (report.protected) {
      setSelectedReport(report);
      setShowPasswordModal(true);
    } else {
      // Direct download for non-protected reports
      console.log(`Downloading ${report.title}`);
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // Handle password verification here
    setShowPasswordModal(false);
    setSelectedReport(null);
    console.log(`Downloading protected report: ${selectedReport?.title}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <FileText className="h-8 w-8 text-indigo-500" />
          <h2 className="text-2xl font-bold text-white">Reports</h2>
        </div>
        <div className="flex space-x-3">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
            <BarChart3 className="h-4 w-4" />
            <span>Generate Report</span>
          </button>
        </div>
      </div>

      {/* Report Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center space-x-3">
            <FileText className="h-8 w-8 text-indigo-500" />
            <div>
              <p className="text-gray-400 text-sm">Total Reports</p>
              <p className="text-2xl font-bold text-white">{reports.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center space-x-3">
            <Lock className="h-8 w-8 text-yellow-500" />
            <div>
              <p className="text-gray-400 text-sm">Protected Reports</p>
              <p className="text-2xl font-bold text-white">{reports.filter(r => r.protected).length}</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center space-x-3">
            <Download className="h-8 w-8 text-green-500" />
            <div>
              <p className="text-gray-400 text-sm">Total Downloads</p>
              <p className="text-2xl font-bold text-white">{reports.reduce((sum, r) => sum + r.downloadCount, 0)}</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center space-x-3">
            <Calendar className="h-8 w-8 text-blue-500" />
            <div>
              <p className="text-gray-400 text-sm">This Month</p>
              <p className="text-2xl font-bold text-white">6</p>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
        <div className="flex flex-wrap gap-2">
          {reportCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                activeCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Reports List */}
      <div className="space-y-4">
        {filteredReports.map((report) => (
          <div key={report.id} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-xl font-semibold text-white">{report.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    report.type === 'Admin Report' ? 'bg-blue-600 text-white' : 'bg-green-600 text-white'
                  }`}>
                    {report.type}
                  </span>
                  {report.protected && (
                    <Lock className="h-4 w-4 text-yellow-500" />
                  )}
                </div>
                <p className="text-gray-300 mb-4">{report.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{report.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FileText className="h-4 w-4" />
                    <span>{report.format}</span>
                  </div>
                  <div>
                    <span>Size: {report.size}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Download className="h-4 w-4" />
                    <span>{report.downloadCount} downloads</span>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-3 ml-6">
                <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                  <Eye className="h-4 w-4" />
                  <span>Preview</span>
                </button>
                <button 
                  onClick={() => handleDownload(report)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                >
                  <Download className="h-4 w-4" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Password Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md border border-gray-700">
            <div className="flex items-center space-x-3 mb-4">
              <Lock className="h-6 w-6 text-yellow-500" />
              <h3 className="text-xl font-semibold text-white">Protected Report Access</h3>
            </div>
            
            <p className="text-gray-300 mb-4">
              This report is password protected. Please enter the access password to download:
            </p>
            <p className="text-white font-medium mb-4">{selectedReport?.title}</p>
            
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Access Password
                </label>
                <input
                  type="password"
                  className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none"
                  placeholder="Enter password..."
                  required
                />
              </div>
              
              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition-colors"
                >
                  Download Report
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowPasswordModal(false);
                    setSelectedReport(null);
                  }}
                  className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Report Generation Guidelines */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-semibold text-white mb-4">Report Generation Guidelines</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-white mb-2">Admin Reports</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Generated monthly by system administrators</li>
              <li>• Include comprehensive analytics and insights</li>
              <li>• Password protected for confidentiality</li>
              <li>• Available for department heads and above</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-white mb-2">Bank Reports</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Financial summaries and budget analysis</li>
              <li>• Generated by finance team</li>
              <li>• Restricted access for authorized personnel</li>
              <li>• Includes expenditure and cost breakdowns</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
