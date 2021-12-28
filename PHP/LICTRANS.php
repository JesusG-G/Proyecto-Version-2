<?php

    $CheckBox_1=mysqli_real_escape_string($conexionBD,trim($request->CheckBox_1));
    $CheckBox_2=mysqli_real_escape_string($conexionBD,trim($request->CheckBox_2));
    $CheckBox_3=mysqli_real_escape_string($conexionBD,trim($request->CheckBox_3));
    $CheckBox_4=mysqli_real_escape_string($conexionBD,trim($request->CheckBox_4));
    $CheckBox_5=mysqli_real_escape_string($conexionBD,trim($request->CheckBox_5));
    $CheckBox_6=mysqli_real_escape_string($conexionBD,trim($request->CheckBox_6));
    $CheckBox_7=mysqli_real_escape_string($conexionBD,trim($request->CheckBox_7));
    $CheckBox_8=mysqli_real_escape_string($conexionBD,trim($request->CheckBox_8));
    
    
    


    //Licaenue
    $sql="SELECT * FROM `lictrans`";
    $resultado=mysqli_query($conexionBD,$sql);
    $tamano=mysqli_num_rows($resultado);
    if($tamano<=0){
        $CodigoActa="{$Codigo}0001{$Mes}{$Ano}";
    }
    else{
        $tamano=$tamano+1;
        $CodigoActa="{$Codigo}000{$tamano}{$Mes}{$Ano}";
    }
    $sql = "INSERT INTO lictrans(
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
            `CheckBox_8`
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
            '$CheckBox_5',
            '$CheckBox_6',
            '$CheckBox_7',
            '$CheckBox_8'
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
            "CheckBox_5"=>$CheckBox_5,
            "CheckBox_6"=>$CheckBox_6,
            "CheckBox_7"=>$CheckBox_7,
            "CheckBox_8"=>$CheckBox_8
            
        ];
    echo json_encode($authdata);
    }
    