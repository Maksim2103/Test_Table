import { FaSortAmountDownAlt, FaSortAmountUpAlt } from 'react-icons/fa';

const DirectionSort = ({ direction }) => {
  return (
    <>
      {direction === 'asc' ? (
        <FaSortAmountUpAlt />
      ) : direction === 'desc' ? (
        <FaSortAmountDownAlt />
      ) : null}
    </>
  );
};

export default DirectionSort;
