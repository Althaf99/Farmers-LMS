import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const useDeleteFarmer = ({ id }) => {
  const queryClient = useQueryClient();
  const deleteRequestItem = `http://localhost:8080/deleteFarmer/${id}`;

  return useMutation(() => axios.delete(deleteRequestItem), {
    onSuccess: async () => {
      queryClient.invalidateQueries();
    },
    onError: async () => {
      console.log("error");
    },
  });
};

export default useDeleteFarmer;
