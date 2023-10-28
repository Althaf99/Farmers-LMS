import { useQuery } from "react-query";
import axios from "axios";

const useGetAttendance = ({ farmerId, courseId }) => {
  const fetchCommon = async () => {
    const query = new URLSearchParams();
    if (farmerId) {
      query.append("farmerId", farmerId);
    }
    if (courseId) {
      query.append("courseId", courseId);
    }
    try {
      const data = await axios.get(
        `http://localhost:8080/getAttendance?${query.toString()}`
      );
      return data?.data;
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return useQuery(["attendanceData", farmerId, courseId], fetchCommon, {
    refetchOnWindowFocus: false,
  });
};

export default useGetAttendance;
