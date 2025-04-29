import { FaRegStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineFoodBank } from "react-icons/md";

const CardComponent = ({ info }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md mx-auto space-y-4">
      <div>
        <h1 className="text-xl font-bold text-gray-800 mb-2">{info.name}</h1>
        <div className="flex space-x-1">
          {Array.from({
            length: Math.floor(info.rating) >= 5 ? 5 : Math.floor(info.rating),
          }).map((_, index) => (
            <FaRegStar key={index} className="text-amber-400" />
          ))}
        </div>
      </div>

      <div className="text-sm text-gray-600 space-y-1">
        <div className="flex items-center gap-2">
          <FaLocationDot className="text-red-500" />
          <span>{info.address}, {info["address line 2"]}</span>
        </div>
        <div className="ml-6">{info.outcode} {info.postcode}</div>
        <div className="flex items-center gap-2">
          <MdOutlineFoodBank className="text-green-600" />
          <span>{info.type_of_food
          }</span>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
