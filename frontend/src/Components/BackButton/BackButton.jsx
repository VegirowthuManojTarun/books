import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const BackButton = () => {
  return (
    <div>
      <Link to="/" className="bg-sky-800">
        <BsArrowLeft className="text-2xl" />
      </Link>
    </div>
  );
};

export default BackButton;
