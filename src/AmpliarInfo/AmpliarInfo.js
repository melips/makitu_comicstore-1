import './AmpliarInfo.css'

export function AmpliarInfo(){

    return(
        <>
        <br></br>
            <div class = "container my-5">
                <div class = "row">
                    <div class = "col-12 col-md-7">
                        <img src="https://firebasestorage.googleapis.com/v0/b/comicstore-aff4a.appspot.com/o/DEATHSTROKE%20REBIRTH%20N%C3%9AMERO%201.jpg?alt=media&token=7dc85074-8f8d-4c82-b512-bae8415b1c30" class="img-fluid w-100" 
                        alt = "foto"
                        />
                    </div>

                    <div class = "col-12 col-md-5 border p-3 rounded shadow">
                        <h2 class = "fw-bold">DEATHSTROKE</h2>
                        <i class="bi bi-star-fill text-warning fs-1 ms-1"></i>
                        <i class="bi bi-star-fill text-warning fs-1 ms-1"></i>
                        <i class="bi bi-star-fill text-warning fs-1 ms-1"></i>
                        <i class="bi bi-star-fill fs-1 ms-1"></i>
                        <i class="bi bi-star-fill fs-1 ms-1"></i>

                        <br></br>

                        <span class = "badge text-bg-warning mt-3"> Mas venido</span>

                        <br></br>
                        <br></br>

                        <h3>$32500</h3>
                        <span class = "badge text-bg-primary mt-3"> Oferta </span>

                        <br></br>
                        <br></br>

                        <p class ="text-muted mt-3">Hasta 48 cuotas</p>
                        <img src = "https://firebasestorage.googleapis.com/v0/b/comicstore-aff4a.appspot.com/o/visa%20(2).png?alt=media&token=3ac908a1-cc2b-496e-874d-1843936d51d8" 
                            alt = "icono" 
                            class = "img-fluid me-3"/>

                        <img src = "https://firebasestorage.googleapis.com/v0/b/comicstore-aff4a.appspot.com/o/tarjeta-de-credito.png?alt=media&token=a48ca76c-dd5b-4280-954f-5aa1d1060ae8" 
                            alt = "icono" 
                            class = "img-fluid me-3"/>

                        <img src = "https://firebasestorage.googleapis.com/v0/b/comicstore-aff4a.appspot.com/o/         american-express.png?alt=media&token=839d42bf-8466-426b-8b41-72ce2f6ebff5" 
                            alt = "icono" 
                            class = "img-fluid me-3"
                        />

                        <br></br>
                        <br></br>

                        <i class="bi bi-truck display-1 my-5 "></i>
                        <p>Entregas en Medellín y el valle del aburrá</p>
                        
                        <br></br>
                        <br></br>
                        
                        <form>
                            <label class ="form-label">Cantidad</label>
                            <input class ="form-control" type="number" value="1"></input>
                            <button type="submit" class="btn btn-warning mt-2 w-100">
                                <i class="bi bi-cart-check"></i> Añadir
                            </button>
                        </form>


                    </div>
                </div>

            </div>

        </>
    )

}