let  form = document.getElementById("login");

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
                            location.href = "./views/index.html"
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
