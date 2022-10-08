import { useEffect, useState } from "react";
import { getCurrentPosition } from "../utils/utils";

export const useLocation = () => {
  const [coordinates, setCoordinates] = useState<number[]>([]);

  useEffect(() => {
    const getCoordinates = async () => {
      const { coords } = await getCurrentPosition();
      setCoordinates([coords.latitude, coords.longitude]);
    };
    getCoordinates();
  }, []);

  return [...coordinates];
};
