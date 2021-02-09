import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  return (
    <div className="d-flex justify-content-center">
      <strong>Loading... please wait</strong>
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default Loader;
