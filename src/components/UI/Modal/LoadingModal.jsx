const LoadingModal = () => {
  return (
    <dialog id="loading_modal" className="modal">
      <form method="dialog" className="modal-box w-11/12 max-w-5xl">
        <h3 className="font-bold text-lg">열심히 문제 만드는 중...</h3>
        <span className="loading loading-spinner loading-lg py-4" />
      </form>
    </dialog>
  );
};

export default LoadingModal;
