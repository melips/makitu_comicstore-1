import { Link } from "react-router-dom"
import "./Menu.css";

export function Menu() {
  return (

    <>

      <nav class="navbar navbar-expand-lg navbar-dark menu fixed-top">

        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
             <img src="https://firebasestorage.googleapis.com/v0/b/comicstore-aff4a.appspot.com/o/1.png?alt=media&token=7e3c7a80-9410-4523-9619-f919c32405f9" class="icono"></img>
          </Link>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">

            <ul class="navbar-nav">

              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/administrar">Agregar Productos</Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/productos">Productos</Link>
              </li>

            </ul>

          </div>
        </div>
      </nav>

    </>
  );
}
