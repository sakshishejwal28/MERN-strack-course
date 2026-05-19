import { useEffect } from "react";

const useCustomEffect = (callback, dependency) => {
  useEffect(() => {
    callback();
  }, [dependency]);
};

export default useCustomEffect;