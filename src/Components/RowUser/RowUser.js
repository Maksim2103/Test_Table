import { Card, CardGroup } from 'react-bootstrap/';

const RowUser = ({ data }) => {
  return (
    <CardGroup>
      <Card>
        <Card.Body className="d-flex flex-column justify-content-between ">
          <Card.Text>
            Выбран пользователь:
            <b>
              {data.firstName} {data.lastName}
            </b>
          </Card.Text>
          <Card.Text>
            <b>Описание:</b>
            <br /> {data.description}
          </Card.Text>
          <Card.Text>
            Адрес проживания: <b> {data.address.streetAddress} </b>
          </Card.Text>
          <Card.Text>
            Город: <b> {data.address.city} </b>
          </Card.Text>
          <Card.Text>
            Провинция: <b> {data.address.state} </b>
          </Card.Text>
          <Card.Text>
            Индекс: <b> {data.address.zip} </b>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default RowUser;
