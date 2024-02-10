import { DNA } from "react-loader-spinner";

function Loader() {
  return (
    <div className="w-full h-[1000px] mt-28 flex justify-center">
      <DNA width="100px" height="100px" />
    </div>
  );
}

export default Loader;
