fetch("https://apimantenimientoweb.herokuapp.com/hoteles/api")
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        data.forEach(function (validar) {
            
        });
        
})

let usuario = document.getElementById('usuario')
let user

if(localStorage.getItem('user') != null){
    user = JSON.parse(localStorage.getItem('user'))
    console.log(user)

    usuario.innerHTML = `<span>Usuario: ${user}</span> <label for=""></label> <label for=""></label> <button type="button" class="btn btn-secondary" onclick="cerrarSesion()">Cerrar Sesion</button>`
}else{
    alert('Favor Inicie Sesion')
    location.href = "../index.html"
}

function cerrarSesion(){
    localStorage.removeItem('user')
    localStorage.removeItem('rol')
    location.href = "../index.html"
}

