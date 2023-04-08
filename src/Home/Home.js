import "./Home.css"; //comillas simples o dobles, ambas válidas
import { AcercaDe } from "../AcercaDe/AcercaDe";
import { Servicios } from "../Servicios/Servicios";

export function Home() {
  return (

    <>
    

      <section>

        <div class="banner">
        

            <h1 class="texto1">Bienvenido a Makitu 
             </h1>
            <h2 class="texto2">Una explosión de diversión en cada página</h2>


        </div>

      </section>

      <AcercaDe ></AcercaDe>
      <Servicios></Servicios>
    </>

  );
}
