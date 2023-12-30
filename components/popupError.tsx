import { AiOutlineCloseCircle } from "react-icons/ai";

type Props = {
  isDisplay: boolean;
};

const PopupError = ({ isDisplay }: Props) => {
  return (
    <div
      className={`fixed bottom-14 right-10 z-30 flex justify-center ${
        isDisplay ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } duration-500 ease-in-out`}
      role="alert"
    >
      <div className="alert alert-error text-white opacity-90">
        <span className="text-2xl">
          <AiOutlineCloseCircle />
        </span>
        <span>An error occurred. Please try again.</span>
      </div>
    </div>
  );
};
export default PopupError;
