//persona 1
const foto1 = document.getElementById("foto1");
const nombre1 = document.getElementById("nombre1");
const lugar1 = document.getElementById("lugar1");
const correo1 = document.getElementById("correo1");

//persona 2
const foto2 = document.getElementById("foto2");
const nombre2 = document.getElementById("nombre2");
const lugar2 = document.getElementById("lugar2");
const correo2 = document.getElementById("correo2");

//persona 3
const foto3 = document.getElementById("foto3");
const nombre3 = document.getElementById("nombre3");
const lugar3 = document.getElementById("lugar3");
const correo3 = document.getElementById("correo3");

let json = "Dato no disponible";
//console.log(imagen);

const getJson = async() => {
    let peticion = await fetch("https://randomuser.me/api/",
    {    method: "GET",
    });

    let error = "Error de peticion"; // Si no se ha cargado bien el json

    if(peticion.status === 200)
    {
        let info = await peticion.json();
        json = info.results["0"];
    }
    else{
        json = error;
    }
};

const setInfo = async () => {
    const img1 = document.createAttribute("src");
    const img2 = document.createAttribute("src");
    const img3 = document.createAttribute("src");

    //Primera persona
    await getJson();
    //console.log(json);
    // Nombre
    nombre1.innerHTML = json.name.first + " " + json.name.last;

    //Lugar
    lugar1.innerHTML = json.location.city + " (" + json.location.country + ")"; 

    //Correo
    correo1.innerHTML = json.email;

    //Foto
    img1.value = json.picture.large; 
    foto1.setAttributeNode(img1);

    //Segunda persona
    await getJson();
    //console.log(json);
    // Nombre
    nombre2.innerHTML = json.name.first + " " + json.name.last;

    //Lugar
    lugar2.innerHTML = json.location.city + " (" + json.location.country + ")"; 

    //Correo
    correo2.innerHTML = json.email;

    //Foto
    img2.value = json.picture.large; 
    foto2.setAttributeNode(img2);

    //Tercera persona
    await getJson();
    //console.log(json);
    // Nombre
    nombre3.innerHTML = json.name.first + " " + json.name.last;

    //Lugar
    lugar3.innerHTML = json.location.city + " (" + json.location.country + ")"; 

    //Correo
    correo3.innerHTML = json.email;

    //Foto
    img3.value = json.picture.large; 
    foto3.setAttributeNode(img3);
    
};


setInfo();