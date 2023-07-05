const LoadingModal = ({ children }) => {
  return (
    <dialog id="loading_modal" className="modal">
      <form method="dialog" className="modal-box w-11/12 max-w-5xl">
        <h3 className="font-bold text-lg">{children}</h3>
        <span className="loading loading-spinner loading-lg py-4" />
      </form>
    </dialog>
  );
};

export default LoadingModal;
