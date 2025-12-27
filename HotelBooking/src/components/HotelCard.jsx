import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { cardHoverAnimation } from "../animations/cardAnimations";

const HotelCard = ({ hotel }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    cardHoverAnimation(cardRef.current);
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-2xl overflow-hidden shadow-lg"
    >
      <div className="h-56 overflow-hidden">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold mb-1">
          {hotel.name}
        </h3>
        <p className="text-gray-500 text-sm">
          {hotel.city}, {hotel.country}
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="font-bold text-lg">
            ₹{hotel.price}/night
          </span>
          <span className="text-yellow-500 font-semibold">
            ⭐ {hotel.rating}
          </span>
        </div>

        <Link
          to={`/hotels/${hotel.id}`}
          className="block mt-4 text-center bg-black text-white py-2 rounded-lg"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default HotelCard;
