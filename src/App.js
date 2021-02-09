import { useState } from 'react';

import useFetchData from './useFetchData';
import Loader from './Components/Loader/Loader';

import Container from 'react-bootstrap/Container';
import HomePage from './Pages/HomePage/HomePage';

const smallApiUrl =
  'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';

const bigApiUrl =
  'http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';

function App() {
  const [apiUrl, setApiUrl] = useState(smallApiUrl);

  const { data, isLoading } = useFetchData(apiUrl);

  return (
    <Container d-flex>
      {isLoading ? <Loader /> : <HomePage data={data} />}
    </Container>
  );
}

export default App;
