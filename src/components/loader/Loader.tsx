import "./Loader.css";
import { Vortex } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div className="loader">
      <Vortex
        visible={true}
        height="130"
        width="130"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={["red", "green", "blue", "yellow", "orange", "purple"]}
      />
    </div>
  );
};
