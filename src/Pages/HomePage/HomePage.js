import ButtonPanel from '../../Components/ButtonsPanel/ButtonPanel';
import TableData from '../../Components/TableData/TableData';
import SearchPanel from '../../Components/SearchPanel/SearchPanel';
import PaginationPanel from '../../Components/PaginationPanel/PaginationPanel';

const HomePage = ({ data }) => {
  return (
    <div>
      <ButtonPanel />
      <SearchPanel />
      <TableData data={data} />
      <PaginationPanel />
    </div>
  );
};

export default HomePage;
