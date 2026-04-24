 function enviarFormulario(){
            let email = document.getElementById("exampleInputEmail1").value;
            let assunto = document.getElementById("exempleAssunto").value;
            let descricao = document.getElementById("exampleDescricao").value;
            let check = document.getElementById("exampleCheck1").checked;
            console.log(email);
            console.log(assunto);
            console.log(descricao);
            console.log(check);

            console.log(eval(email+"+"+assunto));
            console.log(parseInt(email)+parseInt(assunto));
        }

        function mensagem(){
            //alert("Evily Silva");
            console.log("Vamos acompanhar no console");
            //document.getElementById("body").innerHTML = "";
        }

        function alerta(){
            alert("Evily Silva");
        }

        function mudaCor(){
            let elemento = document.getElementById("mudaCor");
            if(elemento.style.backgroundColor == "blue"){
                elemento.style.backgroundColor = "green";
            }else{
                elemento.style.backgroundColor = "blue";
            }
        }
