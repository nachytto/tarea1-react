import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './componentes/Header'
import './App.css'
{/*Importar el archivo JSX de la card*/}
import { MyCard } from './componentes/MyCard'
{/*Importar la ruta deL perrito uno*/}
import PerritoUno from "./assets/img/Golden.jpg"
import PerritoDos from  "./assets/img/Golden 2.jpg"
import PerritoTres from "./assets/img/Golden 3.jpg"
import PerritoCuatro from "./assets/img/Golden 4.jpg"



{/*Importar el archivo JSX del footer */}
import Footer from './componentes/Footer';

{/*Importar el archivo JSX de la card*/}

function App() {
  return (
    <div className='contenedor'>
      {/*Seccion para el header*/}
      <section>
      <Header nombre="Adopta a un perrito"/>
      </section>

      {/*Contenedor para las card*/}
      <section className='contenedorCard'>
        {/*Card 1*/}
        <div>
          {/*Componente Hijo - Card*/}
          <MyCard imagen={PerritoUno} nombre="gaspar" 
          descripcion="Lleno de energia y listo para jugar. Dale a gaspar el hogar
          amoroso que se merece!" 
          textoBadge="Dachshund" colorBadge="primary"/>
          {/*Otro componente*/}
        </div>
        {/*Card 2*/}
        <div>
          {/*Componente Hijo - Card*/}
          <MyCard imagen={PerritoDos} nombre="kira" 
          descripcion="Es juguetona, amigable y se lleva bien con niños y otros animales
          Haz de kira parte de tu familia!" 
          textoBadge="Gran Danes" colorBadge="success"/>
          {/*Otro componente*/}
        </div>
        {/*Card 3*/}
        <div>
          {/*Componente Hijo - Card*/}
          <MyCard imagen={PerritoTres} nombre="Tulio" 
          descripcion="Es pequeño, con mirada que juzga pero su ternura compensa cualquier mal
          Haz de Tulio tu fiel compañero!    " 
          textoBadge="Poodle" colorBadge="danger"/>
          {/*Otro componente*/}
        </div>
        {/*Card 4*/}
        <div>
          {/*Componente Hijo - Card*/}
          <MyCard imagen={PerritoCuatro} nombre="lukas" 
          descripcion="Es jugueton, muy activo y curioso, se lleva bien con los ñinos
          Haz de lukas tu fiel amigo!" 
          textoBadge="Golden" colorBadge="warning"/>
          {/*Otro componente*/}
        </div>
      </section>
      <section className='contenedorFooter'>
        <Footer descripcion="Explora nuestra galeria de adopcion para encontrar a tu fiel compañero perfecto.
        Tenemos una variedad de perros con diferentes personalidades, todos en busca de un lugar amoroso.
        Cada imagen captura su escencia unica. Adopta a un perro y brindale una segunda oportunidad.
        Encuentra a tu compañero peludo para siempre"/>
      </section>
    </div>
  )
}

export default App