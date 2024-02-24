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
            text-align: center;
        }
        .card {
            width: 30%;
            background-color: #f4f4f4;
            border-radius: 10px;
            padding: 20px;
            margin: 20px auto;
            display: inline-block;
            vertical-align: top;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
        }
        .card:hover {
            transform: translateY(-5px);
        }
        footer {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 20px;
            width: 100%;
        }
    </style>
</head>
<body>
    <?php include 'header.php'?>
    <section id="inicio">
        <h1>BIENVENIDOS</h1>
        <!-- Contenido de la sección de inicio -->
        <p>Bienvenido a mi página web.</p>
    </section>
    <section id="contenido">
        <h2>Contenido</h2>
        <!-- Contenido de la sección de contenido -->
        <div class="card">
            <h3>Tarjeta 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget purus quis tortor.</p>
        </div>
        <div class="card">
            <h3>Tarjeta 2</h3>
            <p>Ut fermentum mi nec mauris tincidunt, nec congue nunc molestie.</p>
        </div>
        <div class="card">
            <h3>Tarjeta 3</h3>
            <p>Integer at magna id urna scelerisque ultrices. Aliquam ut ex non tortor.</p>
        </div>
        <div class="card">
            <h3>Tarjeta 4</h3>
            <p>Vestibulum lacinia, neque at elementum interdum, justo eros vehicula lectus, et suscipit nisl arcu eu leo.</p>
        </div>
        <div class="card">
            <h3>Tarjeta 5</h3>
            <p>Fusce euismod, sapien eget tempus volutpat, libero justo consectetur nunc, sit amet tristique libero risus sit amet eros.</p>
        </div>
        <div class="card">
            <h3>Tarjeta 6</h3>
            <p>Vivamus vestibulum, ipsum a congue bibendum, metus metus aliquet metus, nec commodo metus est nec ipsum.</p>
        </div>
    </section>
    <section id="contacto">
        <h2>Contacto</h2>
        <!-- Contenido de la sección de contacto -->
        <p>Puedes contactarme a través de...</p>
    </section>
    <footer>
        <p>Dirección: Calle Principal, Ciudad, País</p>
        <p>Teléfono: +123456789</p>
        <p>&copy; 2024 Mi Empresa - Todos los derechos reservados</p>
    </footer>
</body>
</html>
