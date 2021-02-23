import Container from 'react-bootstrap/Container';

const PaginationPanel = ({
  pages,
  handleClickPage,
  handlePaginationPages,
  currentPage,
}) => {
  return (
    <Container className="d-flex justify-content-center" fluid="xl">
      <nav aria-label="Page navigation" onClick={handlePaginationPages}>
        <ul className="pagination">
          <li
            className={currentPage === 1 ? 'page-item disabled' : 'page-item'}
          >
            <a className="page-link" href="#section">
              Previous
            </a>
          </li>
          {pages.map((page) => (
            <li
              className={
                currentPage === page ? 'page-item active' : 'page-item'
              }
              onClick={() => handleClickPage(page)}
              key={page}
            >
              <a className="page-link" href="#section">
                {page}
              </a>
            </li>
          ))}
          <li
            className={
              currentPage === pages.length ? 'page-item disabled' : 'page-item'
            }
          >
            <a className="page-link" href="#section">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default PaginationPanel;
