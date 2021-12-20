<?php

    $CheckBox_1=mysqli_real_escape_string($conexionBD,trim($request->CheckBox_1));
    $CheckBox_2=mysqli_real_escape_string($conexionBD,trim($request->CheckBox_2));
    $CheckBox_3=mysqli_real_escape_string($conexionBD,trim($request->CheckBox_3));
    $CheckBox_4=mysqli_real_escape_string($conexionBD,trim($request->CheckBox_4));
    $numero=mysqli_real_escape_string($conexionBD,trim($request->numero));
    
    
    


    //Licaenue
    $sql="SELECT * FROM `renlicli`";
    $resultado=mysqli_query($conexionBD,$sql);
    $tamano=mysqli_num_rows($resultado);
    if($tamano<=0){
        $CodigoActa="{$Codigo}0001{$Mes}{$Ano}";
    }
    else{
        $tamano=$tamano+1;
        $CodigoActa="{$Codigo}000{$tamano}{$Mes}{$Ano}";
    }
    $sql = "INSERT INTO renlicli(
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
            `numero`
            ) VALUES 
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
            '$numero'
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
            "numero"=>$numero
            
        ];
    echo json_encode($authdata);
    }
    