export function Administrador() {

    return (

        <>

            <br></br>
            <br></br>


            <div class="container-fluid my-5">

                <div class="row">

                    <div class="col-6">

                        <img src="https://firebasestorage.googleapis.com/v0/b/comicstore-32b08.appspot.com/o/producto.jpg?alt=media&token=dbc16f65-da01-4bfe-b537-3c0ab969083e" alt="foto" class="img-fluid" />

                    </div>

                    <div class="col-6">

                        <h2>Registro de mercancia</h2>

                        <form>

                            <div class="row">

                                <div class="col-4">

                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-cart-check-fill"></i></span>
                                        <input type="text" class="form-control" placeholder="Nombre" />
                                    </div>

                                </div>

                                <div class="col-4">

                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-image-fill"></i></span>
                                        <input type="text" class="form-control" placeholder="Foto" />
                                    </div>

                                </div>

                                <div class="col-4">

                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-check2-square"></i></span>
                                        <input type="number" class="form-control" placeholder="Cantidad" />
                                    </div>

                                </div>


                            </div>



                            <div class="row">

                                <div class="col-4">

                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-pencil-square"></i></span>
                                        <textarea type="text" class="form-control" placeholder="Descripción" />
                                    </div>

                                </div>

                                <div class="col-4">

                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-image-fill"></i></span>
                                        <input type="number" class="form-control" placeholder="Precio" />
                                    </div>

                                </div>

                                <div class="col-4">

                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-list-stars"></i></span>
                                        <input type="text" class="form-control" placeholder="Clasificación" />
                                    </div>

                                </div>

                            </div>


                            <div class="row">

                                <div class="col-4">

                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-tags-fill"></i></span>
                                        <input type="text" class="form-control" placeholder="Marca" />
                                    </div>

                                </div>

                                <div class="col-4">

                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-star-fill"></i></span>
                                        <input type="text" class="form-control" placeholder="Presentación" />
                                    </div>

                                </div>

                                <div class="col-4">

                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-calculator"></i></span>
                                        <input type="number" class="form-control" placeholder="Peso" />
                                    </div>

                                </div>

                            </div>



                            <div class="row">

                                <div class="col-4">

                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-person-check"></i></span>
                                        <input type="text" class="form-control" placeholder="Proveedor" />
                                    </div>

                                </div>

                                <div class="col-4">

                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-bag-check-fill"></i></span>
                                        <input type="number" class="form-control" placeholder="Volumen" />
                                    </div>

                                </div>

                                <div class="col-4">

                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-calendar-check"></i></span>
                                        <input type="text" class="form-control" placeholder="Fecha Ingreso" />
                                    </div>

                                </div>

                            </div>



                            <div class="row">

                                <div class="col-4">

                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-calendar-x"></i></span>
                                        <input type="text" class="form-control" placeholder="Fecha Vencimiento" />
                                    </div>

                                </div>

                                <div class="col-4">

                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-receipt"></i></span>
                                        <input type="number" class="form-control" placeholder="Descuento" />
                                    </div>

                                </div>



                            </div>

                        </form>

                    </div>



                </div>

            </div>



        </>

    )

}