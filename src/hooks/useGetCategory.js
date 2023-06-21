import { useCallback, useState } from "react";
import loadingStatus from "../utils/loadingStatus";

const useGetCategory = (url) => {
  const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);

  const get = useCallback(async () => {
    try {
      const res = await fetch(url);
      const category = await res.json();

      setLoadingState(loadingStatus.loaded);
      return category;
    } catch (error) {
      setLoadingState(loadingStatus.hasErrored);
    }
  }, [url]);

  return { get, loadingState };
};

export default useGetCategory;
