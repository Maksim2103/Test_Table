import Button from 'react-bootstrap/Button';

const ButtonPanel = ({ handleToggleSizeData }) => {
  return (
    <div className="d-flex justify-content-end p-3">
      <Button
        onClick={() => handleToggleSizeData('big')}
        variant="outline-primary"
      >
        Большие данные (1000 строк)
      </Button>
      <Button
        onClick={() => handleToggleSizeData('small')}
        className="ml-2"
        variant="outline-primary"
      >
        Маленькие данные (32 строки)
      </Button>
    </div>
  );
};

export default ButtonPanel;
