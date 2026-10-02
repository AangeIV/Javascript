    const listaTareas = document.getElementById("lista-tareas");
    const btnAgregar = document.getElementById("btn-agregar");
    const inputTarea = document.getElementById("input-tareas");
    const contador = document.getElementById("contador");

    let tareas = [];

    function actualizarDatos() {
        listaTareas.innerHTML = "";
        contador.textContent = "Tienes " + tareas.length + " tareas";

        tareas.forEach((tarea, indice) => {
            const li = document.createElement("li");


            li.textContent = tarea.texto;

            const boton = document.createElement("button");
            boton.textContent = "X"; 
            const check = document.createElement("input")
            check.type="checkbox";

            boton.addEventListener("click", () => {
                tareas.splice(indice, 1);
                actualizarDatos();
            });

            li.appendChild(boton);
            listaTareas.appendChild(li);
        });
    }

    btnAgregar.addEventListener("click", () => {
        const texto = inputTarea.value.trim();
        if (texto === "") return;

        tareas.push({ texto: texto, completada: false });
        inputTarea.value = "";
        actualizarDatos();
    });

    actualizarDatos();