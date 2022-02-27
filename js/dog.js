const perro = document.getElementById("perro");

const getPic = async() => {
    let peticion = await fetch("https://dog.ceo/api/breeds/image/random",
    {    method: "GET",
    });

    let error = "Error de peticion"; // Si no se ha cargado bien la imagen

    if(peticion.status === 200)
    {
        let info = await peticion.json();
        if(info.status === "success")
        {
            imagen = info.message;
        }
    }
    else{
        imagen = error;
    }
};

const setPic = async () => {
    const img = document.createAttribute("src");

    await getPic();
    //console.log(imagen);
    img.value = imagen; 
    perro.setAttributeNode(img);
};


setPic();












