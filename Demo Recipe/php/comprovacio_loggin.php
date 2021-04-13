<?php
session_start();
include "Alumne.php";

$usuariPost = $_POST['usuari'];
$clauPost = $_POST['clau'];

//En cas de que no hi hagi cap alumne registrat.
if(!isset($_SESSION['alumnes'])){
    header("Location:../html/loggin.php");
}
$existeix = false;
$missatge = "L'usuari \"$usuariPost\" no es troba registrat al sistema.";
//Cerca a l'array d'alumnes si hi ha un USUARI i CLAU coincidents.
for ($i = 0; $i < count($_SESSION['alumnes']); $i++) {
    $alumne = unserialize($_SESSION['alumnes'][$i]);
    $usuariSession = $alumne -> getUsuari();
    $clauSession = $alumne -> getClau();
    if($usuariSession == $usuariPost) {
        if($clauSession == $clauPost) {
            $_SESSION['numAlumne'] = $i;
            $existeix = true;
        } else {
            $missatge = "Clau incorrecta.";
        }
    }
}

if($existeix) {
    header("Location:./posar_notes.php");
} else {
    header("Location:loggin.php?m=$missatge");
}

