<?php
$name_client = $_POST[data_1];
$phone_client = $_POST[data_2];

$message= "Заказ: ФОРМА (ГЛАВНЫЙ ЭКРАН)\nИмя клиента: ".$name_client."\nТелефон клиента: ".$phone_client;
 
mail('sales@timetotrip.org', 'ЗАКАЗ С САЙТА', $message);

?>