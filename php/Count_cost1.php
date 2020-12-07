<?php
$date1 = $_POST[date_1];
$date2 = $_POST[date_2];
$multiplier = 75;
$cost = 0;
$count_days = 0;

$d1 = strtotime($date1);
$d2 = strtotime($date2);


$count_days = ($d2 - $d1)/86400;

if ($count_days <= 0){
    echo(0);
}else{
    if($count_days >= 1 && $count_days <= 3){
        $cost = $count_days * $multiplier;
        echo(abs($cost));
    }
    if($count_days >= 4 && $count_days <= 7){
        $cost = $count_days * $multiplier * 0.95;
        echo(abs($cost));
    }
    if($count_days >= 8 && $count_days <= 10){
        $cost = $count_days * $multiplier * 0.90;
        echo(abs($cost));
    }   
    if($count_days >= 11 && $count_days <= 13){
        $cost = $count_days * $multiplier * 0.85;
        echo(abs($cost));
    }
    if($count_days >= 14 && $count_days <= 27){
        $cost = $count_days * $multiplier * 0.80;
        echo(abs($cost));
    }
    if($count_days >= 28){
        $cost = $count_days * $multiplier * 0.70;
        echo(abs($cost));
    }
}

?>