import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

import DirectionSort from '../DirectionSort/DirectionSort';
import ModalAddUser from '../ModalAddUser/ModalAddUser';

const TableData = ({
  direction,
  sortTable,
  data,
  targetValue,
  setAddContact,
  addContactData,
  getTableRowId,
}) => {
  return (
    <Container fluid="xl">
      <div className="d-flex justify-content-end">
        <ModalAddUser
          setAddContact={setAddContact}
          addContactData={addContactData}
        />
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th id="id" onClick={(e) => sortTable('id')}>
              id
              {targetValue === 'id' ? (
                <DirectionSort direction={direction} />
              ) : null}
            </th>
            <th id="firstName" onClick={(e) => sortTable('firstName')}>
              First Name
              {targetValue === 'firstName' ? (
                <DirectionSort direction={direction} />
              ) : null}
            </th>
            <th id="lastName" onClick={(e) => sortTable('lastName')}>
              Last Name
              {targetValue === 'lastName' ? (
                <DirectionSort direction={direction} />
              ) : null}
            </th>
            <th id="email" onClick={(e) => sortTable('email')}>
              Email
              {targetValue === 'email' ? (
                <DirectionSort direction={direction} />
              ) : null}
            </th>
            <th id="phone" onClick={(e) => sortTable('phone')}>
              Phone
              {targetValue === 'phone' ? (
                <DirectionSort direction={direction} />
              ) : null}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} id={row.id} onClick={() => getTableRowId(row)}>
              <td>{row.id}</td>
              <td>{row.firstName}</td>
              <td>{row.lastName}</td>
              <td>{row.email}</td>
              <td>{row.phone}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default TableData;
