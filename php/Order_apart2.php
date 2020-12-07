<?php
$name_client = $_POST[data_1];
$phone_client = $_POST[data_2];
$date_1 = $_POST[date_1];
$date_2 = $_POST[date_2];

$date = '';

if(empty($date_1)){
    $date = 'не указана.';
}else{
    
    if(!empty($date_1)){
        $date .= $date_1;
    }
    if(!empty($date_2)){
        $date .= ' - '.$date_2;
    }
    
    $d1 = strtotime($date_1);
    $d2 = strtotime($date_2);
    $count_days = ($d2 - $d1)/86400;
    
    $date .= ' ('.$count_days.' дней)';
    
}

$message= "Заказ: АПАРТАМЕНТ №2\nИмя клиента: ".$name_client."\nТелефон клиента: ".$phone_client."\nДата: ".$date;
 
mail('sales@timetotrip.org', 'ЗАКАЗ С САЙТА', $message);

?>