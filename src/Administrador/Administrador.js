import Swal from 'sweetalert2'
import "./Administrador.css"
import { useState, useEffect } from "react"
import { registrarProductoEnBd } from "../services/agregarProducto"

export function Administrador() {

    const [nombre, setNombre]=useState("")
    const [foto, setFoto]=useState("")
    const [cantidad, setCantidad]=useState("")
    const [descripcion, setDescripcion]=useState("")
    const [precio, setPrecio]=useState("")
    const [clasificacion, setClasificacion]=useState("")
    const [marca, setMarca]=useState("")
    const [presentacion, setPresentacion]=useState("")
    const [peso, setPeso]=useState("")
    const [proveedor, setProveedor]=useState("")
    const [volumen, setVolumen]=useState("")
    const [fechaingreso, setFechaIngreso]=useState("")
    const [fechavencimiento, setFechaVencimiento]=useState("")
    const [descuento, setDescuento]=useState("")

    function procesarFormulario(evento){

        evento.preventDefault()
        let datosProducto={

            "nombre": nombre,
            "cantidad": cantidad,
            "foto":foto,
            "precioUnitario":precio,

        }

        console.log(datosProducto)
        registrarProductoEnBd(datosProducto)
        .then(function(respuesta){

            Swal.fire(

                'Registro exitoso :D',
                'Has registrado un nuevo producto',
                'success'

              )

        })

        .catch(function(error){

            Swal.fire({

                icon: 'error',
                title: 'Oops...',
                text: 'No pudimos retirar el producto :c',
            
              })

        })

    }



    return (

        <>

            <br></br>
            <br></br>


            <div class="container-fluid  my-5">

                <div class="row justify-content-center">

                    <div class="col-5 align-self-center">

                        <img src="https://firebasestorage.googleapis.com/v0/b/comicstore-aff4a.appspot.com/o/AgregarProducto.png?alt=media&token=fe462153-5ff4-452a-a82c-131d7e164e08" alt="foto" class="img-fluid imgp" />

                    </div>

                    <div class="col-5 ">

                        <img src="https://firebasestorage.googleapis.com/v0/b/comicstore-32b08.appspot.com/o/WhatsApp_Image_2023-04-23_at_11.02.14_PM__1_-removebg-preview.png?alt=media&token=a2844539-22ad-4966-bbb1-e5bd3a435950" alt="foto" class="img-fluid icono2p "></img>

                        <br></br>  
                        <br></br>  

                        <form onSubmit={procesarFormulario}>

                            <div class="row justify-content-center">

                                <div class="col-4">

                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-cart-check-fill"></i></span>
                                        <input 

                                            type="text"
                                            class="form-control"
                                            placeholder="Nombre"
                                            id="nombre"
                                            onChange={(evento)=>{

                                                setNombre(evento.target.value)

                                            }}
                                            
                                            />
                                    </div>

                                </div>

                                <div class="col-4">

                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-image-fill"></i></span>
                                        <input 
                                        
                                        type="text" 
                                        class="form-control" 
                                        placeholder="Foto" 
                                        id="foto" 
                                        onChange={(evento)=>{

                                            setFoto(evento.target.value)

                                        }}
                                        
                                        />
                                    </div>

                                </div>

                                <div class="col-4">

                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-check2-square"></i></span>
                                        <input 
                                        
                                        type="number" 
                                        class="form-control" 
                                        placeholder="Cantidad" 
                                        id="cantidad" 
                                        onChange={(evento)=>{

                                            setCantidad(evento.target.value)

                                        }}
                                        
                                        />
                                    </div>

                                </div>


                            </div>



                            <div class="row">

                                <div class="col-4">

                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-pencil-square"></i></span>
                                        <textarea 
                                        
                                        type="text" 
                                        class="form-control" 
                                        placeholder="Descripción" 
                                        id="descripcion" 
                                        onChange={(evento)=>{

                                            setDescripcion(evento.target.value)

                                        }}
                                        
                                        />
                                    </div>

                                </div>

                                <div class="col-4">

                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-image-fill"></i></span>
                                        <input 
                                        
                                        type="number" 
                                        class="form-control"
                                        placeholder="Precio" 
                                        id="precio"
                                        onChange={(evento)=>{

                                            setPrecio(evento.target.value)

                                        }}
                                        
                                        />
                                    </div>

                                </div>

                                <div class="col-4">

                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-list-stars"></i></span>
                                        <input 
                                        
                                        type="text" 
                                        class="form-control" 
                                        placeholder="Clasificación" 
                                        id="clasificacion"
                                        onChange={(evento)=>{

                                            setClasificacion(evento.target.value)

                                        }}

                                        />
                                    </div>

                                </div>

                            </div>


                            <div class="row">

                                <div class="col-4">

                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-tags-fill"></i></span>
                                        <input 
                                        
                                        type="text" 
                                        class="form-control" 
                                        placeholder="Marca" 
                                        id="marca"
                                        onChange={(evento)=>{

                                            setMarca(evento.target.value)

                                        }}

                                        />
                                    </div>

                                </div>

                                <div class="col-4">

                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-star-fill"></i></span>
                                        <input 
                                        
                                        type="text" 
                                        class="form-control"
                                        placeholder="Presentación" 
                                        id="presentacion"
                                        onChange={(evento)=>{

                                            setPresentacion(evento.target.value)

                                        }}
                                        
                                        />
                                    </div>

                                </div>

                                <div class="col-4">

                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-calculator"></i></span>
                                        <input 
                                        
                                        type="number" 
                                        class="form-control" 
                                        placeholder="Peso" 
                                        id="peso"
                                        onChange={(evento)=>{

                                            setPeso(evento.target.value)

                                        }}
                                        
                                        />
                                    </div>

                                </div>

                            </div>



                            <div class="row">

                                <div class="col-4">

                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-person-check"></i></span>
                                        <input 
                                        
                                        type="text" 
                                        class="form-control" 
                                        placeholder="Proveedor" 
                                        id="proveedor"
                                        onChange={(evento)=>{

                                            setProveedor(evento.target.value)

                                        }}
                                        
                                        />
                                    </div>

                                </div>

                                <div class="col-4">

                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-bag-check-fill"></i></span>
                                        <input 
                                        
                                        type="number" 
                                        class="form-control" 
                                        placeholder="Volumen" 
                                        id="volumen"
                                        onChange={(evento)=>{

                                            setVolumen(evento.target.value)

                                        }}

                                        />
                                    </div>

                                </div>

                                <div class="col-4">

                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-calendar-check"></i></span>
                                        <input 
                                        
                                        type="text" 
                                        class="form-control" 
                                        placeholder="Fecha Ingreso" 
                                        id="fechaingreso"
                                        onChange={(evento)=>{

                                            setFechaIngreso(evento.target.value)

                                        }}
                                        
                                        />
                                    </div>

                                </div>

                            </div>



                            <div class="row">

                                <div class="col-4">

                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-calendar-x"></i></span>
                                        <input 

                                        type="text" 
                                        class="form-control" 
                                        placeholder="Fecha Vencimiento" 
                                        id="fechavencimiento"
                                        onChange={(evento)=>{

                                            setFechaVencimiento(evento.target.value)

                                        }}
                                        
                                        />
                                    </div>

                                </div>

                                <div class="col-4">

                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-receipt"></i></span>
                                        <input 
                                        
                                        type="number" 
                                        class="form-control" 
                                        placeholder="Descuento" 
                                        id="descuento"
                                        onChange={(evento)=>{

                                            setDescuento(evento.target.value)

                                        }}
                                        
                                        />
                                    </div>

                                </div>


                                <br></br>  
                                <br></br> 
                                <br></br>  


                            </div>

                                    <button type="submit" class="btn btn-outline-danger w-100">Enviar</button>

                        </form>

                    </div>

                </div>

            </div>



        </>

    )

}