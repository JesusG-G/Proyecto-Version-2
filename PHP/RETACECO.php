<?php

    $CheckBox_1=mysqli_real_escape_string($conexionBD,trim($request->CheckBox_1));
    $CheckBox_2=mysqli_real_escape_string($conexionBD,trim($request->CheckBox_2));
    $CheckBox_3=mysqli_real_escape_string($conexionBD,trim($request->CheckBox_3));
    $CheckBox_4=mysqli_real_escape_string($conexionBD,trim($request->CheckBox_4));
    $CheckBox_5=mysqli_real_escape_string($conexionBD,trim($request->CheckBox_5));
    
    


    //Licaenue
    $sql="SELECT * FROM `retaceco`";
    $resultado=mysqli_query($conexionBD,$sql);
    $tamano=mysqli_num_rows($resultado);
    if($tamano<=0){
        $CodigoActa="{$Codigo}0001{$Mes}{$Ano}";
    }
    else{
        $tamano=$tamano+1;
        $CodigoActa="{$Codigo}000{$tamano}{$Mes}{$Ano}";
    }
    $sql = "INSERT INTO retaceco(
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
            `CheckBox_5`
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
            '$CheckBox_5'
            )";
    if ($conexionBD->query($sql) === TRUE) {
        $authdata = [
            "Codigo"=> $CodigoActa,
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
            "CheckBox_5"=>$CheckBox_5
            
            
        ];
    echo json_encode($authdata);
    }
    
