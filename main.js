let listaTareas = [];

// Función para agregar una tarea
function agregarTarea() {
    let nombre = prompt("Ingrese el nombre de la tarea:");
    let descripcion = prompt("Ingrese la descripción de la tarea:");
    let fechaCreacion = new Date().toLocaleString(); // Obtener la fecha actual
    let tarea = {
        nombre: nombre,
        descripcion: descripcion,
        fechaCreacion: fechaCreacion,
        completada: false
    };
    listaTareas.push(tarea);
    actualizarStorage(); // Actualizar el almacenamiento local
    alert("Tarea agregada con éxito.");
}

// Función para eliminar una tarea
function eliminarTarea() {
    let mensaje = "Seleccione la tarea que desea eliminar:\n";
    listaTareas.forEach((tarea, index) => {
        mensaje += `${index}. ${tarea.nombre}\n`;
    });
    let tareaIndex = prompt(mensaje);
    if (tareaIndex !== null) {
        tareaIndex = parseInt(tareaIndex);
        if (!isNaN(tareaIndex) && tareaIndex >= 0 && tareaIndex < listaTareas.length) {
            let confirmacion = confirm(`Seguro que desea eliminar la tarea: ${listaTareas[tareaIndex].nombre}?`);
            if (confirmacion) {
                listaTareas.splice(tareaIndex, 1);
                actualizarStorage(); // Actualizar el almacenamiento local
                alert("Tarea eliminada con éxito.");
            } else {
                alert("Eliminación de tarea cancelada.");
            }
        } else {
            alert("Índice de tarea inválido.");
        }
    }
}

// Función para editar una tarea
function editarTarea() {
    let lista = listaTareas.map((tarea, index) => {
        return index + ": " + tarea.nombre;
    }).join("\n");
    if (listaTareas.length === 0) {
        alert("No hay tareas para editar.");
        return;
    }
    let indice = prompt("Seleccione el número de la tarea que desea editar:\n" + lista);
    if (indice !== null && !isNaN(indice) && listaTareas[indice]) {
        let nuevaNombre = prompt("Ingrese el nuevo nombre de la tarea:");
        let nuevaDescripcion = prompt("Ingrese la nueva descripción de la tarea:");
        listaTareas[indice].nombre = nuevaNombre;
        listaTareas[indice].descripcion = nuevaDescripcion;
        actualizarStorage(); // Actualizar el almacenamiento local
        alert("Tarea editada con éxito.");
    } else {
        alert("Índice de tarea no válido.");
    }
}

// Función para mostrar la fecha de creación de una tarea
function mostrarFechaCreacionTarea() {
    let mensaje = "Seleccione la tarea de la cual desea ver la fecha de creación:\n";
    listaTareas.forEach((tarea, index) => {
        mensaje += `${index}. ${tarea.nombre}\n`;
    });
    let tareaIndex = prompt(mensaje);
    if (tareaIndex !== null) {
        tareaIndex = parseInt(tareaIndex);
        if (!isNaN(tareaIndex) && tareaIndex >= 0 && tareaIndex < listaTareas.length) {
            let fechaCreacion = listaTareas[tareaIndex].fechaCreacion;
            alert(`La tarea "${listaTareas[tareaIndex].nombre}" fue creada el ${fechaCreacion}`);
        } else {
            alert("Índice de tarea inválido.");
        }
    }
}

// Función para mostrar la lista de tareas
function mostrarTareas() {
    let mensaje = "Lista de Tareas:\n";
    listaTareas.forEach((tarea, index) => {
        mensaje += `${index}. ${tarea.nombre} - ${tarea.descripcion}\n`;
    });
    alert(mensaje);
}

function filtrarTareasCompletadas(completadas) {
    let tareasFiltradas = listaTareas.filter(tarea => tarea.completada === completadas);
    if (tareasFiltradas.length === 0) {
        alert(`No hay tareas ${completadas ? 'completadas' : 'pendientes'}.`);
    } else {
        let mensaje = `Tareas ${completadas ? 'completadas' : 'pendientes'}:\n`;
        tareasFiltradas.forEach((tarea, index) => {
            mensaje += `${index + 1}. ${tarea.nombre} - ${tarea.descripcion}\n`;
        });
        alert(mensaje);
    }
}

function mostrarTareasPendientes() {
    let tareasPendientes = listaTareas.filter(tarea => !tarea.completada);
    mostrarListaTareas("Tareas Pendientes", tareasPendientes);
}

function mostrarTareasCompletadas() {
    let tareasCompletadas = listaTareas.filter(tarea => tarea.completada);
    mostrarListaTareas("Tareas Completadas", tareasCompletadas);
}

function mostrarListaTareas(titulo, tareas) {
    let mensaje = `${titulo}:\n`;
    tareas.forEach((tarea, index) => {
        mensaje += `${index + 1}. ${tarea.nombre} - ${tarea.descripcion}\n`;
    });
    alert(mensaje);
}

function marcarComoCompletada(index) {
    listaTareas[index].completada = !listaTareas[index].completada;
    alert(`La tarea "${listaTareas[index].nombre}" ha sido marcada como ${listaTareas[index].completada ? "completada" : "pendiente"}.`);
}

function marcarTareaCompletada() {
    let mensaje = "Seleccione la tarea que desea marcar como completada:\n";
    listaTareas.forEach((tarea, index) => {
        if (!tarea.completada) {
            mensaje += `${index}. ${tarea.nombre}\n`;
        }
    });
    let tareaIndex = prompt(mensaje);
    if (tareaIndex !== null) {
        tareaIndex = parseInt(tareaIndex);
        if (!isNaN(tareaIndex) && tareaIndex >= 0 && tareaIndex < listaTareas.length) {
            listaTareas[tareaIndex].completada = true;
            alert(`La tarea "${listaTareas[tareaIndex].nombre}" ha sido marcada como completada.`);
        } else {
            alert("Índice de tarea inválido.");
        }
    }
}

// Función para actualizar el almacenamiento local con la lista de tareas
function actualizarStorage() {
    localStorage.setItem('listaTareas', JSON.stringify(listaTareas));
}

// Función principal
// function main() {
//     // Obtener la lista de tareas del almacenamiento local al cargar la página
//     listaTareas = JSON.parse(localStorage.getItem('listaTareas')) || [];
//     document.getElementById("agregarBtn").addEventListener("click", agregarTarea);
//     document.getElementById("eliminarBtn").addEventListener("click", eliminarTarea);
//     document.getElementById("editarBtn").addEventListener("click", editarTarea);
//     document.getElementById("mostrarBtn").addEventListener("click", mostrarTareas);
//     document.getElementById("mostrarFechaBtn").addEventListener("click", mostrarFechaCreacionTarea);
// }

function main() {
    // Obtener la lista de tareas del almacenamiento local al cargar la página
    listaTareas = JSON.parse(localStorage.getItem('listaTareas')) || [];
    document.getElementById("agregarBtn").addEventListener("click", agregarTarea);
    document.getElementById("eliminarBtn").addEventListener("click", eliminarTarea);
    document.getElementById("editarBtn").addEventListener("click", editarTarea);
    document.getElementById("mostrarBtn").addEventListener("click", mostrarTareas);
    document.getElementById("mostrarFechaBtn").addEventListener("click", mostrarFechaCreacionTarea);
    document.getElementById("mostrarPendientesBtn").addEventListener("click", mostrarTareasPendientes);
    document.getElementById("mostrarCompletadasBtn").addEventListener("click", mostrarTareasCompletadas);
}

// Iniciar el programa
main();