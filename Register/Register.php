<?php
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$gender = $_POST['gender'];
$email = $_POST['email'];
$password = $_POST['password'];

$conn = new mysqli("localhost", "root", "root", "sikhay");
if(!$conn)
    die("Connection Failed" .mysqli_connect_error());

else{
    $stmt = $conn->prepare("insert into user_info(firstName, lastName, gender, email, pass) 
    values(?,?,?,?,?)");
    $stmt->bind_param("sssss", $firstName, $lastName, $gender, $email, $password);
    $stmt->execute();
    echo "Registration Successfully";
    $stmt->close();
    $conn->close();
}
?>