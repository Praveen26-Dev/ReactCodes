import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getHotelDetailsController } from "../controller/hotelController";

const HotelDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getHotelDetailsController(id, setHotel, setLoading);
  }, [id]);

  if (loading) return <h2>Loading...</h2>;
  if (!hotel) return <h2>Hotel not found</h2>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <img
        src={hotel.image}
        alt={hotel.name}
        className="w-full h-96 object-cover rounded"
      />

      <h2 className="text-3xl font-bold mt-4">{hotel.name}</h2>
      <p className="text-gray-600">
        {hotel.city}, {hotel.country}
      </p>

      <p className="mt-2">⭐ Rating: {hotel.rating}</p>
      <p className="mt-2">₹ {hotel.price} / night</p>

      <button
        onClick={() => navigate(`/booking/${hotel.id}`)}
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded"
      >
        Book Now
      </button>
    </div>
  );
};

export default HotelDetails;
