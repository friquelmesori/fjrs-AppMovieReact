import './CardPeliculas.css' 
import { Button, Card } from "react-bootstrap";
import {  Link } from 'react-router-dom'


import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { addCharacter } from '../../pages/detailSlice';

export const CardPeliculas = ({ id, type, img, title, description, ...props }) => {

  // console.log(props)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const seeDetail = () => {

  //   //Primero guardo en RDX los datos de la pelicula o serie en concreto...
  //   dispatch(addDetail({ id, img, title, description, ...props }));

  //   //A continuación voy a la página de detalle de la pelicula o serie...
  //   navigate("/detail");

  // }

  return (
    <Card className = "m-2 p-1" style={{ width: '18rem' }}>
          <Card.Img variant="top" src = { `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${ img }` } alt = { id }/>
          <Card.Body>
            <Card.Title>{ title }</Card.Title>
            <Card.Text>
              { description }
            </Card.Text>
            {/* <Button variant="primary" onClick={()=>seeDetail()}>Detalles</Button> */}
            <Link className='button-card py-2'  to={`/${type}/${id}`}>Ir a detalle</Link>
            {/* <Button variant="primary" onClick={()=>seeDetail()}>Details about me</Button> */}
          </Card.Body>
        </Card>
      );
}
