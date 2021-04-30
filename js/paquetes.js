$(document).ready(function () {
    $("#tasks").DataTable({
        language: {
            url: "../json/idioma.json",
        },
        responsive: "true",
        dom: "Bfrtilp",
        buttons: [
            {
                extend: "excelHtml5",
                text: `<i class='bx bx-table'></i>`,
                titleAttr: "exportar a excel",
                className: "btn btn-outline-success",
            },
            {
                extend: "pdf",
                text: `<i class='bx bxs-file-pdf'></i>`,
                titleAttr: "exportar a PDF",
                className: "btn btn-outline-danger",
            },
            {
                extend: "print",
                text: `<i class='bx bxs-printer' ></i>`,
                titleAttr: "Imprimir",
                className: "btn btn-outline-info",
            },
        ],
    });
});
loadFromLocalStorage()
let botonenviar = document.getElementById("botonenviar");
let botoneditar = document.getElementById("botoneditar");

botoneditar.disabled = true;

function guardar() {
    const nombre = document.getElementById("inputnombre").value;
    const apellido = document.getElementById("inputapellido").value;
    const correo = document.getElementById("inputemail").value;
    const telefono = document.getElementById("inputtel").value;
    const destino = document.getElementById("inputDestino").value;
    const paquete = document.getElementById("inputPaquete").value;
    const tiempo = document.getElementById("inputTiempo").value;
    let precio = 0;

    switch (destino) {
        case 'Madrid':
            if (paquete == 'Hotel') {
                if (tiempo == '3 dias 2 noches') {
                    precio = 2500;
                } else if (tiempo == '1 semana') {
                    precio = 5000;
                } else if (tiempo == '2 semanas') {
                    precio = 8000;
                } else {
                    //alert('favor escoja una opcion')
                }


            }
            else if (paquete == 'Vuelo') {
                if (tiempo == '3 dias 2 noches') {
                    precio = 500;
                } else if (tiempo == '1 semana') {
                    precio = 1000;
                } else if (tiempo == '2 semanas') {
                    precio = 1500;
                } else {
                    //alert('favor escoja una opcion')
                }
            }
            else if (paquete == 'Paquete Completo') {
                if (tiempo == '3 dias 2 noches') {
                    precio = 3000;
                } else if (tiempo == '1 semana') {
                    precio = 6000;
                } else if (tiempo == '2 semanas') {
                    precio = 9000;
                } else {
                    //alert('favor escoja una opcion')
                }
            }
            else {
                //alert('favor escoja una opcion')
            }


            break;
        case 'Cartagena':
            if (paquete == 'Hotel') {
                if (tiempo == '3 dias 2 noches') {
                    precio = 1400;
                } else if (tiempo == '1 semana') {
                    precio = 2600;
                } else if (tiempo == '2 semanas') {
                    precio = 4000;
                } else {
                    //alert('favor escoja una opcion')
                }


            }
            else if (paquete == 'Vuelo') {
                if (tiempo == '3 dias 2 noches') {
                    precio = 100;
                } else if (tiempo == '1 semana') {
                    precio = 100;
                } else if (tiempo == '2 semanas') {
                    precio = 100;
                } else {
                    //alert('favor escoja una opcion')
                }
            }
            else if (paquete == 'Paquete Completo') {
                if (tiempo == '3 dias 2 noches') {
                    precio = 1500;
                } else if (tiempo == '1 semana') {
                    precio = 2700;
                } else if (tiempo == '2 semanas') {
                    precio = 4100;
                } else {
                    //alert('favor escoja una opcion')
                }
            }
            else {
                //alert('favor escoja una opcion')
            }
            break;

        case 'Venecia':
            if (paquete == 'Hotel') {
                if (tiempo == '3 dias 2 noches') {
                    precio = 4500;
                } else if (tiempo == '1 semana') {
                    precio = 10000;
                } else if (tiempo == '2 semanas') {
                    precio = 15000;
                } else {
                    //alert('favor escoja una opcion')
                }


            }
            else if (paquete == 'Vuelo') {
                if (tiempo == '3 dias 2 noches') {
                    precio = 500;
                } else if (tiempo == '1 semana') {
                    precio = 500;
                } else if (tiempo == '2 semanas') {
                    precio = 1000;
                } else {
                    //alert('favor escoja una opcion')
                }
            }
            else if (paquete == 'Paquete Completo') {
                if (tiempo == '3 dias 2 noches') {
                    precio = 5000;
                } else if (tiempo == '1 semana') {
                    precio = 10500;
                } else if (tiempo == '2 semanas') {
                    precio = 16000;
                } else {
                    //alert('favor escoja una opcion')
                }
            }
            else {
                //alert('favor escoja una opcion')
            }
            break;

        case 'New York':
            if (paquete == 'Hotel') {
                if (tiempo == '3 dias 2 noches') {
                    precio = 3000;
                } else if (tiempo == '1 semana') {
                    precio = 6000;
                } else if (tiempo == '2 semanas') {
                    precio = 9000;
                } else {
                    //alert('favor escoja una opcion')
                }


            }
            else if (paquete == 'Vuelo') {
                if (tiempo == '3 dias 2 noches') {
                    precio = 500;
                } else if (tiempo == '1 semana') {
                    precio = 500;
                } else if (tiempo == '2 semanas') {
                    precio = 1000;
                } else {
                    //alert('favor escoja una opcion')
                }
            }
            else if (paquete == 'Paquete Completo') {
                if (tiempo == '3 dias 2 noches') {
                    precio = 3500;
                } else if (tiempo == '1 semana') {
                    precio = 6500;
                } else if (tiempo == '2 semanas') {
                    precio = 10000;
                } else {
                    //alert('favor escoja una opcion')
                }
            }
            else {
                //alert('favor escoja una opcion')
            }
            break;

        case 'Curazao':
            if (paquete == 'Hotel') {
                if (tiempo == '3 dias 2 noches') {
                    precio = 5000;
                } else if (tiempo == '1 semana') {
                    precio = 10000;
                } else if (tiempo == '2 semanas') {
                    precio = 15000;
                } else {
                    //alert('favor escoja una opcion')
                }


            }
            else if (paquete == 'Vuelo') {
                if (tiempo == '3 dias 2 noches') {
                    precio = 500;
                } else if (tiempo == '1 semana') {
                    precio = 1000;
                } else if (tiempo == '2 semanas') {
                    precio = 1000;
                } else {
                    //alert('favor escoja una opcion')
                }
            }
            else if (paquete == 'Paquete Completo') {
                if (tiempo == '3 dias 2 noches') {
                    precio = 5500;
                } else if (tiempo == '1 semana') {
                    precio = 11000;
                } else if (tiempo == '2 semanas') {
                    precio = 16000;
                } else {
                    //alert('favor escoja una opcion')
                }
            }
            else {
                //alert('favor escoja una opcion')
            }
            break;

        case 'Medellin':
            if (paquete == 'Hotel') {
                if (tiempo == '3 dias 2 noches') {
                    precio = 800;
                } else if (tiempo == '1 semana') {
                    precio = 1600;
                } else if (tiempo == '2 semanas') {
                    precio = 2200;
                } else {
                    //alert('favor escoja una opcion')
                }


            }
            else if (paquete == 'Vuelo') {
                if (tiempo == '3 dias 2 noches') {
                    precio = 200;
                } else if (tiempo == '1 semana') {
                    precio = 200;
                } else if (tiempo == '2 semanas') {
                    precio = 200;
                } else {
                    //alert('favor escoja una opcion')
                }
            }
            else if (paquete == 'Paquete Completo') {
                if (tiempo == '3 dias 2 noches') {
                    precio = 1000;
                } else if (tiempo == '1 semana') {
                    precio = 1800;
                } else if (tiempo == '2 semanas') {
                    precio = 2400;
                } else {
                    //alert('favor escoja una opcion')
                }
            }
            else {
                //alert('favor escoja una opcion')
            }
            break;

        case 'La Romana':
            if (paquete == 'Hotel') {
                if (tiempo == '3 dias 2 noches') {
                    precio = 2000;
                } else if (tiempo == '1 semana') {
                    precio = 4000;
                } else if (tiempo == '2 semanas') {
                    precio = 6000;
                } else {
                    //alert('favor escoja una opcion')
                }


            }
            else if (paquete == 'Vuelo') {
                if (tiempo == '3 dias 2 noches') {
                    precio = 500;
                } else if (tiempo == '1 semana') {
                    precio = 500;
                } else if (tiempo == '2 semanas') {
                    precio = 500;
                } else {
                    //alert('favor escoja una opcion')
                }
            }
            else if (paquete == 'Paquete Completo') {
                if (tiempo == '3 dias 2 noches') {
                    precio = 2500;
                } else if (tiempo == '1 semana') {
                    precio = 4500;
                } else if (tiempo == '2 semanas') {
                    precio = 6500;
                } else {
                    //alert('favor escoja una opcion')
                }
            }
            else {
                //alert('favor escoja una opcion')
            }
            break;

        case 'Eje Cafetero':
            if (paquete == 'Hotel') {
                if (tiempo == '3 dias 2 noches') {
                    precio = 1800;
                } else if (tiempo == '1 semana') {
                    precio = 3600;
                } else if (tiempo == '2 semanas') {
                    precio = 6000;
                } else {
                    //alert('favor escoja una opcion')
                }


            }
            else if (paquete == 'Vuelo') {
                if (tiempo == '3 dias 2 noches') {
                    precio = 200;
                } else if (tiempo == '1 semana') {
                    precio = 400;
                } else if (tiempo == '2 semanas') {
                    precio = 500;
                } else {
                    //alert('favor escoja una opcion')
                }
            }
            else if (paquete == 'Paquete Completo') {
                if (tiempo == '3 dias 2 noches') {
                    precio = 2000;
                } else if (tiempo == '1 semana') {
                    precio = 4000;
                } else if (tiempo == '2 semanas') {
                    precio = 6500;
                } else {
                    //alert('favor escoja una opcion')
                }
            }
            else {
                //alert('favor escoja una opcion')
            }
            break;

        case 'Cuernavaca':
            if (paquete == 'Hotel') {
                if (tiempo == '3 dias 2 noches') {
                    precio = 3500;
                } else if (tiempo == '1 semana') {
                    precio = 7000;
                } else if (tiempo == '2 semanas') {
                    precio = 10000;
                } else {
                    //alert('favor escoja una opcion')
                }


            }
            else if (paquete == 'Vuelo') {
                if (tiempo == '3 dias 2 noches') {
                    precio = 5000;
                } else if (tiempo == '1 semana') {
                    precio = 500;
                } else if (tiempo == '2 semanas') {
                    precio = 1000;
                } else {
                    //alert('favor escoja una opcion')
                }
            }
            else if (paquete == 'Paquete Completo') {
                if (tiempo == '3 dias 2 noches') {
                    precio = 4000;
                } else if (tiempo == '1 semana') {
                    precio = 7500;
                } else if (tiempo == '2 semanas') {
                    precio = 11000;
                } else {
                    //alert('favor escoja una opcion')
                }
            }
            else {
                //alert('favor escoja una opcion')
            }
            break;

        default:

            break;
    }

    let paquetes = {
        nombre,
        apellido,
        correo,
        telefono,
        destino,
        paquete,
        tiempo,
        precio,
    };

    if (localStorage.getItem("listaPaquetes") === null) {
        let listaPaquetes = [];
        listaPaquetes.push(paquetes);
        localStorage.setItem("listaPaquetes", JSON.stringify(listaPaquetes));
    } else {
        let listaPaquetes = JSON.parse(localStorage.getItem("listaPaquetes"));
        listaPaquetes.push(paquetes);
        localStorage.setItem("listaPaquetes", JSON.stringify(listaPaquetes));
    }

    loadFromLocalStorage();
    location.reload();


}

function eliminar(id) {
    console.log(id);
    let listaPaquetes = JSON.parse(localStorage.getItem("listaPaquetes"));
    for (let i = 0; i < listaPaquetes.length; i++) {
        if (i == id) {

            listaPaquetes.splice(i, 1);
        }
    }


    localStorage.setItem("listaPaquetes", JSON.stringify(listaPaquetes));
    if (listaPaquetes.length == 0) {
        localStorage.removeItem('listaPaquetes')
        location.reload();
    }
    loadFromLocalStorage();

}

function editar(id) {
    console.log(id);
    botoneditar.disabled = false;

    botonenviar.disabled = true;
    let listaPaquetes = JSON.parse(localStorage.getItem("listaPaquetes"));
    for (let i = 0; i < listaPaquetes.length; i++) {
        if (i == id) {
            document.getElementById("inputnombre").value = listaPaquetes[i].nombre;
            document.getElementById("inputapellido").value = listaPaquetes[i].apellido;
            document.getElementById("inputemail").value = listaPaquetes[i].correo;
            document.getElementById("inputtel").value = listaPaquetes[i].telefono;
            document.getElementById("inputDestino").value = listaPaquetes[i].destino;
            document.getElementById("inputPaquete").value = listaPaquetes[i].paquete;
            document.getElementById("inputTiempo").value = listaPaquetes[i].tiempo;

            localStorage.setItem("editando", id);
        }
    }
}

function editando() {
    let idedit = localStorage.getItem("editando");

    let listaPaquetes = JSON.parse(localStorage.getItem("listaPaquetes"));
    for (let i = 0; i < listaPaquetes.length; i++) {
        if (i == idedit) {
            const nombre = document.getElementById("inputnombre").value;
            const apellido = document.getElementById("inputapellido").value;
            const correo = document.getElementById("inputemail").value;
            const telefono = document.getElementById("inputtel").value;
            const destino = document.getElementById("inputDestino").value;
            const paquete = document.getElementById("inputPaquete").value;
            const tiempo = document.getElementById("inputTiempo").value;
            let precio = 0;
            switch (destino) {
                case 'Madrid':
                    if (paquete == 'Hotel') {
                        if (tiempo == '3 dias 2 noches') {
                            precio = 2500;
                        } else if (tiempo == '1 semana') {
                            precio = 5000;
                        } else if (tiempo == '2 semanas') {
                            precio = 8000;
                        } else {
                            //alert('favor escoja una opcion')
                        }


                    }
                    else if (paquete == 'Vuelo') {
                        if (tiempo == '3 dias 2 noches') {
                            precio = 500;
                        } else if (tiempo == '1 semana') {
                            precio = 1000;
                        } else if (tiempo == '2 semanas') {
                            precio = 1500;
                        } else {
                            //alert('favor escoja una opcion')
                        }
                    }
                    else if (paquete == 'Paquete Completo') {
                        if (tiempo == '3 dias 2 noches') {
                            precio = 3000;
                        } else if (tiempo == '1 semana') {
                            precio = 6000;
                        } else if (tiempo == '2 semanas') {
                            precio = 9000;
                        } else {
                            //alert('favor escoja una opcion')
                        }
                    }
                    else {
                        //alert('favor escoja una opcion')
                    }


                    break;
                case 'Cartagena':
                    if (paquete == 'Hotel') {
                        if (tiempo == '3 dias 2 noches') {
                            precio = 1400;
                        } else if (tiempo == '1 semana') {
                            precio = 2600;
                        } else if (tiempo == '2 semanas') {
                            precio = 4000;
                        } else {
                            //alert('favor escoja una opcion')
                        }


                    }
                    else if (paquete == 'Vuelo') {
                        if (tiempo == '3 dias 2 noches') {
                            precio = 100;
                        } else if (tiempo == '1 semana') {
                            precio = 100;
                        } else if (tiempo == '2 semanas') {
                            precio = 100;
                        } else {
                            //alert('favor escoja una opcion')
                        }
                    }
                    else if (paquete == 'Paquete Completo') {
                        if (tiempo == '3 dias 2 noches') {
                            precio = 1500;
                        } else if (tiempo == '1 semana') {
                            precio = 2700;
                        } else if (tiempo == '2 semanas') {
                            precio = 4100;
                        } else {
                            //alert('favor escoja una opcion')
                        }
                    }
                    else {
                        //alert('favor escoja una opcion')
                    }
                    break;

                case 'Venecia':
                    if (paquete == 'Hotel') {
                        if (tiempo == '3 dias 2 noches') {
                            precio = 4500;
                        } else if (tiempo == '1 semana') {
                            precio = 10000;
                        } else if (tiempo == '2 semanas') {
                            precio = 15000;
                        } else {
                            //alert('favor escoja una opcion')
                        }


                    }
                    else if (paquete == 'Vuelo') {
                        if (tiempo == '3 dias 2 noches') {
                            precio = 500;
                        } else if (tiempo == '1 semana') {
                            precio = 500;
                        } else if (tiempo == '2 semanas') {
                            precio = 1000;
                        } else {
                            //alert('favor escoja una opcion')
                        }
                    }
                    else if (paquete == 'Paquete Completo') {
                        if (tiempo == '3 dias 2 noches') {
                            precio = 5000;
                        } else if (tiempo == '1 semana') {
                            precio = 10500;
                        } else if (tiempo == '2 semanas') {
                            precio = 16000;
                        } else {
                            //alert('favor escoja una opcion')
                        }
                    }
                    else {
                        //alert('favor escoja una opcion')
                    }
                    break;

                case 'New York':
                    if (paquete == 'Hotel') {
                        if (tiempo == '3 dias 2 noches') {
                            precio = 3000;
                        } else if (tiempo == '1 semana') {
                            precio = 6000;
                        } else if (tiempo == '2 semanas') {
                            precio = 9000;
                        } else {
                            //alert('favor escoja una opcion')
                        }


                    }
                    else if (paquete == 'Vuelo') {
                        if (tiempo == '3 dias 2 noches') {
                            precio = 500;
                        } else if (tiempo == '1 semana') {
                            precio = 500;
                        } else if (tiempo == '2 semanas') {
                            precio = 1000;
                        } else {
                            //alert('favor escoja una opcion')
                        }
                    }
                    else if (paquete == 'Paquete Completo') {
                        if (tiempo == '3 dias 2 noches') {
                            precio = 3500;
                        } else if (tiempo == '1 semana') {
                            precio = 6500;
                        } else if (tiempo == '2 semanas') {
                            precio = 10000;
                        } else {
                            //alert('favor escoja una opcion')
                        }
                    }
                    else {
                        //alert('favor escoja una opcion')
                    }
                    break;

                case 'Curazao':
                    if (paquete == 'Hotel') {
                        if (tiempo == '3 dias 2 noches') {
                            precio = 5000;
                        } else if (tiempo == '1 semana') {
                            precio = 10000;
                        } else if (tiempo == '2 semanas') {
                            precio = 15000;
                        } else {
                            //alert('favor escoja una opcion')
                        }


                    }
                    else if (paquete == 'Vuelo') {
                        if (tiempo == '3 dias 2 noches') {
                            precio = 500;
                        } else if (tiempo == '1 semana') {
                            precio = 1000;
                        } else if (tiempo == '2 semanas') {
                            precio = 1000;
                        } else {
                            //alert('favor escoja una opcion')
                        }
                    }
                    else if (paquete == 'Paquete Completo') {
                        if (tiempo == '3 dias 2 noches') {
                            precio = 5500;
                        } else if (tiempo == '1 semana') {
                            precio = 11000;
                        } else if (tiempo == '2 semanas') {
                            precio = 16000;
                        } else {
                            //alert('favor escoja una opcion')
                        }
                    }
                    else {
                        //alert('favor escoja una opcion')
                    }
                    break;

                case 'Medellin':
                    if (paquete == 'Hotel') {
                        if (tiempo == '3 dias 2 noches') {
                            precio = 800;
                        } else if (tiempo == '1 semana') {
                            precio = 1600;
                        } else if (tiempo == '2 semanas') {
                            precio = 2200;
                        } else {
                            //alert('favor escoja una opcion')
                        }


                    }
                    else if (paquete == 'Vuelo') {
                        if (tiempo == '3 dias 2 noches') {
                            precio = 200;
                        } else if (tiempo == '1 semana') {
                            precio = 200;
                        } else if (tiempo == '2 semanas') {
                            precio = 200;
                        } else {
                            //alert('favor escoja una opcion')
                        }
                    }
                    else if (paquete == 'Paquete Completo') {
                        if (tiempo == '3 dias 2 noches') {
                            precio = 1000;
                        } else if (tiempo == '1 semana') {
                            precio = 1800;
                        } else if (tiempo == '2 semanas') {
                            precio = 2400;
                        } else {
                            //alert('favor escoja una opcion')
                        }
                    }
                    else {
                        //alert('favor escoja una opcion')
                    }
                    break;

                case 'La Romana':
                    if (paquete == 'Hotel') {
                        if (tiempo == '3 dias 2 noches') {
                            precio = 2000;
                        } else if (tiempo == '1 semana') {
                            precio = 4000;
                        } else if (tiempo == '2 semanas') {
                            precio = 6000;
                        } else {
                            //alert('favor escoja una opcion')
                        }


                    }
                    else if (paquete == 'Vuelo') {
                        if (tiempo == '3 dias 2 noches') {
                            precio = 500;
                        } else if (tiempo == '1 semana') {
                            precio = 500;
                        } else if (tiempo == '2 semanas') {
                            precio = 500;
                        } else {
                            //alert('favor escoja una opcion')
                        }
                    }
                    else if (paquete == 'Paquete Completo') {
                        if (tiempo == '3 dias 2 noches') {
                            precio = 2500;
                        } else if (tiempo == '1 semana') {
                            precio = 4500;
                        } else if (tiempo == '2 semanas') {
                            precio = 6500;
                        } else {
                            //alert('favor escoja una opcion')
                        }
                    }
                    else {
                        //alert('favor escoja una opcion')
                    }
                    break;

                case 'Eje Cafetero':
                    if (paquete == 'Hotel') {
                        if (tiempo == '3 dias 2 noches') {
                            precio = 1800;
                        } else if (tiempo == '1 semana') {
                            precio = 3600;
                        } else if (tiempo == '2 semanas') {
                            precio = 6000;
                        } else {
                            //alert('favor escoja una opcion')
                        }


                    }
                    else if (paquete == 'Vuelo') {
                        if (tiempo == '3 dias 2 noches') {
                            precio = 200;
                        } else if (tiempo == '1 semana') {
                            precio = 400;
                        } else if (tiempo == '2 semanas') {
                            precio = 500;
                        } else {
                            //alert('favor escoja una opcion')
                        }
                    }
                    else if (paquete == 'Paquete Completo') {
                        if (tiempo == '3 dias 2 noches') {
                            precio = 2000;
                        } else if (tiempo == '1 semana') {
                            precio = 4000;
                        } else if (tiempo == '2 semanas') {
                            precio = 6500;
                        } else {
                            //alert('favor escoja una opcion')
                        }
                    }
                    else {
                        //alert('favor escoja una opcion')
                    }
                    break;

                case 'Cuernavaca':
                    if (paquete == 'Hotel') {
                        if (tiempo == '3 dias 2 noches') {
                            precio = 3500;
                        } else if (tiempo == '1 semana') {
                            precio = 7000;
                        } else if (tiempo == '2 semanas') {
                            precio = 10000;
                        } else {
                            //alert('favor escoja una opcion')
                        }


                    }
                    else if (paquete == 'Vuelo') {
                        if (tiempo == '3 dias 2 noches') {
                            precio = 5000;
                        } else if (tiempo == '1 semana') {
                            precio = 500;
                        } else if (tiempo == '2 semanas') {
                            precio = 1000;
                        } else {
                            //alert('favor escoja una opcion')
                        }
                    }
                    else if (paquete == 'Paquete Completo') {
                        if (tiempo == '3 dias 2 noches') {
                            precio = 4000;
                        } else if (tiempo == '1 semana') {
                            precio = 7500;
                        } else if (tiempo == '2 semanas') {
                            precio = 11000;
                        } else {
                            //alert('favor escoja una opcion')
                        }
                    }
                    else {
                        //alert('favor escoja una opcion')
                    }
                    break;

                default:

                    break;
            }

            listaPaquetes[i].nombre = nombre;
            listaPaquetes[i].apellido = apellido;
            listaPaquetes[i].correo = correo;
            listaPaquetes[i].telefono = telefono;
            listaPaquetes[i].destino = destino;
            listaPaquetes[i].paquete = paquete;
            listaPaquetes[i].tiempo = tiempo;
            listaPaquetes[i].precio = precio;
        }
    }
    localStorage.setItem("listaPaquetes", JSON.stringify(listaPaquetes));
    botoneditar.disabled = true;
    botonenviar.disabled = false;
    loadFromLocalStorage();
    location.reload();
}


function loadFromLocalStorage() {
    let listaPaquetes = [],
        dataInLocalStorage = localStorage.getItem("listaPaquetes"),
        taskthead = document.querySelector('#tasks thead'),
        taskbody = document.querySelector("#tasks tbody");


    if (dataInLocalStorage == null) {
        taskthead.innerHTML = "";
        console.log('hola')
    } else {
        listaPaquetes = JSON.parse(dataInLocalStorage);
        // Draw TR from TBODY
        taskbody.innerHTML = "";

        listaPaquetes.forEach(function (x, i) {
            let tr = document.createElement("tr"),
                tdId = document.createElement("td"),
                tdName = document.createElement("td"),
                tdApellido = document.createElement("td"),
                tdEmail = document.createElement("td"),
                tdTel = document.createElement("td"),
                tdDes = document.createElement("td"),
                tdDPaq = document.createElement("td"),
                tdTie = document.createElement("td"),
                tdPrec = document.createElement("td"),
                buttons = document.createElement("td"),
                btnRemove = document.createElement("button"),
                btneditar = document.createElement("button");

            tdId.innerHTML = i + 1;
            tdName.innerHTML = x.nombre;
            tdApellido.innerHTML = x.apellido;
            tdEmail.innerHTML = x.correo;
            tdTel.innerHTML = x.telefono;
            tdDes.innerHTML = x.destino;
            tdDPaq.innerHTML = x.paquete;
            tdTie.innerHTML = x.tiempo;
            tdPrec.innerHTML = x.precio;

            btnRemove.innerHTML = `<i class='bx bxs-trash-alt'></i>`;
            btnRemove.id = "botoneliminar";
            btnRemove.role = "button";

            btnRemove.className = "btn btn-outline-danger";

            btnRemove.addEventListener("click", function () {
                eliminar(i);
            });

            btneditar.innerHTML = `<i class='bx bxs-edit'></i>`;
            btneditar.id = "botoneditar";
            btneditar.role = "button";

            btneditar.className = "btn btn-outline-info";

            btneditar.addEventListener("click", function () {
                editar(i);
            });

            buttons.appendChild(btneditar);
            buttons.appendChild(btnRemove);


            tr.appendChild(tdId);
            tr.appendChild(tdName);
            tr.appendChild(tdApellido);
            tr.appendChild(tdEmail);
            tr.appendChild(tdTel);
            tr.appendChild(tdDes);
            tr.appendChild(tdDPaq);
            tr.appendChild(tdTie);
            tr.appendChild(tdPrec);
            tr.appendChild(buttons);

            taskbody.appendChild(tr);

        });
    }
}

fetch("https://apimantenimientoweb.herokuapp.com/hoteles/api")
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {

        let internacionales = document.querySelector('#internacionales thead'),
            internacionalesbody = document.querySelector("#internacionales tbody");

        internacionalesbody.innerHTML = "";

        let nacionales = document.querySelector('#nacionales thead'),
            nacionalesbody = document.querySelector("#nacionales tbody");

        nacionalesbody.innerHTML = "";
        let i = 0, j = 0;
        data.forEach(function (validar) {

            if (validar.destino == "Internacional") {
                i++;

                let itr = document.createElement("tr"),
                    tdId = document.createElement("td"),
                    tdnombre = document.createElement("td"),
                    tdciudad = document.createElement("td"),
                    td3dias = document.createElement("td"),
                    td1sema = document.createElement("td"),
                    td2sema = document.createElement("td");


                tdId.innerHTML = i;
                tdciudad.innerHTML = validar.ciudad;
                tdnombre.innerHTML = validar.nombre;
                
                td3dias.innerHTML = `${validar.Paquete_3dias} Dolares`;
                td1sema.innerHTML = `${validar.Paquete_1semana} Dolares`;
                td2sema.innerHTML = `${validar.Paquete_2semana} Dolares`;

                itr.appendChild(tdId)
                itr.appendChild(tdciudad)
                itr.appendChild(tdnombre)
                itr.appendChild(td3dias)
                itr.appendChild(td1sema)
                itr.appendChild(td2sema)

                internacionalesbody.appendChild(itr)
            } 

            if (validar.destino == "Nacional") {
                j++;

                let itr = document.createElement("tr"),
                    tdId = document.createElement("td"),
                    tdnombre = document.createElement("td"),
                    tdciudad = document.createElement("td"),
                    td3dias = document.createElement("td"),
                    td1sema = document.createElement("td"),
                    td2sema = document.createElement("td");


                tdId.innerHTML = j;
                tdciudad.innerHTML = validar.ciudad;
                tdnombre.innerHTML = validar.nombre;
                
                td3dias.innerHTML = `${validar.Paquete_3dias} Dolares`;
                td1sema.innerHTML = `${validar.Paquete_1semana} Dolares`;
                td2sema.innerHTML = `${validar.Paquete_2semana} Dolares`;

                itr.appendChild(tdId)
                itr.appendChild(tdciudad)
                itr.appendChild(tdnombre)
                itr.appendChild(td3dias)
                itr.appendChild(td1sema)
                itr.appendChild(td2sema)

                nacionalesbody.appendChild(itr)
            }

            console.log(validar.nombre)
        });

    })
    .catch(function (error) {
        alert(error);
    });