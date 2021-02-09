import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/esm/Container';

const SearchPanel = () => {
  return (
    <Container fluid="xl">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Поиск..."
          aria-label="Search by"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary">Найти</Button>
        </InputGroup.Append>
      </InputGroup>
    </Container>
  );
};

export default SearchPanel;
