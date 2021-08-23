import Card from 'react-bootstrap/Card';
import { useDispatch , use } from 'react-redux';
const Cards = () => {
    return (
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" style={{height: "250px" , padding: "10px"}} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
    )
}
export default Cards