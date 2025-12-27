import { fetchHotelById } from "../service/hotelService";
import { fetchHotels } from "../service/hotelService";

export const getHotelsController = async (
  setHotels,
  setLoading,
  filters = {}
) => {
  try {
    setLoading(true);
    const { data } = await fetchHotels();

    let filtered = data;

    if (filters.country) {
      filtered = filtered.filter(
        (h) => h.country === filters.country
      );
    }

    if (filters.minPrice) {
      filtered = filtered.filter(
        (h) => h.price >= filters.minPrice
      );
    }

    if (filters.rating) {
      filtered = filtered.filter(
        (h) => h.rating >= filters.rating
      );
    }

    setHotels(filtered);
  } catch (error) {
    console.error("Failed to load hotels");
  } finally {
    setLoading(false);
  }
};


export const getHotelDetailsController = async (
  id,
  setHotel,
  setLoading
) => {
  try {
    setLoading(true);
    const { data } = await fetchHotelById(id);
    setHotel(data);
  } catch (error) {
    console.error("Failed to fetch hotel details");
  } finally {
    setLoading(false);
  }
};
