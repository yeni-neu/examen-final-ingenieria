function mostrarDatos() {
    const datos = document.getElementById("datos");
    datos.innerHTML = ""; 

    const nombre = document.createElement("h4");
    nombre.textContent = "Nombre: Yenifer Magali Neubauer";

    const dni = document.createElement("h4");
    dni.textContent = "DNI: 44.518.511";

    const examen = document.createElement("h4");
    examen.textContent = "Exámen Final";

    datos.appendChild(nombre);
    setTimeout(() => nombre.style.opacity = 1, 500);

    datos.appendChild(dni);
    setTimeout(() => dni.style.opacity = 1, 1000);

    datos.appendChild(examen);
    setTimeout(() => examen.style.opacity = 1, 1500);
}
