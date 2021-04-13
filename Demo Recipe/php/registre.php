<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="../css/style0.css">
</head>
<body>
<?php
if(isset($_POST['submitButton'])) {
    session_start();
    include "Alumne.php";
    $usuari = $_POST['usuari'];
    $clau = $_POST['clau'];
    $nouAlumne = new Alumne($usuari,$clau);

    if(!isset($_SESSION['alumnes'])){
        $serializat = serialize($nouAlumne);
        $_SESSION['alumnes'] = array($serializat);

    } else {
        //Volem afegir un objecte serialitzat a session
        $serializat = serialize($nouAlumne);
        array_push($_SESSION['alumnes'],$serializat);
    }
    header("Location:dades_personals.php");
} else {
    echo '
    <div class="container">
        <h1>Registre</h1>
        <form action="registre.php" method="POST">
            <input name="usuari" type="text" placeholder="usuari" required>
            <input name="clau" type="password" placeholder="clau" required>
            <input name="submitButton" type="submit" value="Registrar" id="submit">
        </form>
        <a href="loggin.php">Loggin ☞</a>
    </div>
    ';
}
?>

</body>
</html>
