const listafrutas = document.getElementById("lista-frutas");
const btnAgregar = document.getElementById("btn-agregar");
const inputText = document.getElementById("input-fruta");

let frutas = [];

function actualizarDatos() {
    listafrutas.innerHTML = "";

    frutas.forEach((fruta, indice)=>{
        const li = document.createElement("li");


        const checkbox = document.createElement("input");
        checkbox.type="checkbox";
        checkbox.checked = fruta.completada;


        checkbox.addEventListener("change", ()=>{
            fruta.completada = !fruta.completada;
            actualizarDatos();
        });

        const span = document.createElement("span");
        span.textContent=fruta.texto;


        if (fruta.completada){
            span.style.textDecoration="line-through";
        };

                // --- Botón eliminar ---
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "X";
        btnEliminar.addEventListener("click", () => {
            frutas.splice(indice, 1);
            actualizarDatos();
        });

        // --- Montar ---
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(btnEliminar);
        listafrutas.appendChild(li);



    });


}
// --- Agregar fruta ---
btnAgregar.addEventListener("click", () => {
    const texto = inputText.value.trim();
    if (texto === "") return;

    frutas.push({ texto: texto, completada: false });   // ✅ con A
    inputText.value = "";
    actualizarDatos();
});

actualizarDatos();