import { useCallback, useState } from "react";
import loadingStatus from "../utils/loadingStatus";

const useGetCategory = (url) => {
  const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);

  const get = useCallback(async () => {
    try {
      const res = await fetch(url);
      console.log(res);
      const category = await res.json();

      console.log(category);
      setLoadingState(loadingStatus.loaded);
      return category;
    } catch (error) {
      console.log(error);
      setLoadingState(loadingStatus.hasErrored);
    }
  }, [url]);

  return { get, loadingState };
};

export default useGetCategory;
