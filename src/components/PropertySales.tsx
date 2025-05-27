
import { useState } from 'react';
import { Building, Plus, MapPin, Home, Calendar, DollarSign } from 'lucide-react';

const PropertySales = () => {
  const [activeTab, setActiveTab] = useState('sales');

  const properties = [
    {
      id: 1,
      title: '3BHK Apartment in Downtown',
      type: 'Sale',
      price: '$450,000',
      location: 'Downtown, City Center',
      bedrooms: 3,
      bathrooms: 2,
      area: '1,200 sq ft',
      postedBy: 'John Smith',
      department: 'Engineering',
      date: '2024-12-20',
      description: 'Spacious 3BHK apartment with modern amenities, close to metro station and shopping centers.',
      image: '/placeholder.svg',
      contact: 'john.smith@company.com'
    },
    {
      id: 2,
      title: '2BHK Furnished Apartment',
      type: 'Rent',
      price: '$1,800/month',
      location: 'Green Valley, Suburbs',
      bedrooms: 2,
      bathrooms: 1,
      area: '900 sq ft',
      postedBy: 'Sarah Johnson',
      department: 'Marketing',
      date: '2024-12-19',
      description: 'Fully furnished apartment with parking, gym, and swimming pool facilities.',
      image: '/placeholder.svg',
      contact: 'sarah.johnson@company.com'
    },
    {
      id: 3,
      title: 'Independent House with Garden',
      type: 'Sale',
      price: '$780,000',
      location: 'Hillside, Residential Area',
      bedrooms: 4,
      bathrooms: 3,
      area: '2,500 sq ft',
      postedBy: 'Mike Chen',
      department: 'Sales',
      date: '2024-12-18',
      description: 'Beautiful independent house with large garden, perfect for families.',
      image: '/placeholder.svg',
      contact: 'mike.chen@company.com'
    }
  ];

  const salesProperties = properties.filter(p => p.type === 'Sale');
  const rentProperties = properties.filter(p => p.type === 'Rent');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Building className="h-8 w-8 text-teal-500" />
          <h2 className="text-2xl font-bold text-white">Property Sales & Rentals</h2>
        </div>
        <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <Plus className="h-4 w-4" />
          <span>List Property</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-gray-800 rounded-lg p-1 border border-gray-700 inline-flex">
        <button
          onClick={() => setActiveTab('sales')}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeTab === 'sales'
              ? 'bg-teal-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          For Sale ({salesProperties.length})
        </button>
        <button
          onClick={() => setActiveTab('rent')}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeTab === 'rent'
              ? 'bg-teal-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          For Rent ({rentProperties.length})
        </button>
        <button
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeTab === 'all'
              ? 'bg-teal-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          All Properties
        </button>
      </div>

      {/* Property Listings */}
      <div className="grid gap-6">
        {(activeTab === 'all' ? properties : 
          activeTab === 'sales' ? salesProperties : rentProperties).map((property) => (
          <div key={property.id} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-semibold text-white">{property.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        property.type === 'Sale' ? 'bg-green-600 text-white' : 'bg-blue-600 text-white'
                      }`}>
                        For {property.type}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-teal-400 mb-2">
                      <DollarSign className="h-4 w-4" />
                      <span className="text-lg font-bold">{property.price}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{property.description}</p>
                
                {/* Property Details */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Home className="h-4 w-4" />
                    <span className="text-sm">{property.bedrooms} BR</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Home className="h-4 w-4" />
                    <span className="text-sm">{property.bathrooms} BA</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Building className="h-4 w-4" />
                    <span className="text-sm">{property.area}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                </div>
                
                {/* Posted By */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div className="flex items-center space-x-3">
                    <div className="bg-teal-600 p-2 rounded-full">
                      <Building className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{property.postedBy}</p>
                      <p className="text-gray-400 text-sm">{property.department} • {property.date}</p>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors">
                      Contact Seller
                    </button>
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

      {/* Property Stats */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-semibold text-white mb-4">Property Market Stats</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-teal-400">24</p>
            <p className="text-gray-400">Properties for Sale</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-400">18</p>
            <p className="text-gray-400">Properties for Rent</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-400">$485K</p>
            <p className="text-gray-400">Average Sale Price</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySales;
