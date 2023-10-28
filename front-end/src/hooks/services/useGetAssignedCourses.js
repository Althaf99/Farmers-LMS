import { useQuery } from "react-query";
import axios from "axios";

const useGetAssignedCourses = ({ farmerId }) => {
  const fetchCommon = async () => {
    try {
      const data = await axios.get(
        `http://localhost:8080/getAssignedCourses/${farmerId}`
      );
      return data?.data;
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return useQuery(["farmerData", farmerId], fetchCommon, {
    refetchOnWindowFocus: false,
  });
};

export default useGetAssignedCourses;
