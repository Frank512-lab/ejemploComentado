/*función abrirVentana(). La ejecutamos cuando hacemos click en el botón definido en index.html*/

function abrirVentana() {

    /*La variable ultimaNota almacena en el localStorage el texto que se establece en la clave-valor mediante el método setItem. Está en frame1.html*/

    let ultimaNota = localStorage.getItem("ultimaNota") || "No hay notas aún.";
    
    /*La siguiente línea lo que va a hacer es construir la url para abrir la nueva ventana. Para eso la función encodeURIComponent toma el valor de la variable ultimaNota y la codifica. Este valor de la variable lo concatena con el archivo popup.html para crear la URL que nos dirigirá a la ventana emergente*/

    let url = `popup.html?nota=${encodeURIComponent(ultimaNota)}`;

    /*Esta es la línea que nos va a abrir la ventana. Con el método window.open y pasándole el parámetro url (que hemos construido en la línea anterior), junto con _blank (nos abre una ventana nueva) y las medidas que deseamos que tenga la ventana emergente, ya tenemos la ventana con la información del iframe1*/

    window.open(url, "_blank", "width=500,height=500");
}
