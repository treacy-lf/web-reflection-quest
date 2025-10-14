import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeHotspot, setActiveHotspot] = useState(0);
  const navigate = useNavigate();

  const hotspots = [
    { name: '虹桥商务区', aid: 99, color: 'red' },
    { name: '徐泾/西虹桥', aid: 108, color: 'red' },
    { name: '虹桥临空经济区', aid: 86, color: 'red' }
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/buildings?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 z-10 mb-8">
      <div className="container mx-auto px-4">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl p-6 max-w-3xl mx-auto">
          {/* Hotspot Navigation */}
          <div className="flex gap-4 mb-4 justify-center flex-wrap">
            {hotspots.map((hotspot, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveHotspot(index);
                  navigate(`/buildings?aid=${hotspot.aid}`);
                }}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeHotspot === index
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-100 text-red-500 hover:bg-red-50'
                }`}
                style={{ color: activeHotspot !== index ? hotspot.color : undefined }}
              >
                {hotspot.name}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="flex items-center gap-2 bg-white border-2 border-gray-200 rounded-lg overflow-hidden focus-within:border-primary transition-colors">
            <Search className="w-5 h-5 text-gray-400 ml-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="请输入大厦名称开始选址"
              className="flex-1 px-4 py-4 outline-none text-base"
            />
            <button
              onClick={handleSearch}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 font-medium transition-colors cursor-pointer"
            >
              开始选址
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
