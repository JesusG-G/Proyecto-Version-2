<?php
include_once("database.php");
$tipo=$_SERVER['REQUEST_METHOD'];
//echo $tipo;
$dato=$_GET['CI'];
//echo $dato;
$sql="SELECT * FROM `solicitud` WHERE CI=$dato";
$resultado=mysqli_query($conexionBD,$sql);
$tamano=mysqli_num_rows($resultado);
$datos=[];
//echo $tamano;
if($tamano>0){
    while($row=mysqli_fetch_assoc($resultado)){
        $datos[]=[
            'solicitante'=>[
                'Nombres'=>$row['Nombres'],
                'Apellidos'=>$row['Apellidos'],
                'CI'=>$row['CI']
            ],
            'tipo'=>[
                'value'=>$row['Codigo']
            ],
            'empresa'=>$row['Nombre_Empresa'],
            'RIF'=>$row['RIF'],
            'telf'=>$row['Telefono'],
            'direccion'=>[
                'urb'=>$row['Urbanizacion'],
                'calle'=>$row['Calle'],
                'caloed'=>$row['CasaLocalEdificio']
            ],
            'fecha'=>$row['Fecha']
        ];
    }
    echo json_encode($datos);
}
  /* if($tipo=='GET'){
        $request = json_decode();    
        $CI = mysqli_real_escape_string($conexionBD, $request->CI);
        $sql = "SELECT * FROM `solicitud` WHERE CI=$CI";
        if($result = mysqli_query($conexionBD,$sql)){
            $rows = array();
            while($row = mysqli_fetch_assoc($result)){
                $rows[] = $row;
            }
            echo json_encode($rows);
        }
        else{
            http_response_code(404);
        }
    }*/
?>

