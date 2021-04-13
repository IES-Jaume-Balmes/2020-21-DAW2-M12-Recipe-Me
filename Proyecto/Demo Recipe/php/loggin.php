<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="../css/style0.css">
</head>

<body>
    <div class="container" id="loggin">
        <h1>Loggin</h1>
        <form action="../html/feed.html" method="POST">
            <input name="usuari" type="text" placeholder="usuari" required>
            <input name="clau" type="password" placeholder="clau" required>
            <?php
            if (isset($_GET['m'])) {
                echo '<p>' . $_GET['m'] . '</p>';
                unset($_GET['m']);
            }
            ?>
            <input type="submit" value="Entrar" id="submit">
        </form>
        <a href="registre.php">☜ Registre</a>
    </div>

</body>

</html>