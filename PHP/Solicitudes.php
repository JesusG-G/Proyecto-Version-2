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
    
 /*   $CheckBox_1=mysqli_real_escape_string($conexionBD,trim($request->CheckBox_1));
    $CheckBox_2=mysqli_real_escape_string($conexionBD,trim($request->CheckBox_2));
    $CheckBox_3=mysqli_real_escape_string($conexionBD,trim($request->CheckBox_3));
    $CheckBox_4=mysqli_real_escape_string($conexionBD,trim($request->CheckBox_4));
    $CheckBox_5=mysqli_real_escape_string($conexionBD,trim($request->CheckBox_5));
    $CheckBox_6=mysqli_real_escape_string($conexionBD,trim($request->CheckBox_6));
    $CheckBox_7=mysqli_real_escape_string($conexionBD,trim($request->CheckBox_7));
    $CheckBox_8=mysqli_real_escape_string($conexionBD,trim($request->CheckBox_8));
    $CheckBox_9=mysqli_real_escape_string($conexionBD,trim($request->CheckBox_9));
    $CheckBox_10=mysqli_real_escape_string($conexionBD,trim($request->CheckBox_10));
    $CheckBox_11=mysqli_real_escape_string($conexionBD,trim($request->CheckBox_11));
    $CheckBox_12=mysqli_real_escape_string($conexionBD,trim($request->CheckBox_12));


    //Licaenue
    $sql="SELECT * FROM `licaenue`";
    $resultado=mysqli_query($conexionBD,$sql);
    $tamano=mysqli_num_rows($resultado);
    if($tamano<=0){
        $CodigoActa="{$Codigo}0001{$Mes}{$Ano}";
    }
    else{
        $tamano=$tamano+1;
        $CodigoActa="{$Codigo}000{$tamano}{$Mes}{$Ano}";
    }
    $sql = "INSERT INTO licaenue(
            `Codigo`, 
            `Nombres`, 
            `Apellidos`, 
            `CI`, 
            `Nombre_empresa`, 
            `RIF`, 
            `Telefono`, 
            `Urbanizacion`, 
            `Calle`, 
            `CasaLocalEdificio`, 
            `Dia`, 
            `Mes`, 
            `Ano`, 
            `CheckBox_1`, 
            `CheckBox_2`, 
            `CheckBox_3`, 
            `CheckBox_4`, 
            `CheckBox_5`, 
            `CheckBox_6`,
            `CheckBox_7`, 
            `CheckBox_8`, 
            `CheckBox_9`, 
            `CheckBox_10`, 
            `CheckBox_11`, 
            `CheckBox_12`) VALUES 
            ('$CodigoActa',
            '$Nombres',
            '$Apellidos',
            '$CI',
            '$Nombre_Empresa',
            '$RIF',
            '$Telefono',
            '$Urbanizacion',
            '$Calle',
            '$CasaLocalEdificio',
            '$Dia',
            '$Mes',
            '$Ano',
            '$CheckBox_1',
            '$CheckBox_2',
            '$CheckBox_3',
            '$CheckBox_4',
            '$CheckBox_5',
            '$CheckBox_6',
            '$CheckBox_7',
            '$CheckBox_8',
            '$CheckBox_9',
            '$CheckBox_10',
            '$CheckBox_11',
            '$CheckBox_12'
            )";
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
            "Dia"=>$Dia,
            "Mes"=>$Mes,
            "Ano"=>$Ano,
            "CheckBox_1"=>$CheckBox_1,
            "CheckBox_2"=>$CheckBox_2,
            "CheckBox_3"=>$CheckBox_3,
            "CheckBox_4"=>$CheckBox_4,
            "CheckBox_5"=>$CheckBox_5,
            "CheckBox_6"=>$CheckBox_6,
            "CheckBox_7"=>$CheckBox_7,
            "CheckBox_8"=>$CheckBox_8,
            "CheckBox_9"=>$CheckBox_9,
            "CheckBox_10"=>$CheckBox_10,
            "CheckBox_11"=>$CheckBox_11,
            "CheckBox_12"=>$CheckBox_12
            
            
        ];
    echo json_encode($authdata);
    }*/
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
    }
}
?>