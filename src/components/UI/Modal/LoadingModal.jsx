const LoadingModal = () => {
  return (
    <>
      <input
        type="checkbox"
        id="loading_modal"
        className="modal-toggle"
        checked
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">열심히 문제 만드는 중...</h3>
          <span className="loading loading-spinner loading-lg py-4" />
        </div>
      </div>
    </>
  );
};

export default LoadingModal;
