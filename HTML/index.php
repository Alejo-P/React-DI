<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Página Web</title>
    <style>
        /* Estilos CSS */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        header {
            background-color: #333;
            color: #fff;
            padding: 10px;
            text-align: center;
        }
        nav {
            background-color: #444;
            padding: 10px;
        }
        nav ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
            text-align: center;
        }
        nav ul li {
            display: inline;
            margin-right: 20px;
        }
        nav ul li a {
            color: #fff;
            text-decoration: none;
        }
        section {
            padding: 20px;
        }
        footer {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 20px;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
    </style>
</head>
<body>
    <?php include 'header.php'?>
    <section id="inicio">
        <h2>Inicio</h2>
        <!-- Contenido de la sección de inicio -->
        <p>Bienvenido a mi página web.</p>
    </section>
    <section id="contenido">
        <h2>Contenido</h2>
        <!-- Contenido de la sección de contenido -->
        <p>Aquí encontrarás texto, tarjetas, divisiones, tablas, etc.</p>
    </section>
    <section id="contacto">
        <h2>Contacto</h2>
        <!-- Contenido de la sección de contacto -->
        <p>Puedes contactarme a través de...</p>
    </section>
    <!--PHP-->
    <?php
        echo "hola";
        if (isset($_POST['enviar'])) { //Si se ha enviado el formulario
            $nombre = $_POST['nombre'];
            $email = $_POST['correo'];
            echo "Hola {$nombre}, hemos recibido tu correo electrónico {$email}.";
        }
    ?>
    <?php include 'fotter.php'?>
    
</body>
</html>
