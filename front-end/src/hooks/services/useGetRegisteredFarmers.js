import { useQuery } from "react-query";
import axios from "axios";

const useGetRegisteredFarmers = ({ farmerName, location, id }) => {
  const fetchCommon = async () => {
    const query = new URLSearchParams();

    if (farmerName) {
      query.append("farmerName", farmerName);
    }

    if (location) {
      query.append("location", location);
    }
    if (id) {
      query.append("id", id);
    }

    try {
      const data = await axios.get(
        `http://localhost:8080/getFarmers?${query.toString()}`
      );
      return data?.data;
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return useQuery(["registeredFarmers", farmerName, location], fetchCommon, {
    refetchOnWindowFocus: false,
  });
};

export default useGetRegisteredFarmers;
