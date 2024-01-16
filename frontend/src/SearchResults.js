import { Link } from "react-router-dom";

const SearchResults = () => {
  // Example data for search results (replace this with actual data fetching logic)
  const searchResults = [
    {
      id: 1,
      name: "Destination 1",
      location: "Location 1",
      price: "$$",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Destination 2",
      location: "Location 2",
      price: "$$",
      rating: 4.2,
    },
    // Add more search result items
  ];

  return (
    <div className="container">
      <h2>Search Results</h2>
      <div className="row">
        {searchResults.map((result) => (
          <div key={result.id} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{result.name}</h5>
                <p className="card-text">Location: {result.location}</p>
                <p className="card-text">Price: {result.price}</p>
                <p className="card-text">Rating: {result.rating}</p>
                <Link
                  to={`/destination/${result.id}`}
                  className="btn btn-primary"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
