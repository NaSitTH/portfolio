type Props = {
  handleClose: () => void;
};

const Backdrop = ({ handleClose }: Props) => {
  return (
    <div
      className="fixed left-0 top-20 z-40 h-[calc(100vh-5rem)] w-full bg-black/30"
      onClick={handleClose}
    />
  );
};
export default Backdrop;
