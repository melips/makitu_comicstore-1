import { Link } from "react-router-dom"
import "./Menu.css";

export function Menu() {
  return (

    <>

      <nav class="navbar navbar-expand-lg navbar-dark menu fixed-top">

        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
             <img src="https://firebasestorage.googleapis.com/v0/b/comicstore-32b08.appspot.com/o/Pale_Yellow_Comics_We_Are_Open_Metal_Sign__2_-removebg-preview.png?alt=media&token=156ba822-5f60-4af8-9ac0-c35ee1adc4ac" class="icono" alt="Logo"></img>
          </Link>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">

            <ul class="navbar-nav">

              <li class="nav-item">
                <Link class="nav-link active texto" aria-current="page" to="/">Home</Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link texto" to="/administrar">Agregar Productos</Link>
              </li>

              <li class="nav-item texto">
                <Link class="nav-link" to="/productos">Productos</Link>
              </li>

            </ul>

          </div>
        </div>
      </nav>

    </>
  );
}
