<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Email Filterization</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>

    <div style="text-align: center; margin-top: 50px;">
        <form action="" method="post">
            <label for="email" style="font-size: 18px; font-weight: bold;">Enter your email:</label>
            <br>
            <input type="text" name="email" id="email" 
                   style="padding: 10px; width: 250px; font-size: 16px; border: 2px solid #007BFF; border-radius: 5px; margin: 10px;">
            <br>
            <button type="submit" 
                    style="padding: 10px 20px; font-size: 16px; background-color: #007BFF; color: white; border: none; border-radius: 5px; cursor: pointer;">
                Submit
            </button>
        </form>

        <?php
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                if (isset($_POST['email'])) {
                    $name = $_POST['email'];
                    $sanitized_email = filter_var($name, FILTER_SANITIZE_EMAIL);
                    echo "<script>alert('Sanitized Email: $sanitized_email')</script>";
                }
            }
        ?>
    </div>

    </body>
</html>
