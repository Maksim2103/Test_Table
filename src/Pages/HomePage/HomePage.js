import { useState } from 'react';

import ButtonPanel from '../../Components/ButtonsPanel/ButtonPanel';
import TableData from '../../Components/TableData/TableData';
import SearchPanel from '../../Components/SearchPanel/SearchPanel';
import PaginationPanel from '../../Components/PaginationPanel/PaginationPanel';
import RowUser from '../../Components/RowUser/RowUser';

const HomePage = ({
  data,
  handleToggleSizeData,
  pages,
  handleClickPage,
  sortTable,
  direction,
  targetValue,
  handlerSearchInput,
  handlePaginationPages,
  currentPage,
  setAddContact,
  addContactData,
}) => {
  const [rowData, setRowData] = useState({});
  const [showRow, setShowRow] = useState(false);

  const getTableRowId = (row) => {
    row && setRowData(row);
    setShowRow(true);
  };

  return (
    <>
      <ButtonPanel handleToggleSizeData={handleToggleSizeData} />
      <SearchPanel handlerSearchInput={handlerSearchInput} />
      <TableData
        data={data}
        sortTable={sortTable}
        direction={direction}
        targetValue={targetValue}
        setAddContact={setAddContact}
        addContactData={addContactData}
        getTableRowId={getTableRowId}
      />
      <PaginationPanel
        pages={pages}
        handleClickPage={handleClickPage}
        handlePaginationPages={handlePaginationPages}
        currentPage={currentPage}
      />
      {showRow && <RowUser data={rowData} />}
    </>
  );
};

export default HomePage;
