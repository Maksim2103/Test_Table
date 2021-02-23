import { useState } from 'react';

import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/esm/Container';

const SearchPanel = ({ handlerSearchInput }) => {
  const [inputValue, setInputValue] = useState('');

  const handlerInput = (val) => {
    setInputValue(val);
  };
  return (
    <Container fluid="xl">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Поиск..."
          aria-label="Search by"
          aria-describedby="basic-addon2"
          onChange={(e) => {
            handlerInput(e.target.value);
          }}
          value={inputValue}
        />
        <InputGroup.Append>
          <Button
            variant="outline-secondary"
            onClick={() => {
              handlerSearchInput(inputValue);
            }}
          >
            Найти
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Container>
  );
};

export default SearchPanel;
