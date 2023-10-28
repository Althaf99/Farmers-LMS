import { useQuery } from "react-query";
import axios from "axios";

const useGetFarmerById = ({ farmerId }) => {
  const fetchCommon = async () => {
    try {
      const data = await axios.get(
        `http://localhost:8080/getFarmer/${farmerId}`
      );
      return data?.data[0];
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return useQuery(["farmerListById", farmerId], fetchCommon, {
    refetchOnWindowFocus: false,
  });
};

export default useGetFarmerById;
