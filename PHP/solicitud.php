<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    $Codigo=mysqli_real_escape_string($conexionBD,trim($request->tipo->value));
    $Nombres =  mysqli_real_escape_string($conexionBD,trim($request->solicitante->Nombres));
    $Apellidos=  mysqli_real_escape_string($conexionBD,trim($request->solicitante->Apellidos));
    $CI=  mysqli_real_escape_string($conexionBD,trim($request->solicitante->CI));
    $Nombre_Empresa= mysqli_real_escape_string($conexionBD,trim($request->empresa));
    $RIF=mysqli_real_escape_string($conexionBD,trim($request->RIF));
    $Telefono=mysqli_real_escape_string($conexionBD,trim($request->telf));
    $Urbanizacion=mysqli_real_escape_string($conexionBD,trim($request->direccion->urb));
    $Calle=mysqli_real_escape_string($conexionBD,trim($request->direccion->calle));
    $CasaLocalEdificio=mysqli_real_escape_string($conexionBD,trim($request->direccion->caloed));
    $Dia=mysqli_real_escape_string($conexionBD,trim($request->fecha->dia));
    $Mes=mysqli_real_escape_string($conexionBD,trim($request->fecha->mes));
    $Ano=mysqli_real_escape_string($conexionBD,trim($request->fecha->ano));
    $Fecha="{$Dia}/{$Mes}/{$Ano}";
    
    $sql = "INSERT INTO `solicitud`(`Codigo`, `Nombres`, `Apellidos`, 
                        `CI`, `Nombre_Empresa`, `RIF`, `Telefono`,
                         `Urbanizacion`, `Calle`, `CasaLocalEdificio`, `Fecha`) 
            VALUES ('$Codigo',
            '$Nombres',
            '$Apellidos',
            '$CI',
            '$Nombre_Empresa',
            '$RIF',
            '$Telefono',
            '$Urbanizacion',
            '$Calle',
            '$CasaLocalEdificio',
            '$Fecha')";
    if ($conexionBD->query($sql) === TRUE) {
        $authdata = [
            "Codigo"=> $Codigo,
            "Nombres" => $Nombres,
            "Apellidos"=>$Apellidos,
            "CI"=>$CI,
            "Nombre_Empresa"=>$Nombre_Empresa,
            "RIF"=>$RIF,
            "Telefono"=>$Telefono,
            "Urbanizacion"=>$Urbanizacion,
            "Calle"=>$Calle,
            "CasaLocalEdificio"=>$CasaLocalEdificio,
            "Fecha"=>$Fecha
            
            
        ];
    echo json_encode($authdata);
    }

}

/*INSERT INTO `solicitud`(`Codigo`, `Nombres`, `Apellidos`, `CI`, `Nombre_Empresa`, `RIF`, `Telefono`, `Urbanizacion`, `Calle`, `CasaLocalEdificio`, `Fecha`) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]','[value-5]','[value-6]','[value-7]','[value-8]','[value-9]','[value-10]','[value-11]') */
/*Codigo
Nombres
Apellidos
CI
Nombre_Empresa
RIF
Telefono
Urbanizacion
Calle
CasaLocalEdificio
Fecha*/
?>

