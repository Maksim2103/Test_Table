import { useState, useMemo, useEffect } from 'react';

import Loader from './Components/Loader/Loader';

import Container from 'react-bootstrap/Container';
import HomePage from './Pages/HomePage/HomePage';

const smallApiUrl =
  'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';

const bigApiUrl =
  'http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';

function App() {
  const [apiUrl, setApiUrl] = useState(smallApiUrl);
  const [contactData, setContactData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getContacts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(apiUrl);
        const results = await response.json();
        setContactData(results);
      } catch (e) {
      } finally {
        setIsLoading(false);
      }
    };
    getContacts();
  }, [apiUrl]);

  const handleToggleSizeData = (url) => {
    switch (url) {
      case 'big':
        return setApiUrl(bigApiUrl);
      case 'small':
        return setApiUrl(smallApiUrl);

      default:
        break;
    }
  };

  const [serchValue, setSerchValue] = useState('');

  const handlerSearchInput = (value) => {
    setSerchValue(value);
  };

  const getFilterData = () => {
    if (!serchValue) {
      return contactData;
    }
    return contactData.filter((contact) => {
      return Object.values(contact).some((value) =>
        String(value).includes(serchValue)
      );
    });
  };
  const dataAfterFilter = getFilterData();

  const firstCurrentPage = 1;
  const [currentPage, setCurrentPage] = useState(firstCurrentPage);
  const rowsPerPage = 7;

  const indexOfLastElement = useMemo(() => currentPage * rowsPerPage, [
    currentPage,
    rowsPerPage,
  ]);
  const indexOfFirstElement = useMemo(() => indexOfLastElement - rowsPerPage, [
    indexOfLastElement,
    rowsPerPage,
  ]);

  const dataPerPage = useMemo(
    () => dataAfterFilter.slice(indexOfFirstElement, indexOfLastElement),
    [indexOfLastElement, indexOfFirstElement, dataAfterFilter]
  );

  const totalPages = useMemo(
    () => Math.ceil(dataAfterFilter.length / rowsPerPage),
    [dataAfterFilter, rowsPerPage]
  );
  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handleClickPage = (page) => {
    setCurrentPage(page);
  };

  const handlePaginationPages = (e) => {
    const value = e.target.innerText;
    switch (value) {
      case 'Previous':
        if (currentPage > 1) {
          return setCurrentPage(currentPage - 1);
        } else {
          break;
        }
      case 'Next':
        if (currentPage < pages.length) {
          return setCurrentPage(currentPage + 1);
        } else {
          break;
        }
      default:
        break;
    }
  };

  const [targetValue, setTargetValue] = useState('');
  const [direction, setDirection] = useState('');

  const sortTable = (val) => {
    setTargetValue(val);
    if (direction === '' || direction === 'asc') {
      const sort = dataAfterFilter
        .slice()
        .sort((a, b) => (a[val] > b[val] ? 1 : -1));
      setContactData(sort);
      setDirection('desc');
    }
    if (direction === 'desc') {
      const sort = dataAfterFilter
        .slice()
        .sort((a, b) => (a[val] < b[val] ? 1 : -1));
      setContactData(sort);
      setDirection('asc');
    }
  };

  const [addContact, setAddContact] = useState();

  const addContactData = (con) => {
    setAddContact(con);
  };

  const dataAfterAddContact = useMemo(
    () =>
      [addContact, ...dataAfterFilter].slice(
        indexOfFirstElement,
        indexOfLastElement
      ),
    [addContact, dataAfterFilter, indexOfFirstElement, indexOfLastElement]
  );

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <HomePage
          data={addContact ? dataAfterAddContact : dataPerPage}
          handleToggleSizeData={handleToggleSizeData}
          pages={pages}
          handleClickPage={handleClickPage}
          sortTable={sortTable}
          direction={direction}
          targetValue={targetValue}
          handlerSearchInput={handlerSearchInput}
          handlePaginationPages={handlePaginationPages}
          currentPage={currentPage}
          setAddContact={setAddContact}
          addContactData={addContactData}
        />
      )}
    </Container>
  );
}

export default App;
