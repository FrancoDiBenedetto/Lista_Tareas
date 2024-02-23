
// Definir variable para almacenar las tareas
let listaTareas = "";

// Función para agregar una tarea a la lista
function agregarTarea() {
    let nuevaTarea = prompt("Ingrese la nueva tarea:");
    if (nuevaTarea !== null) {
        if (listaTareas === "") {
            listaTareas += nuevaTarea;
        } else {
            listaTareas += "\n" + nuevaTarea;
        }
    }
}

// Función para eliminar una tarea de la lista
function eliminarTarea() {
    let tareaEliminar = prompt("Ingrese la tarea a eliminar:");
    if (tareaEliminar !== null) {
        if (listaTareas.includes(tareaEliminar)) {
            listaTareas = listaTareas.replace(tareaEliminar, "").trim();
        } else {
            alert("La tarea especificada no existe en la lista.");
        }
    }
}

// Función para mostrar la lista de tareas actualizada
function mostrarTareas() {
    if (listaTareas === "") {
        alert("No hay tareas en la lista.");
    } else {
        alert("Lista de tareas:\n" + listaTareas);
    }
}

// Función principal
function main() {

    alert("Bienvenido a la lista de tareas virtuales. Aquí podrás almacenar tus tareas y tener tus días más organizados.");

    let opcion;
    do {
        opcion = prompt("Selecciona una opción:\n1. Agregar tarea\n2. Eliminar tarea\n3. Mostrar tareas\n4. Salir");

        switch (opcion) {
            case "1":
                agregarTarea();
                break;
            case "2":
                eliminarTarea();
                break;
            case "3":
                mostrarTareas();
                break;
            case "4":
                alert("Saliendo del programa...");
                break;
            default:
                alert("Opción no válida. Por favor, selecciona una opción válida.");
        }
    } while (opcion !== "4");
}

// Iniciar el programa
main();


// // Definir variable para almacenar las tareas
// let listaTareas = "";

// // Función para agregar una tarea a la lista
// function agregarTarea(tarea) {
//     if (listaTareas === "") {
//         listaTareas += tarea;
//     } else {
//         listaTareas += "\n" + tarea;
//     }
// }

// // Función para eliminar una tarea de la lista
// function eliminarTarea(tarea) {
//     if (listaTareas.includes(tarea)) {
//         listaTareas = listaTareas.replace(tarea, "").trim();
//     } else {
//         console.log("La tarea especificada no existe en la lista.");
//     }
// }

// // Función para mostrar la lista de tareas actualizada
// function mostrarTareas() {
//     if (listaTareas === "") {
//         console.log("No hay tareas en la lista.");
//     } else {
//         console.log("Lista de tareas:");
//         console.log(listaTareas);
//     }
// }

// // Función principal
// function main() {
//     let opcion;
//     do {
//         console.log("1. Agregar tarea");
//         console.log("2. Eliminar tarea");
//         console.log("3. Mostrar tareas");
//         console.log("4. Salir");
//         opcion = parseInt(prompt("Seleccione una opción:"));

//         switch (opcion) {
//             case 1:
//                 let nuevaTarea = prompt("Ingrese la nueva tarea:");
//                 agregarTarea(nuevaTarea);
//                 mostrarTareas();
//                 break;
//             case 2:
//                 let tareaEliminar = prompt("Ingrese la tarea a eliminar:");
//                 eliminarTarea(tareaEliminar);
//                 mostrarTareas();
//                 break;
//             case 3:
//                 mostrarTareas();
//                 break;
//             case 4:
//                 console.log("Saliendo del programa...");
//                 break;
//             default:
//                 console.log("Opción no válida. Por favor, seleccione una opción válida.");
//         }
//     } while (opcion !== 4);
// }

// // Llamar a la función principal para ejecutar el programa
// main();



// // Definir variable para almacenar las tareas
// let listaTareas = "";

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

// // Función para eliminar una tarea de la lista
// function eliminarTarea() {
//     let tareaEliminar = prompt("Ingrese la tarea a eliminar:");
//     if (tareaEliminar !== null) {
//         if (listaTareas.includes(tareaEliminar)) {
//             listaTareas = listaTareas.replace(tareaEliminar, "").trim();
//         } else {
//             console.log("La tarea especificada no existe en la lista.");
//         }
//     }
// }

// // Función para mostrar la lista de tareas actualizada
// function mostrarTareas() {
//     if (listaTareas === "") {
//         console.log("No hay tareas en la lista.");
//     } else {
//         console.log("Lista de tareas:");
//         console.log(listaTareas);
//     }
// }

// // Función para salir del programa
// function salir() {
//     console.log("Saliendo del programa...");
// }

