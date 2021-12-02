<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");

$method = $_SERVER['REQUEST_METHOD'];

// Conecta a la base de datos  con usuario, contraseña y nombre de la BD
$servidor = "localhost";
 $usuario = "root"; 
 $contrasenia = ""; 
 $nombreBaseDatos = "proyectodegrado";
$conexionBD = new mysqli($servidor, $usuario, $contrasenia, $nombreBaseDatos);

if ($conexionBD->connect_error) {
die('Error : ('. $conexionBD->connect_errno .') '. $conexionBD->connect_error);
}

?>