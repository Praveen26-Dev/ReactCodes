import { FaStar, FaMapMarkerAlt } from "react-icons/fa";

const HotelCard = ({ hotel }) => {
  return (
    <div
      className="
        bg-gradient-to-b from-[#0b1f2a] to-[#08161f]
        border border-white/10
        rounded-2xl overflow-hidden
        shadow-xl
        hover:-translate-y-2 hover:shadow-cyan-500/30
        transition-all duration-300
      "
    >
      {/* Image */}
      <div className="h-52 overflow-hidden">
        <img
          src={hotel.image}
          alt={hotel.name}
          onError={(e) => {
            e.target.src = "/hotels/fallback.avif";
          }}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6 text-white">
        <h2 className="text-xl font-semibold mb-1">
          {hotel.name}
        </h2>

        <p className="flex items-center gap-2 text-sm text-cyan-300 mb-4">
          <FaMapMarkerAlt />
          {hotel.city}, {hotel.country}
        </p>

        <div className="flex items-center justify-between">
          <p className="text-yellow-400 font-bold text-lg">
            ₹{hotel.price}
            <span className="text-sm text-gray-400"> / night</span>
          </p>

          <button
            className="
              px-4 py-2 rounded-lg
              bg-gradient-to-r from-cyan-400 to-emerald-400
              text-black font-semibold
              hover:scale-105
              transition
            "
          >
            View Details
          </button>
        </div>

        <p className="flex items-center gap-1 text-sm text-yellow-400 mt-3">
          <FaStar /> {hotel.rating}
        </p>
      </div>
    </div>
  );
};

export default HotelCard;
