import { AiOutlineCheckCircle } from "react-icons/ai";

type Props = {
  isDisplay: boolean;
};

const PopupSeccess = ({ isDisplay }: Props) => {
  return (
    <div
      className={`fixed bottom-14 right-10 z-30 flex justify-center ${
        isDisplay ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } duration-500 ease-in-out`}
      role="alert"
    >
      <div className="alert alert-success text-green-50 opacity-90">
        <span className="text-2xl">
          <AiOutlineCheckCircle />
        </span>
        <span>Your submission has been successful!</span>
      </div>
    </div>
  );
};
export default PopupSeccess;
