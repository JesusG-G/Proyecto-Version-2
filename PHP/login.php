<?php
include_once("database.php");
$postdata = file_get_contents("php://input");

    if(isset($postdata) && !empty($postdata)){
        $request = json_decode($postdata);
        $CI = mysqli_real_escape_string($conexionBD, trim($request->CI));
        $contrasena = mysqli_real_escape_string($conexionBD, trim($request->contrasena));
        $sql = "SELECT * FROM registro where CI='$CI' and contrasena='$contrasena'";
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
    }
?>