
import { useState } from 'react';
import { Users, Plus, Search, Settings, Shield, Eye, Edit, Trash2 } from 'lucide-react';

const UserManagement = () => {
  const [activeTab, setActiveTab] = useState('all-users');
  const [searchTerm, setSearchTerm] = useState('');

  const users = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@company.com',
      department: 'Engineering',
      position: 'Senior Software Engineer',
      role: 'User',
      status: 'Active',
      lastLogin: '2024-12-20 14:30',
      joinDate: '2022-03-15',
      avatar: '/placeholder.svg'
    },
    {
      id: 2,
      name: 'Mike Chen',
      email: 'mike.chen@company.com',
      department: 'Marketing',
      position: 'Marketing Manager',
      role: 'Admin',
      status: 'Active',
      lastLogin: '2024-12-20 12:15',
      joinDate: '2021-08-22',
      avatar: '/placeholder.svg'
    },
    {
      id: 3,
      name: 'Emily Davis',
      email: 'emily.davis@company.com',
      department: 'HR',
      position: 'HR Specialist',
      role: 'Moderator',
      status: 'Active',
      lastLogin: '2024-12-19 16:45',
      joinDate: '2023-01-10',
      avatar: '/placeholder.svg'
    },
    {
      id: 4,
      name: 'Alex Kumar',
      email: 'alex.kumar@company.com',
      department: 'Sales',
      position: 'Sales Executive',
      role: 'User',
      status: 'Inactive',
      lastLogin: '2024-12-15 10:20',
      joinDate: '2023-05-18',
      avatar: '/placeholder.svg'
    }
  ];

  const adminActions = [
    {
      id: 1,
      action: 'User Registration',
      user: 'System',
      target: 'New Employee Onboarding',
      timestamp: '2024-12-20 15:30',
      type: 'Info'
    },
    {
      id: 2,
      action: 'Role Changed',
      user: 'Mike Chen',
      target: 'Emily Davis → Moderator',
      timestamp: '2024-12-20 14:15',
      type: 'Warning'
    },
    {
      id: 3,
      action: 'Account Suspended',
      user: 'System',
      target: 'Inactive User Cleanup',
      timestamp: '2024-12-19 09:00',
      type: 'Error'
    }
  ];

  const departments = ['All Departments', 'Engineering', 'Marketing', 'HR', 'Sales', 'Operations', 'Finance'];
  const roles = ['All Roles', 'Super Admin', 'Admin', 'Moderator', 'User'];
  const statuses = ['All Status', 'Active', 'Inactive', 'Suspended'];

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Settings className="h-8 w-8 text-red-500" />
          <h2 className="text-2xl font-bold text-white">User Management</h2>
        </div>
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <Plus className="h-4 w-4" />
          <span>Add User</span>
        </button>
      </div>

      {/* User Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center space-x-3">
            <Users className="h-8 w-8 text-blue-500" />
            <div>
              <p className="text-gray-400 text-sm">Total Users</p>
              <p className="text-2xl font-bold text-white">{users.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center space-x-3">
            <Shield className="h-8 w-8 text-green-500" />
            <div>
              <p className="text-gray-400 text-sm">Active Users</p>
              <p className="text-2xl font-bold text-white">{users.filter(u => u.status === 'Active').length}</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center space-x-3">
            <Settings className="h-8 w-8 text-yellow-500" />
            <div>
              <p className="text-gray-400 text-sm">Admins</p>
              <p className="text-2xl font-bold text-white">{users.filter(u => u.role === 'Admin').length}</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center space-x-3">
            <Users className="h-8 w-8 text-red-500" />
            <div>
              <p className="text-gray-400 text-sm">Inactive Users</p>
              <p className="text-2xl font-bold text-white">{users.filter(u => u.status === 'Inactive').length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-gray-800 rounded-lg p-1 border border-gray-700 inline-flex">
        <button
          onClick={() => setActiveTab('all-users')}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeTab === 'all-users'
              ? 'bg-red-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          All Users
        </button>
        <button
          onClick={() => setActiveTab('admin-logs')}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeTab === 'admin-logs'
              ? 'bg-red-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Admin Logs
        </button>
        <button
          onClick={() => setActiveTab('permissions')}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeTab === 'permissions'
              ? 'bg-red-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Permissions
        </button>
      </div>

      {/* All Users Tab */}
      {activeTab === 'all-users' && (
        <div className="space-y-6">
          {/* Search and Filters */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search users..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-gray-700 text-white pl-10 pr-4 py-2 rounded-lg border border-gray-600 focus:border-red-500 focus:outline-none"
                />
              </div>
              <select className="bg-gray-700 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-red-500 focus:outline-none">
                {departments.map(dept => (
                  <option key={dept}>{dept}</option>
                ))}
              </select>
              <select className="bg-gray-700 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-red-500 focus:outline-none">
                {roles.map(role => (
                  <option key={role}>{role}</option>
                ))}
              </select>
              <select className="bg-gray-700 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-red-500 focus:outline-none">
                {statuses.map(status => (
                  <option key={status}>{status}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Users Table */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="text-left text-gray-300 px-6 py-3">User</th>
                    <th className="text-left text-gray-300 px-6 py-3">Department</th>
                    <th className="text-left text-gray-300 px-6 py-3">Role</th>
                    <th className="text-left text-gray-300 px-6 py-3">Status</th>
                    <th className="text-left text-gray-300 px-6 py-3">Last Login</th>
                    <th className="text-left text-gray-300 px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="border-b border-gray-700 hover:bg-gray-750">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <p className="text-white font-medium">{user.name}</p>
                            <p className="text-gray-400 text-sm">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-white">{user.department}</p>
                          <p className="text-gray-400 text-sm">{user.position}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          user.role === 'Admin' ? 'bg-red-600 text-white' :
                          user.role === 'Moderator' ? 'bg-yellow-600 text-white' :
                          'bg-blue-600 text-white'
                        }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          user.status === 'Active' ? 'bg-green-600 text-white' : 'bg-gray-600 text-white'
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-300 text-sm">
                        {user.lastLogin}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex space-x-2">
                          <button className="text-blue-400 hover:text-blue-300 transition-colors">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button className="text-yellow-400 hover:text-yellow-300 transition-colors">
                            <Edit className="h-4 w-4" />
                          </button>
                          <button className="text-red-400 hover:text-red-300 transition-colors">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Admin Logs Tab */}
      {activeTab === 'admin-logs' && (
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-4">Recent Admin Activities</h3>
          <div className="space-y-4">
            {adminActions.map((action) => (
              <div key={action.id} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className={`w-3 h-3 rounded-full ${
                    action.type === 'Info' ? 'bg-blue-500' :
                    action.type === 'Warning' ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`}></div>
                  <div>
                    <p className="text-white font-medium">{action.action}</p>
                    <p className="text-gray-400 text-sm">by {action.user} → {action.target}</p>
                  </div>
                </div>
                <span className="text-gray-400 text-sm">{action.timestamp}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Permissions Tab */}
      {activeTab === 'permissions' && (
        <div className="space-y-6">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4">Role Permissions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="font-medium text-white mb-3 flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-red-500" />
                  <span>Super Admin</span>
                </h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Full system access</li>
                  <li>• User management</li>
                  <li>• System configuration</li>
                  <li>• All reports access</li>
                  <li>• Audit logs</li>
                </ul>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="font-medium text-white mb-3 flex items-center space-x-2">
                  <Settings className="h-5 w-5 text-yellow-500" />
                  <span>Admin</span>
                </h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Content moderation</li>
                  <li>• User role management</li>
                  <li>• Reports generation</li>
                  <li>• Event management</li>
                  <li>• Analytics access</li>
                </ul>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="font-medium text-white mb-3 flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-500" />
                  <span>Moderator</span>
                </h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Content review</li>
                  <li>• Comment moderation</li>
                  <li>• Basic reports</li>
                  <li>• Event participation</li>
                  <li>• User support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
