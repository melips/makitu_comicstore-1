export function Tienda(){

    let productos = [
        {
            nombre: "Spiderman Gameverse",
            precio: 82000,
            descripcion: "Comic Spiderman Gameverse, impreso en español por la editorial Ovnipress de Argentina, edición en pasta blanda, 144 páginas a color.",
            foto: "https://firebasestorage.googleapis.com/v0/b/comicstore-aff4a.appspot.com/o/Spiderman-gamerverse.jpg?alt=media&token=6cbc8603-415a-457b-a71a-338a874337a7"  
        },

        {
            nombre: "Flash 80 years of the fastest man alive HC",
            precio: 189000,
            descripcion: "Comic FLASH 80 YEARS OF THE FASTEST MAN ALIVE HC, impreso en inglés por la editorial Dc Usa, edición en pasta dura deluxe, 376 páginas a full color.",
            foto: "https://firebasestorage.googleapis.com/v0/b/comicstore-aff4a.appspot.com/o/Flash%2080%20years%20of%20the%20fastest%20MAN%20ALIVE%20HC.jpg?alt=media&token=339c5c4b-9ea3-43a0-a025-628087cb6c9e"
        },

        {
            nombre: "Food Wars número 7",
            precio: 27000,
            descripcion: "Manga Food Wars número 7, publicado por la editorial Panini México en español, edición en pasta blanda, 216 páginas a blanco y negro.",
            foto: "https://firebasestorage.googleapis.com/v0/b/comicstore-aff4a.appspot.com/o/Food%20Wars%20n%C3%BAmero%207.webp?alt=media&token=06df4ab3-bd14-4e64-b554-3f0849df4ee1"
        },

        {
            nombre: "BATMAN Historias de la Batcueva el principe Payaso de los Naipes",
            precio: 30000,
            descripcion: "Comic Batman Historias de la Batcueva El Principe Payaso de los Naipes, impreso en español por la editorial Ecc, edición en pasta blanda, 48 páginas a full color",
            foto: "https://firebasestorage.googleapis.com/v0/b/comicstore-aff4a.appspot.com/o/BATMAN%20HISTORIAS%20DE%20LA%20BATCUEVA%20EL%20PRINCIPE%20PAYASO%20DE%20LOS%20NAIPES.jpg?alt=media&token=e0105a03-579f-40da-adf7-267f93189b97"
        },

        {
            nombre: "THANOS VS HULK",
            precio: 45000,
            descripcion: "Comic Thanos Vs Hulk, impreso en español por la editorial Ovnipress de Argentina, edición en pasta blanda, 88 páginas a full color, edición de tamaño 15x21 cm.",
            foto: "https://firebasestorage.googleapis.com/v0/b/comicstore-aff4a.appspot.com/o/THANOS%20VS%20HULK.webp?alt=media&token=f0bdda2f-80a4-4da3-8f7b-029de0652e30"
        },

        {
            nombre: "Death Note Número 1",
            precio: 39900,
            descripcion: "Manga Death Note número 1, publicado por la editorial Ivrea Argentina en español, edición en pasta blanda, 216 páginas a blanco y negro.",
            foto: "https://firebasestorage.googleapis.com/v0/b/comicstore-aff4a.appspot.com/o/DEATH%20NOTE%20N%C3%9AMERO%201.jpeg?alt=media&token=80b465d9-f125-4a92-8bd6-553de0c6a559"
        },

        {
            nombre: "DEATHSTROKE REBIRTH número 1",
            precio: 95000,
            descripcion: "Comic Deathstroke Rebirth número 1, impreso en español por la editorial Ecc España, edición en pasta blanda, 200 páginas a full color.",
            foto: "https://firebasestorage.googleapis.com/v0/b/comicstore-aff4a.appspot.com/o/DEATHSTROKE%20REBIRTH%20N%C3%9AMERO%201.jpg?alt=media&token=7dc85074-8f8d-4c82-b512-bae8415b1c30"
        },

        {
            nombre: "Solo Leveling Número 1",
            precio: 140000,
            descripcion: "Manwha Solo Leveling número 1, publicado por la editorial Ivrea Argentina en español, edición en pasta blanda formato Kanzenban, 316  páginas a color.",
            foto: "https://firebasestorage.googleapis.com/v0/b/comicstore-aff4a.appspot.com/o/SOLO%20LEVELING%20N%C3%9AMERO%201.jpg?alt=media&token=05477c6c-139e-4c9a-a95c-b89a7e35a702" 
        },

        {
            nombre: "NARUTO secretos escritura de la lucha",
            precio: 66000,
            descripcion: "Novela Naruto Secretos Escritura de la Lucha, impreso en español por la editorial Panini México, edición en pasta blanda, 320 páginas a blanco y negro.",
            foto: "https://firebasestorage.googleapis.com/v0/b/comicstore-aff4a.appspot.com/o/NARUTO%20SECRETOS%20ESCRITURA%20DE%20LA%20LUCHA.webp?alt=media&token=7095610b-098e-4088-9212-6cbb8347c6de" 
        },

        {
            nombre: "SAILOR V Número 1 de 2",
            precio: 35000,
            descripcion: "Manga Sailor V número 1 de 2, publicado por la editorial Panini México en español, edición en pasta blanda, 320 páginas a blanco y negro.",
            foto: "https://firebasestorage.googleapis.com/v0/b/comicstore-aff4a.appspot.com/o/SAILOR%20V%20N%C3%9AMERO%201%20DE%202.webp?alt=media&token=850c7c11-3c7b-408f-9d59-19aab5410a11" 
        },
    ]



    return(
        <>
            <br></br>
            <br></br>
            <br></br>
            <div class = "row row-cols-1 row-cols-md-5 g-3 my-5">
                {
                    productos.map(function(producto){
                        return(
                            <div class ="col">
                                <div class = "card shadow h-100">
                                    <img src={producto.foto} alt="" class ="img-fluid"/>
                                    <h4 class="text-center fw-bold">{producto.nombre}</h4>
                                    <h5 class = "text-success">${producto.precio} COP</h5>
                                    <p class = "text-justify">{producto.descripcion}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}