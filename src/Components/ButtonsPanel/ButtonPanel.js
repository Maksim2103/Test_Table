import Button from 'react-bootstrap/Button';

const ButtonPanel = () => {
  return (
    <div className="d-flex justify-content-end p-3">
      <Button variant="outline-primary">Большие данные</Button>
      <Button className="ml-2" variant="outline-primary">
        Маленькие данные
      </Button>
    </div>
  );
};

export default ButtonPanel;
