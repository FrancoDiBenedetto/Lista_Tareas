
// Definir variable para almacenar las tareas

// let listaTareas = "";

let listaTareas = [];

// // Función para agregar una tarea a la lista
// function agregarTarea() {
//     let nuevaTarea = prompt("Ingrese la nueva tarea:");
//     if (nuevaTarea !== null) {
//         if (listaTareas === "") {
//             listaTareas += nuevaTarea;
//         } else {
//             listaTareas += "\n" + nuevaTarea;
//         }
//     }
// }


//2


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
    alert("Tarea agregada con éxito.");
}

// Función para eliminar una tarea de la lista
// function eliminarTarea() {
//     let tareaEliminar = prompt("Ingrese la tarea a eliminar:");
//     if (tareaEliminar !== null) {
//         if (listaTareas.includes(tareaEliminar)) {
//             listaTareas = listaTareas.replace(tareaEliminar, "").trim();
//         } else {
//             alert("La tarea especificada no existe en la lista.");
//         }
//     }
// }

//mejora de la funcion eliminarTarea:

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
                alert("Tarea eliminada con éxito.");
            } else {
                alert("Eliminación de tarea cancelada.");
            }
        } else {
            alert("Índice de tarea inválido.");
        }
    }
}

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
        alert("Tarea editada con éxito.");
    } else {
        alert("Índice de tarea no válido.");
    }
}

// Función para mostrar la lista de tareas actualizada
// function mostrarTareas() {
//     if (listaTareas === "") {
//         alert("No hay tareas en la lista.");
//     } else {
//         alert("Lista de tareas:\n" + listaTareas);
//     }
// }

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

// Función para mostrar la lista de tareas actualizada

// function mostrarTareas() {
//     if (listaTareas === "") {
//         alert("No hay tareas en la lista.");
//     } else {
//         alert("Lista de tareas:\n" + listaTareas);
//     }
// }

function mostrarTareas() {
    let mensaje = "Lista de Tareas:\n";
    listaTareas.forEach((tarea, index) => {
        mensaje += `${index}. ${tarea.nombre} - ${tarea.descripcion}\n`;
    });
    alert(mensaje);
}



// Función principal
// function main() {

//     alert("Bienvenido a la lista de tareas virtuales. Aquí podrás almacenar tus tareas y tener tus días más organizados.");

//     let opcion;
//     do {
//         opcion = prompt("Selecciona una opción:\n1. Agregar tarea\n2. Eliminar tarea\n3. Mostrar tareas\n4. Salir");

//         switch (opcion) {
//             case "1":
//                 agregarTarea();
//                 break;
//             case "2":
//                 eliminarTarea();
//                 break;
//             case "3":
//                 mostrarTareas();
//                 break;
//             case "4":
//                 alert("Saliendo del programa...");
//                 break;
//             default:
//                 alert("Opción no válida. Por favor, selecciona una opción válida.");
//         }
//     } while (opcion !== "4");
// }

// // Iniciar el programa
// main();


function main() {
    let opcion;
    do {
        opcion = prompt("Seleccione una opción:\n1. Agregar tarea\n2. Eliminar tarea\n3. Editar tarea\n4. Mostrar fecha de creación\n5. Mostrar tareas\n6. Salir");
        switch (opcion) {
            case "1":
                agregarTarea();
                break;
            case "2":
                eliminarTarea();
                break;
            case "3":
                editarTarea();
                break;
            case "4":
                mostrarFechaCreacion();
                break;
            case "5":
                mostrarTareas();
                break;
            case "6":
                alert("Saliendo del programa...");
                break;
            default:
                alert("Opción no válida. Por favor, selecciona una opción válida.");
        }
    } while (opcion !== "6");
}
