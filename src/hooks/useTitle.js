const useTitle = (title) => {
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle && (htmlTitle.innerHTML = title);
  };

  return updateTitle();
};

export default useTitle;
