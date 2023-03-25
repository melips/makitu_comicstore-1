import "./Home.css"; //comillas simples o dobles, ambas válidas
import { AcercaDe } from "../AcercaDe/AcercaDe";
import { Servicios } from "../Servicios/Servicios";

export function Home() {
  return (

    <>
    

      <section>

        <div class="banner">

            <h1>¡Bienvenido!</h1>

        </div>

      </section>

      <AcercaDe></AcercaDe>
      <Servicios></Servicios>
    </>

  );
}
