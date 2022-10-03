import { useEffect, useState } from "react";
import { getCurrentPosition } from "../utils/Utils";

export const useLocation = () => {
  const [coordinates, setCoordinates] = useState<any>([]);

  useEffect(() => {
    const getCoordinates = async () => {
      const { coords } = <any>await getCurrentPosition();
      setCoordinates([coords.latitude, coords.longitude]);
    };
    getCoordinates();
  }, []);

  return [...coordinates];
};
