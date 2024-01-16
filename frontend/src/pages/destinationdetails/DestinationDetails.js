import { useParams } from "react-router-dom";

const DestinationDetails = () => {
  const { id } = useParams(); // Get destination ID from route params

  // Example destination data for a single destination (replace this with actual data fetching logic)
  const destinationDetails = {
    id: 1,
    name: "Destination 1",
    location: "Location 1",
    description: "Description of the destination...",
    // Add more details such as photos, activities, accommodations, reviews, etc.
  };

  return (
    <div className="container">
      <h2>Destination Details</h2>
      <div>
        <h3>{destinationDetails.name}</h3>
        <p>Location: {destinationDetails.location}</p>
        <p>Description: {destinationDetails.description}</p>
        {/* Add more details and sections about the destination */}
      </div>
    </div>
  );
};

export default DestinationDetails;
