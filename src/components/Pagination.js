export default Pagination = ({ currentPage, setCurrentPage, noOfPages }) => {
  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <button disabled={currentPage === 0} onClick={handlePrevClick}>
        ◀️
      </button>
      {[...Array(noOfPages).keys()].map((k) => {
        return (
          <button
            key={k}
            className={`page ${k === currentPage ? "active" : ""}`}
            onClick={() => handlePageChange(k)}
          >
            {k}
          </button>
        );
      })}
      <button
        className="page"
        disabled={currentPage === noOfPages - 1}
        onClick={handleNextClick}
      >
        ▶️
      </button>
    </div>
  );
};
