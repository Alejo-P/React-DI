function enviarDatos() {
  
    var nombre = document.getElementById('nombre').value;
    windows.alert(nombre);
    var email = document.getElementById('email').value;

    // Enviar datos a Firebase Realtime Database
    var referencia = database.ref('usuarios');
    referencia.push({
        nombre: nombre,
        email: email
    })
    .then(function() {
        console.log('Datos guardados con éxito en Firebase.');
    })
    .catch(function(error) {
        console.error('Error al guardar datos en Firebase:', error);
    });
}
