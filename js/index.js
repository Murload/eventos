let mascotas = [];
function agregarelemento(){

    let formulario = document.forms['formulario']
    let mascota = [];

    let nombremas = document.getElementById('namepet') 
    mascota.push(nombremas.value.toUpperCase())
    mascotas.push(mascota)
    let parrafomascotasAnterior = document.querySelector('#parrafomascotas');
    if (parrafomascotasAnterior) {
        parrafomascotasAnterior.remove();
    }
    

    let parrafomascotas = document.createElement('p')
    parrafomascotas.id = 'parrafomascotas';
    let text = document.createTextNode(mascotas)
    parrafomascotas.append(mascotas)
    document.body.append(parrafomascotas)
    
    
    console.log(formulario)
    let name = formulario['namecli']
    let apellido = formulario['lastcli']
    let nombremas1 = formulario['namepet']
    let select = formulario['selectcon']
    let vetvet = formulario['vetvet']
    
    name.value = ""
    apellido.value = ""
    nombremas1.value = ""
    select.value = ""
    vetvet.value = ""

    document.getElementById("parrafomascotas").addEventListener("mouseover", cambiar);

    document.getElementById("parrafomascotas").addEventListener('mouseout', regresar);


}

function cambiar(evento){
    let componente = evento.target;

    componente.style.color = 'rgb(139, 195, 110)';


}
function regresar(evento){
    let componente = evento.target;

    componente.style.color = 'black';

}

function mensaje(){
    window.alert("Hola usuario... Bienvenido a consultas Yesie")
}


