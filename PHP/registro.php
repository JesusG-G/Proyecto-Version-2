<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    $Nombres =  mysqli_real_escape_string($conexionBD,trim($request->Nombres));
    $Apellidos=  mysqli_real_escape_string($conexionBD,trim($request->Apellidos));
    $CI=  mysqli_real_escape_string($conexionBD,trim($request->CI));
    $contrasena = mysqli_real_escape_string($conexionBD, trim($request->contrasena));
    $cargo='usuario';
    $sql = "INSERT INTO `usuarios`( `Nombres`, `Apellidos`, `CI`, `contrasena`, `cargo`) VALUES ('$Nombres','$Apellidos','$CI','$contrasena','$cargo')";
    if ($conexionBD->query($sql) === TRUE) {
        $authdata = [
            "Nombres" => $Nombres,
            "Apellidos"=>$Apellidos,
            "CI"=>$CI,
            "contrasena"=>$contrasena,
            
        ];
    echo json_encode($authdata);
    }

}

?>

