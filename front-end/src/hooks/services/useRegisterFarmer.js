import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const useRegisterFarmer = () => {
  const QueryClient = useQueryClient();
  const url = "http://localhost:8080/registerFarmer";

  return useMutation(
    async (obj) => await axios.post(url, obj),
    {
      onSuccess: async () => {
        QueryClient.invalidateQueries();
      },
    },
    {
      onError: async () => {
        console.log("error");
      },
    }
  );
};

export default useRegisterFarmer;
