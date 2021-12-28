<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    $Codigo=mysqli_real_escape_string($conexionBD,trim($request->tipo->value));
    if($Codigo=="LICORENU"){
        $Nombre_Empresa= mysqli_real_escape_string($conexionBD,trim($request->empresa));
        $RIF=mysqli_real_escape_string($conexionBD,trim($request->RIF));
        $Urbanizacion=mysqli_real_escape_string($conexionBD,trim($request->direccion->urb));
        $Calle=mysqli_real_escape_string($conexionBD,trim($request->direccion->calle));
        $CasaLocalEdificio=mysqli_real_escape_string($conexionBD,trim($request->direccion->caloed));
        $Dia=mysqli_real_escape_string($conexionBD,trim($request->fecha->dia));
        $Mes=mysqli_real_escape_string($conexionBD,trim($request->fecha->mes));
        $Ano=mysqli_real_escape_string($conexionBD,trim($request->fecha->ano));
    }
    else{
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
    }
    

    switch($Codigo){
        case "LICAENUE":
            include("LICAENUE.php");
        break;
        case "LICAANUE":
            include("LICAANUE.php");
            break;
        case "CAMBDIRE":
            include("CAMBDIRE.php");
            break;
        case "CAMBDENO":
            include("CAMBDENO.php");
            break;
        case "RENLICAA":
            include("RENLICAA.php");
            break;
        case "RENLICAE":
            include("RENLICAE.php");
            break;
        case "EXTACTEC":
            include("EXTACTEC.php");
            break;
        case "LICTRANS":
            include("LICTRANS.php");
            break;
        case "COMDOMFI":
            include("COMDOMFI.php");
            break;
        case "RETACECO":
            include("RETACECO.php");
            break;
        case "LICORENU":
            include("LICORENU.php");
            break;
        case "RENLICLI":
            include("RENLICLI.php");
            break;
        case "PERFUNLOT":
            include("PERFUNLOT.php");
            break;
    }
}
?>