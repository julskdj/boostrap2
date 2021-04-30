fetch("https://apimantenimientoweb.herokuapp.com/destinos/api")
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {

        let destinos = document.querySelector('#destinos thead'),
            destinosbody = document.querySelector("#destinos tbody");

        destinosbody.innerHTML = "";

        

        
        let i = 0
        data.forEach(function (validar) {
                console.log(validar.Precio)
                i++

                let itr = document.createElement("tr"),
                    tdId = document.createElement("td"),
                    tdciudad = document.createElement("td"),
                    tdprecio = document.createElement("td");
                    


                tdId.innerHTML = i;
                tdciudad.innerHTML = validar.ciudad;
                tdprecio.innerHTML = `${validar.Precio} Dolares`;
                
                
                itr.appendChild(tdId)
                itr.appendChild(tdciudad)
                itr.appendChild(tdprecio)
                

                destinosbody.appendChild(itr)
            

           

               
            

            
        });

    })
    .catch(function (error) {
        alert(error);
    });