fetch("https://apimantenimientoweb.herokuapp.com/hoteles/api")
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        data.forEach(function (validar) {
            
        });
        
    })

    fetch("./json/usuarios.json")
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        
    })

let  form = document.getElementById("login");


document.getElementById("boton").addEventListener("click", function() {
    localStorage.setItem('user',JSON.stringify('invitado'))
    localStorage.setItem('rol', JSON.stringify('invitado'))
    location.href = "./views/inicio.html"
});

form.addEventListener("submit", function (event) {

    console.log('hola')
    let Username = document.getElementById("floatingInput").value;
    let password = document.getElementById("floatingPassword").value;
    

    
    let bandera = null;
   
        fetch("./json/usuarios.json")
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                data.forEach(function (validar) {
                    if (validar.usuario == Username) {
                        if (validar.contraseña == password) {
                            bandera = true;
                            localStorage.setItem('user',JSON.stringify(Username))
                            localStorage.setItem('rol', JSON.stringify(validar.rol))
                            location.href = "./views/inicio.html"
                        } else {
                            alert("contraseña incorrecta");
                            bandera = true;
                        }
                    }
                });
                if (bandera == null) {
                    alert("Usuario incorrecto");
                }
            })
            .catch(function (error) {
                alert(error);
            });
})