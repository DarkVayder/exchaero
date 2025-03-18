import { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  return (
    <div className="relative w-full max-w-xl">
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          onSearch(e.target.value);
        }}
        placeholder="Search currencies..."
        className="border p-5 rounded-lg w-full text-black bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-800 shadow-md text-lg"
      />
      <Search className="absolute right-5 top-5 text-gray-500" size={26} />
    </div>
  );
};

export default SearchBar;
