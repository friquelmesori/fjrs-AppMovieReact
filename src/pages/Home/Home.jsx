import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react'
import { bringPeliculas } from '../../services/apiCalls'
import { CardPeliculas } from '../common/CardPeliculas/CardPeliculas';
import { Container, Row } from 'react-bootstrap';
import './Home.css'

export const Home = () => {

  // Hooks
  const [peliculas, setPeliculas] = useState([])

  useEffect (() => {
    if(peliculas.length === 0) {
      bringPeliculas()
      .then((res) => {
        setPeliculas(res);
      })
      .catch((error) => 
      console.log(error));
    }
  }, [peliculas]);

  return (
    <>
    <Container xs={11} md={4} lg={2} >
      <Row className = " d-flex align-items-center justify-content-center">
    {peliculas.length > 0 ? (
        <>
          {peliculas.map((card) => {
            return <CardPeliculas 
            key = { card.id } 
            // pelicula = { card } 
            img = { card.poster_path } 
            title = { card.title } 
            description = { card.overview } 
            { ...card }
            />;
          })}
        </>
      ) : (
        <>Aun no han venido las peliculas ... cargando</>
      )}
      </Row>
      </Container>
    </>
  )
}
