import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getsearch } from "@/Service/service";
import Navbar from "@/components/Navbar";

const SearchPage = () => {
  const router = useRouter();
  const { query } = router.query; // Get the search term from the URL
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState(query || "");

  useEffect(() => {
    if (query) {
      fetchSearchResults(query);
    }
  }, [query]);

  const fetchSearchResults = async (searchTerm) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await getsearch(searchTerm);
      setSearchResults(response.data?.data || []);
    } catch (err) {
      console.error("Error fetching search results:", err);
      setError("Failed to fetch search results.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      router.push(`/search?query=${searchTerm}`);
    }
  };

  const renderSearchResults = () => {
    if (isLoading) {
      return <p className="px-4 py-2 text-gray-500 dark:text-gray-400">Loading...</p>;
    }

    if (error) {
      return <p className="px-4 py-2 text-red-500">{error}</p>;
    }

    if (searchResults.length === 0) {
      return <p className="px-4 py-2 text-gray-500 dark:text-gray-400">No results found</p>;
    }

    return searchResults.map((item) => (
      <div key={item._id} className="p-6 ml-4 bg-gray-800  text-white rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
            {/* Placeholder for image */}
            <span className="text-xl font-bold">{item.name.charAt(0)}</span>
          </div>
          <div className="ml-4">
            <h2 className="text-2xl font-semibold">{item.name}</h2>
            <p className="text-sm text-gray-200">{item.description}</p>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-200">Responsibilities:</h3>
          <ul className="list-disc pl-6 text-gray-100 space-y-2">
            {item.responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-200">Skills:</h3>
          <ul className="list-disc pl-6 text-gray-100 space-y-2">
            {item.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex justify-between">
          <p className="font-semibold text-gray-200">Average Salary: {item.averageSalary}</p>
          <p className="font-semibold text-gray-200">Industry: {item.industry}</p>
        </div>
      </div>
    ));
  };

  return (
    <>
      <Navbar />
      <div className="pt-[20px]  w-full h-[100vh] ">
        <h1 className="text-3xl font-extrabold text-center text-blue-600 dark:text-blue-400 mb-8">Search Results for &quot;{query}&quot;</h1>

        {/* Search Input Section */}
        <div className="mb-8 flex justify-center">
          <form onSubmit={handleSearchSubmit} className="flex w-full max-w-lg">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchInputChange}
              placeholder="Search..."
              className="flex-1 px-4 py-2 text-lg rounded-l-lg border border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Search
            </button>
          </form>
        </div>

        {/* Render Search Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {renderSearchResults()}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
