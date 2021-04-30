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

let botonenviar = document.getElementById("botonenviar");
let botoneditar = document.getElementById("botoneditar");

botoneditar.disabled = true;

function saveTask() {
  const nombre = document.getElementById("inputnombre").value;
  const apellido = document.getElementById("inputapellido").value;
  const correo = document.getElementById("inputemail").value;
  const telefono = document.getElementById("inputtel").value;
  const direccion = document.getElementById("inputAddress").value;
  const direccion2 = document.getElementById("inputAddress2").value;
  const ciudad = document.getElementById("inputCity").value;
  const pais = document.getElementById("inputState").value;
  const postal = document.getElementById("inputZip").value;

  let task = {
    nombre,
    apellido,
    correo,
    telefono,
    direccion,
    direccion2,
    ciudad,
    pais,
    postal,
  };

  if (localStorage.getItem("tasks") === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } else {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  loadFromLocalStorage();
  document.getElementById("contactenos").reset();
  location.reload();
}

function deleteTask(id) {
  console.log(id);
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  for (let i = 0; i < tasks.length; i++) {
    if (i == id) {

      tasks.splice(i, 1);
    }
  }


  localStorage.setItem("tasks", JSON.stringify(tasks));
  if(tasks.length == 0){
    localStorage.removeItem('tasks')
  }
  loadFromLocalStorage();
  location.reload();
}

function editar(id) {
  console.log(id);
  botoneditar.disabled = false;

  botonenviar.disabled = true;
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  for (let i = 0; i < tasks.length; i++) {
    if (i == id) {
      document.getElementById("inputnombre").value = tasks[i].nombre;
      document.getElementById("inputapellido").value = tasks[i].apellido;
      document.getElementById("inputemail").value = tasks[i].correo;
      document.getElementById("inputtel").value = tasks[i].telefono;
      document.getElementById("inputAddress").value = tasks[i].direccion;
      document.getElementById("inputAddress2").value = tasks[i].direccion2;
      document.getElementById("inputCity").value = tasks[i].ciudad;
      document.getElementById("inputState").value = tasks[i].pais;
      document.getElementById("inputZip").value = tasks[i].postal;

      localStorage.setItem("editando", id);
    }
  }
}

function editando() {
  let idedit = localStorage.getItem("editando");

  let tasks = JSON.parse(localStorage.getItem("tasks"));
  for (let i = 0; i < tasks.length; i++) {
    if (i == idedit) {
      let nombre = document.getElementById("inputnombre").value;
      let apellido = document.getElementById("inputapellido").value;
      let correo = document.getElementById("inputemail").value;
      let telefono = document.getElementById("inputtel").value;
      let direccion = document.getElementById("inputAddress").value;
      let direccion2 = document.getElementById("inputAddress2").value;
      let ciudad = document.getElementById("inputCity").value;
      let pais = document.getElementById("inputState").value;
      let postal = document.getElementById("inputZip").value;

      tasks[i].nombre = nombre;
      tasks[i].apellido = apellido;
      tasks[i].correo = correo;
      tasks[i].telefono = telefono;
      tasks[i].direccion = direccion;
      tasks[i].direccion2 = direccion2;
      tasks[i].ciudad = ciudad;
      tasks[i].pais = pais;
      tasks[i].postal = postal;
    }
  }
  localStorage.setItem("tasks", JSON.stringify(tasks));
  document.getElementById("contactenos").reset();
  botoneditar.disabled = true;
  botonenviar.disabled = false;
  loadFromLocalStorage();
  location.reload();
}

function loadFromLocalStorage() {
  var tasks = [],
    dataInLocalStorage = localStorage.getItem("tasks"),
    taskthead = document.querySelector('#tasks thead'),
    taskbody = document.querySelector("#tasks tbody");
    

  if (dataInLocalStorage == null) {
    taskthead.innerHTML = "";
    console.log('hola')
  } else {
    tasks = JSON.parse(dataInLocalStorage);
    // Draw TR from TBODY
    taskbody.innerHTML = "";

    tasks.forEach(function (x, i) {
      var tr = document.createElement("tr"),
        tdId = document.createElement("td"),
        tdName = document.createElement("td"),
        tdApellido = document.createElement("td"),
        tdEmail = document.createElement("td"),
        tdTel = document.createElement("td"),
        tdDir = document.createElement("td"),
        tdDir2 = document.createElement("td"),
        tdCity = document.createElement("td"),
        tdNacion = document.createElement("td"),
        tdPostal = document.createElement("td"),
        buttons = document.createElement("td"),
        btnRemove = document.createElement("button"),
        btneditar = document.createElement("button");

      tdId.innerHTML = i + 1;
      tdName.innerHTML = x.nombre;
      tdApellido.innerHTML = x.apellido;
      tdEmail.innerHTML = x.correo;
      tdTel.innerHTML = x.telefono;
      tdDir.innerHTML = x.direccion;
      tdDir2.innerHTML = x.direccion2;
      tdCity.innerHTML = x.ciudad;
      tdNacion.innerHTML = x.pais;
      tdPostal.innerHTML = x.postal;

      btnRemove.innerHTML = `<i class='bx bxs-trash-alt'></i>`;
      btnRemove.id = "botoneliminar";
      btnRemove.role = "button";

      btnRemove.className = "btn btn-outline-danger";

      btnRemove.addEventListener("click", function () {
        deleteTask(i);
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
      tr.appendChild(tdDir);
      tr.appendChild(tdDir2);
      tr.appendChild(tdCity);
      tr.appendChild(tdNacion);
      tr.appendChild(tdPostal);
      tr.appendChild(buttons);

      taskbody.appendChild(tr);

    });
  }


}

loadFromLocalStorage();
