import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { getsearch } from "@/Service/service";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!searchQuery.trim()) {
        setFilteredData([]);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const response = await getsearch(searchQuery);
        setFilteredData(response.data?.data || []);
      } catch (err) {
        console.error("Search error:", err);
        setError("Failed to fetch search results.");
      } finally {
        setIsLoading(false);
      }
    };

    const debounceTimeout = setTimeout(fetchSearchResults, 300);

    return () => clearTimeout(debounceTimeout);
  }, [searchQuery]);

  const renderSearchResults = () => {
    if (isLoading) {
      return <p className="px-4 py-2 text-gray-500 dark:text-gray-400">Loading...</p>;
    }

    if (error) {
      return <p className="px-4 py-2 text-red-500">{error}</p>;
    }

    if (filteredData.length === 0) {
      return <p className="px-4 py-2 text-gray-500 dark:text-gray-400">No results found</p>;
    }

    return filteredData.map((item) => (
      <div key={item.name} className="flex flex-col w-full">
        <Link
          href={`/search?query=${item.name}`} // Navigate to the search page with query
          className="block px-4 py-2 hover:bg-blue-500 hover:text-white dark:hover:bg-gray-700"
        >
          {item.name}
        </Link>
        {item.skills && item.skills.length > 0 && (
          <Link
            href={`/search?query=${item.skills[0]}`} // Navigate to the search page with skills as query
            className="block px-4 py-2 text-sm text-gray-500 hover:bg-blue-500 hover:text-white dark:hover:bg-gray-700"
          >
            Skills: {item.skills.join(", ")}
          </Link>
        )}
      </div>
    ));
  };

  return (
    <div className="hidden md:flex items-center relative space-x-4 ">
      <input
        type="text"
        placeholder="Search..."
        className="px-4 py-2 rounded-md border border-gray-300 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {searchQuery && (
        <div className="absolute top-full mt-2 w-full bg-white dark:bg-gray-800 shadow-md rounded-md max-h-40 overflow-auto">
          {renderSearchResults()}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
