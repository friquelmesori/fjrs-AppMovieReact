import { Button, Card } from "react-bootstrap";
import './CardPeliculas.css' 

export const CardPeliculas = ({ id, img, title, description, ...props }) => {
  return (
    <Card className = " p-1" style={{ width: '18rem' }}>
          <Card.Img variant="top" src = { `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${ img }` } alt = { id }/>
          <Card.Body>
            <Card.Title>{ title }</Card.Title>
            <Card.Text>
              { description }
            </Card.Text>
            <Button variant="primary">Detalles</Button>
          </Card.Body>
        </Card>
      );
}
